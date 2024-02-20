import styled from 'styled-components'
import { FONTS } from '../../styles/themes/default'

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`
export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 2.625rem;
  border: 1px solid ${({ theme }) => theme.COLORS.BASE_BUTTON};
  background: ${({ theme }) => theme.COLORS.BASE_INPUT};

  border-radius: 6px;

  transition: all 0.2s;

  &[data-state='focused'] {
    border-color: ${({ theme }) => theme.COLORS.YELLOW_DARK};
  }

  &[data-state='blurred'] {
    border-color: ${({ theme }) => theme.COLORS.BASE_BUTTON};
  }

  input {
    width: 100%;
    border: none;
    outline: none;
    background: transparent;

    padding: 0.75rem;

    ${FONTS.TEXT_S}
    color: ${({ theme }) => theme.COLORS.BASE_TEXT};

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.BASE_LABEL};
    }
  }

  span {
    color: ${({ theme }) => theme.COLORS.BASE_LABEL};
    padding-right: 12px;
    ${FONTS.TEXT_S}
    font-style: italic;
  }
`
