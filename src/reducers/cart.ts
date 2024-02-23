import { Order } from '../contexts/CartContext'
import { CartItemDTO } from '../dtos/CartItemDTO'
import { ActionTypes } from './actions'

interface CartState {
  cart: CartItemDTO[]
  orders: Order[]
}

export function cartReducer(state: CartState, action: any) {
  let itemAlreadyAdded
  let itemToIncrement
  let itemToDecrement
  let newOrder

  switch (action.type) {
    case ActionTypes.ADD_NEW_ITEM:
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
                  quantity: cartItem.quantity + action.payload.item.quantity,
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
    case ActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.itemId),
      }
    case ActionTypes.INCREASE_ITEM_QUANTITY:
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
    case ActionTypes.DECREASE_ITEM_QUANTITY:
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

    case ActionTypes.CHECKOUT_SUCCESS:
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
}
