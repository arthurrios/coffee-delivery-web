import { ShoppingCart } from '@phosphor-icons/react'
import { CartContainer, Counter } from './styles'
import { useTheme } from 'styled-components'
import { Link } from 'react-router-dom'
import { useCart } from '../../hooks/useCart'

export function Cart() {
  const { cart } = useCart()

  const { COLORS } = useTheme()

  return (
    <Link to="/checkout" style={{ borderRadius: '6px' }}>
      <CartContainer>
        {cart.length > 0 && <Counter>{cart.length}</Counter>}
        <ShoppingCart size={22} weight="fill" color={COLORS.YELLOW_DARK} />
      </CartContainer>
    </Link>
  )
}
