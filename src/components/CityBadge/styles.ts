import styled from 'styled-components'
import { FONTS } from '../../styles/themes/default'

export const CityBadgeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;

  padding: 0.5rem;
  background: ${({ theme }) => theme.COLORS.PURPLE_LIGHT};
  border-radius: 6px;
`
export const Text = styled.text`
  color: ${({ theme }) => theme.COLORS.PURPLE_DARK};
  ${FONTS.TEXT_S}
`
