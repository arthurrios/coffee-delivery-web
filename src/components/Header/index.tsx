import { HeaderContainer } from './styles'
import LogoSvg from '../../assets/logo.svg'
import { Link } from 'react-router-dom'
import { CityBadge } from '../CityBadge'
import { Cart } from '../Cart'

export function Header() {
  return (
    <HeaderContainer>
      <Link to="/">
        <img title="Coffee Delivery" src={LogoSvg} alt="" />
      </Link>
      <div>
        <CityBadge />
        <Cart />
      </div>
    </HeaderContainer>
  )
}
