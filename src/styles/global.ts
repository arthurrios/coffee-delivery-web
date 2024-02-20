import { createGlobalStyle } from 'styled-components'
import { FONTS } from './themes/default'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
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

    &:focus {
      border: none;
    }
  }

  a:focus {
    outline: none;
    cursor: pointer;
  }
`
