import { NavigateFunction } from 'react-router-dom'
import { CartItemDTO } from '../dtos/CartItemDTO'
import { NewOrderFormData } from '../pages/Checkout'

export enum ActionTypes {
  ADD_NEW_ITEM = 'ADD_NEW_ITEM',
  REMOVE_ITEM = 'REMOVE_ITEM',
  INCREASE_ITEM_QUANTITY = 'INCREASE_ITEM_QUANTITY',
  DECREASE_ITEM_QUANTITY = 'DECREASE_ITEM_QUANTITY',
  CHECKOUT_SUCCESS = 'CHECKOUT_SUCCESS',
}

export function addNewItemToCartAction(item: CartItemDTO) {
  return {
    type: ActionTypes.ADD_NEW_ITEM,
    payload: {
      item,
    },
  }
}

export function removeItemFromCartAction(itemId: string) {
  return {
    type: ActionTypes.REMOVE_ITEM,
    payload: {
      itemId,
    },
  }
}

export function increaseItemQuantityAction(itemId: string) {
  return {
    type: ActionTypes.INCREASE_ITEM_QUANTITY,
    payload: {
      itemId,
    },
  }
}

export function decreaseItemQuantityAction(itemId: string) {
  return {
    type: ActionTypes.DECREASE_ITEM_QUANTITY,
    payload: {
      itemId,
    },
  }
}

export function checkoutAction(
  order: NewOrderFormData,
  callback: NavigateFunction,
) {
  return {
    type: ActionTypes.CHECKOUT_SUCCESS,
    payload: {
      order,
      callback,
    },
  }
}
