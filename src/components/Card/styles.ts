import styled from 'styled-components'
import { FONTS } from '../../styles/themes/default'

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 19.375rem;
  width: 16rem;
  padding: 0 1.5rem 1.25rem;

  border-top-left-radius: 6px;
  border-top-right-radius: 36px;
  border-bottom-right-radius: 6px;
  border-bottom-left-radius: 36px;

  background: ${({ theme }) => theme.COLORS.BASE_CARD};

  > div:first-child {
    display: flex;
    align-items: center;
    flex-direction: column;
    > h1 {
      ${FONTS.TITLE_S}
      color: ${({ theme }) => theme.COLORS.BASE_SUBTITLE};
      margin-bottom: 0.5rem;
    }

    > span {
      ${FONTS.TEXT_S}
      color: ${({ theme }) => theme.COLORS.BASE_LABEL};
      text-align: center;
    }
  }
`
export const CoffeeImg = styled.img`
  height: 7.5rem;
  width: 7.5rem;
  margin-top: -1.25rem;
  margin-bottom: 0.75rem;
`
export const TagsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  margin-bottom: 1rem;
`
export const Tag = styled.div`
  display: flex;
  align-items: center;

  background: ${({ theme }) => theme.COLORS.YELLOW_LIGHT};
  padding: 0.25rem 0.5rem;
  border-radius: 9999px;

  span {
    ${FONTS.TAG}
    text-transform: uppercase;
    color: ${({ theme }) => theme.COLORS.YELLOW_DARK};
  }
`

export const Buy = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 2.375rem;
`
export const PriceContainer = styled.div`
  display: flex;
  align-items: baseline;
  gap: 4px;
`
export const Price = styled.span`
  ${FONTS.TITLE_M}
`
export const CoffeeQuantity = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
  max-width: 7.375rem;
  flex: 1;

  > button {
    display: flex;
    align-items: center;
    padding: 0.5rem;
    border-radius: 6px;
    height: 2.375rem;

    background: ${({ theme }) => theme.COLORS.PURPLE_DARK};
    transition: all 0.1s;

    &:hover {
      background: ${({ theme }) => theme.COLORS.PURPLE};
    }
  }
`
