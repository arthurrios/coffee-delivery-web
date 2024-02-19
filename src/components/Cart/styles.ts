import styled from 'styled-components'

export const CartContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.5rem;
  height: 2.5rem;
  width: 2.5rem;
  border-radius: 6px;
  background: ${({ theme }) => theme.COLORS.YELLOW_LIGHT};
`
