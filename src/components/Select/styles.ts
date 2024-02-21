import styled from 'styled-components'
import { FONTS } from '../../styles/themes/default'
import { SelectProps } from '.'

export const Container = styled.button<SelectProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;

  width: 11.125rem;
  padding: 1rem;
  background: ${({ theme }) => theme.COLORS.BASE_BUTTON};
  border-radius: 6px;
  border: 1px solid transparent;

  &[data-state='true'] {
    border: 1px solid ${({ theme }) => theme.COLORS.PURPLE};
    background: ${({ theme }) => theme.COLORS.PURPLE_LIGHT};
  }

  transition: all 0.1s;

  &:hover[data-state='false'] {
    background: ${({ theme }) => theme.COLORS.BASE_HOVER};
  }

  h4 {
    ${FONTS.BUTTON_M}
    text-transform: uppercase;
  }
`
