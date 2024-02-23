import { ReactNode, createContext, useEffect, useReducer } from 'react'
import { CartItemDTO } from '../dtos/CartItemDTO'
import { useNavigate } from 'react-router-dom'
import { NewOrderFormData } from '../pages/Checkout'

interface Order extends NewOrderFormData {
  id: number
  items: CartItemDTO[]
}

interface CartContextType {
  cart: CartItemDTO[]
  orders: Order[]
  addNewItemToCart: (item: CartItemDTO) => void
  removeItemFromCart: (itemId: string) => void
  increaseItemQuantity: (itemId: string) => void
  decreaseItemQuantity: (itemId: string) => void
  checkout: (newOrder: NewOrderFormData) => void
}

interface CartState {
  cart: CartItemDTO[]
  orders: Order[]
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(
    (state: CartState, action: any) => {
      let itemAlreadyAdded
      let itemToIncrement
      let itemToDecrement
      let newOrder

      switch (action.type) {
        case 'ADD_NEW_ITEM':
          itemAlreadyAdded = state.cart.find(
            (cartItem) => cartItem.id === action.payload.item.id,
          )
          if (itemAlreadyAdded) {
            return {
              ...state,
              cart: state.cart.map((cartItem) =>
                cartItem.id === action.payload.item.id
                  ? {
                      ...cartItem,
                      quantity:
                        cartItem.quantity + action.payload.item.quantity,
                    }
                  : cartItem,
              ),
            }
          } else {
            return {
              ...state,
              cart: [...state.cart, action.payload.item],
            }
          }
        case 'REMOVE_ITEM':
          return {
            ...state,
            cart: state.cart.filter(
              (item) => item.id !== action.payload.itemId,
            ),
          }
        case 'INCREASE_ITEM_QUANTITY':
          itemToIncrement = state.cart.find(
            (item) => item.id === action.payload.itemId,
          )

          if (itemToIncrement) {
            const newItemQuantity = (itemToIncrement.quantity += 1)

            return {
              ...state,
              cart: state.cart.map((item) => {
                if (item.id === action.payload.itemId) {
                  return { ...item, quantity: newItemQuantity }
                } else {
                  return item
                }
              }),
            }
          }
          break
        case 'DECREASE_ITEM_QUANTITY':
          itemToDecrement = state.cart.find(
            (item) => item.id === action.payload.itemId,
          )

          if (itemToDecrement) {
            const newItemQuantity = (itemToDecrement.quantity -= 1)

            return {
              ...state,
              cart: state.cart.map((item) => {
                if (item.id === action.payload.itemId) {
                  return { ...item, quantity: newItemQuantity }
                } else {
                  return item
                }
              }),
            }
          }
          break

        case 'CHECKOUT_SUCCESS':
          newOrder = {
            ...action.payload.order,
            id: new Date().getTime(),
            items: state.cart,
          }

          action.payload.callback(`/order/${newOrder.id}/success`)
          return {
            cart: [],
            orders: [...state.orders, newOrder],
          }

        default:
          return state
      }
      return state
    },
    { cart: [], orders: [] },
    (initialState) => {
      const storedStateAsJSON = localStorage.getItem(
        '@coffee-delivery:cart-state-1.0.0',
      )

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON)
      }

      return initialState
    },
  )

  const { cart, orders } = cartState

  const navigate = useNavigate()

  useEffect(() => {
    const stateJSON = JSON.stringify(cartState)

    localStorage.setItem('@coffee-delivery:cart-state-1.0.0', stateJSON)
  }, [cartState])

  function addNewItemToCart(item: CartItemDTO) {
    dispatch({
      type: 'ADD_NEW_ITEM',
      payload: {
        item,
      },
    })
  }

  function removeItemFromCart(itemId: string) {
    dispatch({
      type: 'REMOVE_ITEM',
      payload: {
        itemId,
      },
    })
  }

  function increaseItemQuantity(itemId: string) {
    dispatch({
      type: 'INCREASE_ITEM_QUANTITY',
      payload: {
        itemId,
      },
    })
  }

  function decreaseItemQuantity(itemId: string) {
    dispatch({
      type: 'DECREASE_ITEM_QUANTITY',
      payload: {
        itemId,
      },
    })
  }

  function checkout(order: NewOrderFormData) {
    dispatch({
      type: 'CHECKOUT_SUCCESS',
      payload: {
        order,
        callback: navigate,
      },
    })
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        orders,
        addNewItemToCart,
        removeItemFromCart,
        increaseItemQuantity,
        decreaseItemQuantity,
        checkout,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
