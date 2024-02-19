import BannerBg from '../../../../assets/vector-bg.svg'
import { BannerContainer, BannerContent, BgImg, Heading, Info } from './styles'
import BannerImg from '../../../../assets/coffee-banner.svg'
import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'
import { useTheme } from 'styled-components'

export function Banner() {
  const { COLORS } = useTheme()

  return (
    <BannerContainer>
      <BgImg src={BannerBg} alt="" />
      <BannerContent>
        <div>
          <Heading>
            <h1>Find the perfect coffee for any time of day</h1>
            <span>
              With Coffee Delivery you receive your coffee wherever you are,
              anytime
            </span>
          </Heading>

          <Info>
            <div>
              <ShoppingCart
                size={32}
                weight="fill"
                color={COLORS.BACKGROUND}
                style={{ backgroundColor: COLORS.YELLOW_DARK }}
              />
              <span>Simple and secure purchase</span>
            </div>

            <div>
              <Package
                size={32}
                weight="fill"
                color={COLORS.BACKGROUND}
                style={{ backgroundColor: COLORS.BASE_TEXT }}
              />
              <span>Fast and tracked delivery</span>
            </div>
            <div>
              <Timer
                size={32}
                weight="fill"
                color={COLORS.BACKGROUND}
                style={{ backgroundColor: COLORS.YELLOW }}
              />
              <span>Packaging keeps the coffee intact</span>
            </div>
            <div>
              <Coffee
                size={32}
                weight="fill"
                color={COLORS.BACKGROUND}
                style={{ backgroundColor: COLORS.PURPLE }}
              />
              <span>The coffee arrives fresh to you</span>
            </div>
          </Info>
        </div>
        <img src={BannerImg} alt="" />
      </BannerContent>
    </BannerContainer>
  )
}
