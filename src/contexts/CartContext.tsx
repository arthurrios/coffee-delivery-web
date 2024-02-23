import { ReactNode, createContext, useEffect, useReducer } from 'react'
import { CartItemDTO } from '../dtos/CartItemDTO'
import { useNavigate } from 'react-router-dom'
import { NewOrderFormData } from '../pages/Checkout'
import { cartReducer } from '../reducers/cart'
import {
  addNewItemToCartAction,
  removeItemFromCartAction,
  increaseItemQuantityAction,
  decreaseItemQuantityAction,
  checkoutAction,
} from '../reducers/actions'

export interface Order extends NewOrderFormData {
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

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(
    cartReducer,
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
    dispatch(addNewItemToCartAction(item))
  }

  function removeItemFromCart(itemId: string) {
    dispatch(removeItemFromCartAction(itemId))
  }

  function increaseItemQuantity(itemId: string) {
    dispatch(increaseItemQuantityAction(itemId))
  }

  function decreaseItemQuantity(itemId: string) {
    dispatch(decreaseItemQuantityAction(itemId))
  }

  function checkout(order: NewOrderFormData) {
    dispatch(checkoutAction(order, navigate))
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
