import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header'
import { LayoutContainer } from './styles'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '../styles/themes/default'
import { CartContextProvider } from '../contexts/CartContext'
import { GlobalStyle } from '../styles/global'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <CartContextProvider>
          <Header />
          <Outlet />
        </CartContextProvider>
      </ThemeProvider>
    </LayoutContainer>
  )
}
