import styled from 'styled-components'
import { FONTS } from '../../styles/themes/default'

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  width: 23rem;
  padding: 0.5rem 0.25rem;

  > div {
    display: flex;
    align-items: center;
    gap: 1.25rem;

    img {
      height: 4rem;
      width: 4rem;
    }

    > div {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      h4 {
        ${FONTS.TEXT_M}
        color: ${({ theme }) => theme.COLORS.BASE_SUBTITLE};
      }
    }
  }

  > span {
    ${FONTS.TEXT_M}
    font-weight: bold;
  }
`
export const ItemControls = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`
export const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;

  padding: 0 0.5rem;
  height: 2rem;
  border-radius: 6px;
  background: ${({ theme }) => theme.COLORS.BASE_BUTTON};

  transition: all 0.1s;

  &:hover {
    background: ${({ theme }) => theme.COLORS.BASE_HOVER};
  }

  span {
    ${FONTS.BUTTON_M}
    text-transform: uppercase;
  }

  svg {
    color: ${({ theme }) => theme.COLORS.PURPLE};
  }
`
