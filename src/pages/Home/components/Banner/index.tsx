import BannerBg from '../../../../assets/vector-bg.svg'
import {
  BannerContainer,
  BannerContent,
  BgImg,
  GradientOverlay,
  Heading,
  Info,
} from './styles'
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
        <GradientOverlay xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="fadeGradient" gradientTransform="rotate(90)">
              <stop offset="0%" stopColor={COLORS.BACKGROUND} stopOpacity="1" />
              <stop
                offset="15%"
                stopColor={COLORS.BACKGROUND}
                stopOpacity="0"
              />
              <stop
                offset="85%"
                stopColor={COLORS.BACKGROUND}
                stopOpacity="0"
              />
              <stop
                offset="100%"
                stopColor={COLORS.BACKGROUND}
                stopOpacity="1"
              />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#fadeGradient)" />
        </GradientOverlay>
      </BannerContent>
    </BannerContainer>
  )
}
