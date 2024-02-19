import styled from 'styled-components'
import { FONTS } from '../../../../styles/themes/default'

export const BannerContainer = styled.div`
  position: relative;
`

export const BgImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 34rem;
  object-fit: cover;
`

export const BannerContent = styled.div`
  height: 34rem;
  max-width: 70rem;
  margin: 0 auto;
  padding: 5.875rem 0 6.75rem;

  display: flex;
  justify-content: space-between;
  gap: 3.5rem;

  > img {
    height: 22.5rem;
  }

  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`
export const Heading = styled.div`
  h1 {
    ${FONTS.TITLE_XL}
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.COLORS.BASE_TITLE};
  }

  span {
    ${FONTS.TEXT_L}
    color: ${({ theme }) => theme.COLORS.BASE_SUBTITLE};
  }
`
export const Info = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 20px;
  grid-column-gap: 40px;

  > div {
    flex: 1;
    display: flex;
    align-items: center;
    gap: 12px;

    svg {
      padding: 0.5rem;
      border-radius: 50%;
    }
  }
`
