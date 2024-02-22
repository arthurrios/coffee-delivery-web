import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default.ts'
import { GlobalStyle } from './styles/global.ts'
import { RouterProvider } from 'react-router-dom'
import { router } from './Router.tsx'
import { CartContextProvider } from './contexts/CartContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <CartContextProvider>
        <RouterProvider router={router} />
      </CartContextProvider>
      <GlobalStyle />
    </ThemeProvider>
  </React.StrictMode>,
)
