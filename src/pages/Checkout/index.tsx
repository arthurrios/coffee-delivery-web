import { CurrencyDollar, MapPinLine } from '@phosphor-icons/react'
import {
  AddressFormContainer,
  CartContainer,
  CheckoutContainer,
  ContainerTitle,
  InputFormContainer,
  PaymentContainer,
} from './styles'
import { useTheme } from 'styled-components'
import { Input } from '../../components/Input'

export function Checkout() {
  const { COLORS } = useTheme()

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
        </PaymentContainer>
      </div>

      <div>
        <h2>Selected items</h2>
        <CartContainer></CartContainer>
      </div>
    </CheckoutContainer>
  )
}
