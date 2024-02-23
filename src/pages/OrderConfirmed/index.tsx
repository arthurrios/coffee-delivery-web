import { Container, OrderBox, OrderInfo } from './styles'
import OrderSvg from '../../assets/order-confirmed-image.svg'
import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'
import { useTheme } from 'styled-components'
import { useParams } from 'react-router-dom'
import { useCart } from '../../hooks/useCart'

export function OrderConfirmed() {
  const { orders } = useCart()
  const { orderId } = useParams()

  const order = orders.find((order) => order.id === Number(orderId))

  const paymentMethod = {
    creditCard: 'Credit Card',
    debitCard: 'Debit Card',
    cash: 'Cash',
  }

  const { COLORS } = useTheme()

  if (!order?.id) {
    return null
  }

  return (
    <Container>
      <h1>Yay! Order confirmed</h1>
      <p>Now just wait until your coffee reaches you</p>
      <div>
        <OrderBox>
          <OrderInfo>
            <div>
              <MapPin
                size={32}
                weight="fill"
                style={{ background: COLORS.PURPLE }}
              />
              <div>
                <span>
                  Deliver to{' '}
                  <strong>
                    {order.street}, {order.number}
                  </strong>
                </span>

                <span>
                  {order.city} - {order.state}, {order.country}
                </span>
              </div>
            </div>
            <div>
              <Timer
                size={32}
                weight="fill"
                style={{ background: COLORS.YELLOW }}
              />
              <div>
                <span>Estimated delivery time</span>
                <strong>20 min - 30 min</strong>
              </div>
            </div>
            <div>
              <CurrencyDollar
                size={32}
                style={{ background: COLORS.YELLOW_DARK }}
              />
              <div>
                <span>Payment on delivery</span>
                <strong>{paymentMethod[order.paymentMethod]}</strong>
              </div>
            </div>
          </OrderInfo>
        </OrderBox>
        <img src={OrderSvg} alt="" />
      </div>
    </Container>
  )
}
