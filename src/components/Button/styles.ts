import styled from 'styled-components'
import { FONTS } from '../../styles/themes/default'

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.75rem 0.5rem;
  border-radius: 6px;

  background: ${({ theme }) => theme.COLORS.YELLOW};

  transition: all 0.1s;

  ${FONTS.BUTTON_G}
  text-transform: uppercase;
  color: ${({ theme }) => theme.COLORS.WHITE};

  &:hover(:not):disabled {
    background: ${({ theme }) => theme.COLORS.YELLOW_DARK};
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`
