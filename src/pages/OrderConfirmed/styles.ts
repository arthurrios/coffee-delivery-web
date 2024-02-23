import styled from 'styled-components'
import { FONTS } from '../../styles/themes/default'

export const Container = styled.div`
  margin: 5rem auto 0;
  max-width: 70rem;

  > h1 {
    ${FONTS.TITLE_L}
    color: ${({ theme }) => theme.COLORS.YELLOW_DARK};
    margin-bottom: 0.25rem;
  }

  > p {
    ${FONTS.TEXT_L}
    color: ${({ theme }) => theme.COLORS.BASE_SUBTITLE};
    margin-bottom: 2.5rem;
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`
export const OrderBox = styled.div`
  border: 1px solid transparent;
  border-radius: 6px 36px;
  width: 32.875rem;

  background-origin: border-box;
  background-image: ${({ theme }) =>
    `linear-gradient(to bottom right, ${theme.COLORS.YELLOW}, ${theme.COLORS.PURPLE})`};
`
export const OrderInfo = styled.div`
  padding: 2.5rem;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  border-radius: 6px 36px;

  display: flex;
  flex-direction: column;
  gap: 32px;

  > div {
    display: flex;
    align-items: center;
    gap: 12px;

    svg {
      border-radius: 50%;
      padding: 8px;
      color: ${({ theme }) => theme.COLORS.BACKGROUND};
    }

    > div {
      display: flex;
      flex-direction: column;
    }
  }
`
