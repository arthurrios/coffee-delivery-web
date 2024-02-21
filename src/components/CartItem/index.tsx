import { useState } from 'react'
import { CartItemDTO } from '../../dtos/CartItemDTO'
import { QuantityCounter } from '../QuantityCounter'
import { Container, ItemControls, RemoveButton } from './styles'
import { Trash } from '@phosphor-icons/react'

interface CartItemProps {
  data: CartItemDTO
}

export function CartItem({ data }: CartItemProps) {
  const [quantity, setQuantity] = useState(data.quantity)

  function handleIncreaseQuantity() {
    setQuantity((state) => state + 1)
  }

  function handleDecreaseQuantity() {
    if (quantity > 1) {
      setQuantity((state) => state - 1)
    }
  }

  return (
    <Container>
      <div>
        <img src={data.image} alt="Coffee Image" />
        <div>
          <h4>{data.name}</h4>
          <ItemControls>
            <QuantityCounter
              quantity={quantity}
              increaseQuantity={handleIncreaseQuantity}
              decreaseQuantity={handleDecreaseQuantity}
              style={{ height: '2rem' }}
            />
            <RemoveButton>
              <Trash />
              <span>Remove</span>
            </RemoveButton>
          </ItemControls>
        </div>
      </div>
      <span>$ {data.price.toFixed(2)}</span>
    </Container>
  )
}
