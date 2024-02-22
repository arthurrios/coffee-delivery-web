import { CartItemDTO } from '../../dtos/CartItemDTO'
import { QuantityCounter } from '../QuantityCounter'
import { Container, ItemControls, RemoveButton } from './styles'
import { Trash } from '@phosphor-icons/react'
import { useCart } from '../../hooks/useCart'

interface CartItemProps {
  coffee: CartItemDTO
}

export function CartItem({ coffee }: CartItemProps) {
  const { increaseItemQuantity, decreaseItemQuantity, removeItemFromCart } =
    useCart()

  function handleIncreaseQuantity() {
    increaseItemQuantity(coffee.id)
  }

  function handleDecreaseQuantity() {
    decreaseItemQuantity(coffee.id)
  }

  function handleRemoveItem(itemId: string) {
    removeItemFromCart(itemId)
  }

  return (
    <Container>
      <div>
        <img src={coffee.image} alt="Coffee Image" />
        <div>
          <h4>{coffee.name}</h4>
          <ItemControls>
            <QuantityCounter
              quantity={coffee.quantity}
              increaseQuantity={handleIncreaseQuantity}
              decreaseQuantity={handleDecreaseQuantity}
              style={{ height: '2rem' }}
            />
            <RemoveButton onClick={() => handleRemoveItem(coffee.id)}>
              <Trash />
              <span>Remove</span>
            </RemoveButton>
          </ItemControls>
        </div>
      </div>
      <span>$ {coffee.price.toFixed(2)}</span>
    </Container>
  )
}
