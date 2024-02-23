import { ReactNode, createContext, useState } from 'react'
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

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cart, setCart] = useState<CartItemDTO[]>([])
  const [orders, setOrders] = useState<Order[]>([])

  const navigate = useNavigate()

  function addNewItemToCart(item: CartItemDTO) {
    const itemAlreadyAdded = cart.find((cartItem) => cartItem.id === item.id)
    if (itemAlreadyAdded) {
      itemAlreadyAdded.quantity += item.quantity
    } else {
      setCart((state) => [...state, item])
    }
  }

  function removeItemFromCart(itemId: string) {
    const newCartItems = cart.filter((item) => item.id !== itemId)
    setCart(newCartItems)
  }

  function increaseItemQuantity(itemId: string) {
    const itemToIncrement = cart.find((item) => item.id === itemId)

    if (itemToIncrement?.id) {
      const newItemQuantity = (itemToIncrement.quantity += 1)

      setCart((state) =>
        state.map((item) => {
          if (item.id === itemId) {
            return { ...item, quantity: newItemQuantity }
          } else {
            return item
          }
        }),
      )
    }
  }

  function decreaseItemQuantity(itemId: string) {
    const itemToDecrement = cart.find((item) => item.id === itemId)

    if (itemToDecrement?.id && itemToDecrement.quantity > 1) {
      const newItemQuantity = (itemToDecrement.quantity -= 1)

      setCart((state) =>
        state.map((item) => {
          if (item.id === itemId) {
            return { ...item, quantity: newItemQuantity }
          } else {
            return item
          }
        }),
      )
    }
  }

  function checkout(order: NewOrderFormData) {
    const newOrder = {
      ...order,
      id: new Date().getTime(),
      items: cart,
    }
    setOrders((state) => [...state, newOrder])

    navigate(`/order/${newOrder.id}/success`)

    setCart([])
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
