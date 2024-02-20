import styled from 'styled-components'
import { FONTS } from '../../styles/themes/default'

export const CoffeeList = styled.main`
  max-width: 70rem;
  margin: 0 auto;
  margin-bottom: 9.8rem;

  > h2 {
    ${FONTS.TITLE_L}
    color: ${({ theme }) => theme.COLORS.BASE_SUBTITLE};
    margin-bottom: 3.375rem;
    margin-top: 2rem;
  }

  > div {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2.5rem 2rem;
  }
`
