import { CurrencyDollar, MapPinLine } from '@phosphor-icons/react'
import {
  AddressFormContainer,
  CartContainer,
  CheckoutContainer,
  ContainerTitle,
  InputFormContainer,
  LabelWithPrice,
  Line,
  OrderTotal,
  PaymentContainer,
  PaymentMethods,
} from './styles'
import { useTheme } from 'styled-components'
import { Input } from '../../components/Input'
import { Select } from '../../components/Select'
import { Fragment, useState } from 'react'
import { CartItem } from '../../components/CartItem'

import espressoImage from '../../assets/coffees/espresso.png'
import latteImage from '../../assets/coffees/latte.png'
import { CartItemDTO } from '../../dtos/CartItemDTO.ts'
import { Button } from '../../components/Button/index.tsx'
import { useNavigate } from 'react-router-dom'

export function Checkout() {
  const [cartItems, setCartItems] = useState<CartItemDTO[]>([
    {
      id: '1',
      name: 'Espresso',
      quantity: 2,
      price: 7,
      itemTotal: 0,
      image: espressoImage,
    },
    {
      id: '2',
      name: 'Latte',
      quantity: 3,
      price: 10.5,
      itemTotal: 0,
      image: latteImage,
    },
  ])
  const [paymentMethod, setPaymentMethod] = useState('')
  const [orderTotal, setOrderTotal] = useState(33.2)

  const { COLORS } = useTheme()

  const deliveryFee = 3.5

  const navigate = useNavigate()

  function handleConfirmOrder() {
    navigate('/order-confirmed')
  }

  return (
    <CheckoutContainer>
      <div>
        <h2>Complete your order</h2>

        <AddressFormContainer>
          <ContainerTitle>
            <MapPinLine color={COLORS.YELLOW_DARK} />
            <div>
              <h3>Delivery address</h3>
              <span>
                Enter the address where you would like to receive your order
              </span>
            </div>
          </ContainerTitle>
          <InputFormContainer>
            <Input
              placeholder="ZIP"
              containerProps={{ style: { gridArea: 'zip' } }}
            />

            <Input
              placeholder="Street"
              containerProps={{ style: { gridArea: 'street' } }}
            />

            <Input
              placeholder="Number"
              containerProps={{ style: { gridArea: 'number' } }}
            />
            <Input
              placeholder="Complement"
              containerProps={{ style: { gridArea: 'complement' } }}
              optional
            />

            <Input
              placeholder="Country"
              containerProps={{ style: { gridArea: 'country' } }}
            />
            <Input
              placeholder="City"
              containerProps={{ style: { gridArea: 'city' } }}
            />
            <Input
              placeholder="State"
              containerProps={{ style: { gridArea: 'state' } }}
            />
          </InputFormContainer>
        </AddressFormContainer>

        <PaymentContainer>
          <ContainerTitle>
            <CurrencyDollar color={COLORS.PURPLE} />
            <div>
              <h3>Payment</h3>
              <span>
                Payment is made upon delivery. Choose the way you want to pay
              </span>
            </div>
          </ContainerTitle>
          <PaymentMethods>
            <Select
              option="creditCard"
              isSelected={paymentMethod === 'creditCard'}
              onClick={() => setPaymentMethod('creditCard')}
            />
            <Select
              option="debitCard"
              isSelected={paymentMethod === 'debitCard'}
              onClick={() => setPaymentMethod('debitCard')}
            />
            <Select
              option="cash"
              isSelected={paymentMethod === 'cash'}
              onClick={() => setPaymentMethod('cash')}
            />
          </PaymentMethods>
        </PaymentContainer>
      </div>

      <div>
        <h2>Selected items</h2>
        <CartContainer>
          {cartItems.map((coffee) => {
            return (
              <Fragment key={coffee.id}>
                <CartItem data={coffee} />
                <Line />
              </Fragment>
            )
          })}
          <OrderTotal>
            <LabelWithPrice>
              <h4>Items total</h4>
              <span>$ 29.70</span>
            </LabelWithPrice>
            <LabelWithPrice>
              <h4>Delivery fee</h4>
              <span>$ {deliveryFee.toFixed(2)}</span>
            </LabelWithPrice>
            <LabelWithPrice>
              <h1>Total</h1>
              <h1>$ {orderTotal.toFixed(2)}</h1>
            </LabelWithPrice>
          </OrderTotal>
          <Button onClick={handleConfirmOrder} title="confirm order" />
        </CartContainer>
      </div>
    </CheckoutContainer>
  )
}
