import styled from 'styled-components'
import { FONTS } from '../../styles/themes/default'

export const CartContainer = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.5rem;
  height: 2.5rem;
  width: 2.5rem;
  border-radius: 6px;
  background: ${({ theme }) => theme.COLORS.YELLOW_LIGHT};
`
export const Counter = styled.div`
  position: absolute;
  top: -0.625rem;
  right: -0.625rem;

  display: flex;
  align-items: center;
  justify-content: center;

  height: 1.25rem;
  width: 1.25rem;
  border-radius: 50%;

  background: ${({ theme }) => theme.COLORS.YELLOW_DARK};
  color: ${({ theme }) => theme.COLORS.WHITE};
  ${FONTS.TEXT_XS}
`
