import { HTMLAttributes } from 'react'
import { BaseButton, Container, Number } from './styles'
import { Minus, Plus } from '@phosphor-icons/react'

interface Props extends HTMLAttributes<HTMLDivElement> {
  quantity: number
  increaseQuantity: () => void
  decreaseQuantity: () => void
}

export function QuantityCounter({
  quantity,
  increaseQuantity,
  decreaseQuantity,
  ...props
}: Props) {
  return (
    <Container {...props}>
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
