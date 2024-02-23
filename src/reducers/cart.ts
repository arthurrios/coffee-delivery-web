/* eslint-disable @typescript-eslint/no-explicit-any */
import { produce } from 'immer'
import { Order } from '../contexts/CartContext'
import { CartItemDTO } from '../dtos/CartItemDTO'
import { ActionTypes } from './actions'

interface CartState {
  cart: CartItemDTO[]
  orders: Order[]
}

export function cartReducer(state: CartState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_ITEM:
      return produce(state, (draft) => {
        const itemAlreadyAdded = draft.cart.find(
          (cartItem) => cartItem.id === action.payload.item.id,
        )
        if (itemAlreadyAdded) {
          itemAlreadyAdded.quantity += action.payload.item.quantity
        } else {
          draft.cart.push(action.payload.item)
        }
      })
    case ActionTypes.REMOVE_ITEM:
      return produce(state, (draft) => {
        draft.cart = draft.cart.filter(
          (item) => item.id !== action.payload.itemId,
        )
      })
    case ActionTypes.INCREASE_ITEM_QUANTITY:
      return produce(state, (draft) => {
        const itemToIncrement = draft.cart.find(
          (item) => item.id === action.payload.itemId,
        )

        if (itemToIncrement) {
          itemToIncrement.quantity += 1
        }
      })
    case ActionTypes.DECREASE_ITEM_QUANTITY:
      return produce(state, (draft) => {
        const itemToDecrement = draft.cart.find(
          (item) => item.id === action.payload.itemId,
        )

        if (itemToDecrement) {
          itemToDecrement.quantity -= 1
        }
      })

    case ActionTypes.CHECKOUT_SUCCESS:
      return produce(state, (draft) => {
        const newOrder = {
          ...action.payload.order,
          id: new Date().getTime(),
          items: state.cart,
        }

        draft.orders.push(newOrder)
        draft.cart = []

        action.payload.callback(`/order/${newOrder.id}/success`)
      })

    default:
      return state
  }
  return state
}
