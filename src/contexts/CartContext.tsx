import { ReactNode, createContext, useState } from 'react'
import { CartItemDTO } from '../dtos/CartItemDTO'

interface CartContextType {
  cart: CartItemDTO[]
  addNewItemToCart: (item: CartItemDTO) => void
  removeItemFromCart: (itemId: string) => void
  increaseItemQuantity: (itemId: string) => void
  decreaseItemQuantity: (itemId: string) => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cart, setCart] = useState<CartItemDTO[]>([])

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

  return (
    <CartContext.Provider
      value={{
        cart,
        addNewItemToCart,
        removeItemFromCart,
        increaseItemQuantity,
        decreaseItemQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
