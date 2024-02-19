import { createBrowserRouter } from 'react-router-dom'
import { DefaultLayout } from './layouts'
import { Home } from './pages/Home'
import { Checkout } from './pages/Checkout'
import { OrderConfirmed } from './pages/OrderConfirmed'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/checkout', element: <Checkout /> },
      { path: '/order-confirmed', element: <OrderConfirmed /> },
    ],
  },
])
