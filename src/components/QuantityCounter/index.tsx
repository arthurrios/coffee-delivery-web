import { BaseButton, Container, Number } from './styles'
import { Minus, Plus } from '@phosphor-icons/react'

interface Props {
  quantity: number
  increaseQuantity: () => void
  decreaseQuantity: () => void
}

export function QuantityCounter({
  quantity,
  increaseQuantity,
  decreaseQuantity,
}: Props) {
  return (
    <Container>
      <BaseButton onClick={decreaseQuantity}>
        <Minus size={14} weight="bold" />
      </BaseButton>
      <Number>{quantity}</Number>
      <BaseButton onClick={increaseQuantity}>
        <Plus size={14} weight="bold" />
      </BaseButton>
    </Container>
  )
}
