import { css } from 'styled-components'

export const defaultTheme = {
  COLORS: {
    YELLOW_DARK: '#C47F17',
    YELLOW: '#DBAC2C',
    YELLOW_LIGHT: '#F1E9C9',

    PURPLE_DARK: '#4B2995',
    PURPLE: '#8047F8',
    PURPLE_LIGHT: '#EBE5F9',

    BASE_TITLE: '#272221',
    BASE_SUBTITLE: '#403937',
    BASE_TEXT: '#574F4D',
    BASE_LABEL: '#8D8686',
    BASE_HOVER: '#D7D5D5',
    BASE_BUTTON: '#E6E5E5',
    BASE_INPUT: '#EDEDED',
    BASE_CARD: '#F3F2F2',
    BACKGROUND: '#FAFAFA',
    WHITE: '#FFFFFF',
  },
}

export const FONTS = {
  TITLE_XL: css`
    font-family: 'Baloo 2', sans-serif;
    font-size: 3rem;
    line-height: 130%;
    font-weight: 800;
  `,
  TITLE_L: css`
    font-family: 'Baloo 2', sans-serif;
    font-size: 2rem;
    line-height: 130%;
    font-weight: 800;
  `,
  TITLE_M: css`
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.5rem;
    line-height: 130%;
    font-weight: 800;
  `,
  TITLE_S: css`
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.25rem;
    line-height: 130%;
    font-weight: 700;
  `,
  TITLE_XS: css`
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.125rem;
    line-height: 130%;
    font-weight: 700;
  `,

  TEXT_L: css`
    font-family: 'Roboto', sans-serif;
    font-size: 1.25rem;
    line-height: 130%;
    font-weight: 400;
  `,
  TEXT_M: css`
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    line-height: 130%;
    font-weight: 400;
  `,
  TEXT_S: css`
    font-family: 'Roboto', sans-serif;
    font-size: 0.875rem;
    line-height: 130%;
    font-weight: 400;
  `,
  TEXT_XS: css`
    font-family: 'Roboto', sans-serif;
    font-size: 0.75rem;
    line-height: 130%;
    font-weight: 700;
  `,

  TAG: css`
    font-family: 'Roboto', sans-serif;
    font-size: 0.625rem;
    line-height: 130%;
    font-weight: 700;
  `,
  BUTTON_G: css`
    font-family: 'Roboto', sans-serif;
    font-size: 0.875rem;
    line-height: 160%;
    font-weight: 700;
  `,
  BUTTON_M: css`
    font-family: 'Roboto', sans-serif;
    font-size: 0.75rem;
    line-height: 160%;
    font-weight: 400;
  `,
}
