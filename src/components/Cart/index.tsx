import { ShoppingCart } from '@phosphor-icons/react'
import { CartContainer } from './styles'
import { useTheme } from 'styled-components'
import { Link } from 'react-router-dom'

export function Cart() {
  const { COLORS } = useTheme()

  return (
    <Link to="/checkout" style={{ borderRadius: '6px' }}>
      <CartContainer>
        <ShoppingCart size={22} weight="fill" color={COLORS.YELLOW_DARK} />
      </CartContainer>
    </Link>
  )
}
