import styled from 'styled-components'
import { FONTS } from '../../styles/themes/default'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  height: 2.375rem;

  padding: 0.5rem;
  border-radius: 6px;

  background: ${({ theme }) => theme.COLORS.BASE_BUTTON};
`

export const Number = styled.span`
  ${FONTS.TEXT_M}
  color: ${({ theme }) => theme.COLORS.BASE_TITLE};
`

export const BaseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  background: ${({ theme }) => theme.COLORS.BASE_BUTTON};
  max-width: 4.5rem;

  > svg {
    height: 100%;
    width: 100%;
    color: ${({ theme }) => theme.COLORS.PURPLE};
  }

  &:hover {
    > svg {
      color: ${({ theme }) => theme.COLORS.PURPLE_DARK};
    }
  }
`
