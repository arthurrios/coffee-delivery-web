import { createGlobalStyle } from 'styled-components'
import { FONTS } from './themes/default'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.COLORS.YELLOW_DARK};
  }

  body {
    background: ${({ theme }) => theme.COLORS.BACKGROUND};
    color: ${({ theme }) => theme.COLORS.BASE_TEXT};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    ${FONTS.TEXT_M}
  }

  button {
    border: none;
    cursor: pointer;
  }

  a:focus {
    outline: none;
  }
`
