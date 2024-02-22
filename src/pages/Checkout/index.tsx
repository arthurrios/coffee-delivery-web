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
  SectionTitle,
} from './styles'
import { useTheme } from 'styled-components'
import { Input } from '../../components/Input'
import { Select } from '../../components/Select'
import { Fragment, useState } from 'react'
import { CartItem } from '../../components/CartItem'

import { Button } from '../../components/Button/index.tsx'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useCart } from '../../hooks/useCart.tsx'

const newOrderFormValidationSchema = z.object({
  zip: z.number({ invalid_type_error: 'Enter a valid 5-digit ZIP code' }),
  street: z.string().min(1, 'Enter a street'),
  number: z
    .number({ invalid_type_error: 'Enter only numbers' })
    .min(1, 'Enter a number'),
  complement: z.string(),
  country: z.string().min(1, 'Enter a country'),
  city: z.string().min(1, 'Enter a city'),
  state: z.string().min(1, 'Enter a state'),
  paymentMethod: z.enum(['creditCard', 'debitCard', 'cash'], {
    invalid_type_error: 'Select payment method',
  }),
})

type NewOrderFormData = z.infer<typeof newOrderFormValidationSchema>

export function Checkout() {
  const { cart } = useCart()
  const [orderTotal, setOrderTotal] = useState(33.2)

  // const selectRef = useRef<HTMLInputElement>(null)

  const { COLORS } = useTheme()

  const newOrderForm = useForm<NewOrderFormData>({
    resolver: zodResolver(newOrderFormValidationSchema),
  })

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isValid },
  } = newOrderForm

  const deliveryFee = 3.5

  const navigate = useNavigate()

  const selectedPaymentMethod = watch('paymentMethod')

  function handleConfirmOrder() {}

  return (
    <CheckoutContainer>
      <form id="order" onSubmit={handleSubmit(handleConfirmOrder)}>
        <SectionTitle>Complete your order</SectionTitle>
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
              {...register('zip', { valueAsNumber: true })}
              maxLength={5}
              errorMessage={errors.zip?.message}
            />

            <Input
              placeholder="Street"
              containerProps={{ style: { gridArea: 'street' } }}
              {...register('street')}
              errorMessage={errors.street?.message}
            />

            <Input
              placeholder="Number"
              containerProps={{ style: { gridArea: 'number' } }}
              {...register('number', { valueAsNumber: true })}
              errorMessage={errors.number?.message}
            />
            <Input
              placeholder="Complement"
              containerProps={{ style: { gridArea: 'complement' } }}
              optional
              {...register('complement')}
              errorMessage={errors.complement?.message}
            />

            <Input
              placeholder="Country"
              containerProps={{ style: { gridArea: 'country' } }}
              {...register('country')}
              errorMessage={errors.country?.message}
            />
            <Input
              placeholder="City"
              containerProps={{ style: { gridArea: 'city' } }}
              {...register('city')}
              errorMessage={errors.city?.message}
            />
            <Input
              placeholder="State"
              containerProps={{ style: { gridArea: 'state' } }}
              {...register('state')}
              errorMessage={errors.state?.message}
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
              value="creditCard"
              isSelected={selectedPaymentMethod === 'creditCard'}
              {...register('paymentMethod')}
            />

            <Select
              option="debitCard"
              value="debitCard"
              isSelected={selectedPaymentMethod === 'debitCard'}
              {...register('paymentMethod')}
            />

            <Select
              option="cash"
              value="cash"
              isSelected={selectedPaymentMethod === 'cash'}
              {...register('paymentMethod')}
            />
          </PaymentMethods>
        </PaymentContainer>
      </form>

      <div>
        <SectionTitle>Selected items</SectionTitle>
        <CartContainer>
          {cart.map((coffee) => {
            return (
              <Fragment key={coffee.id}>
                <CartItem coffee={coffee} />
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
              <span>
                {new Intl.NumberFormat('en', {
                  currency: 'USD',
                  style: 'currency',
                }).format(Number(deliveryFee.toFixed(2)))}
              </span>
            </LabelWithPrice>
            <LabelWithPrice>
              <h1>Total</h1>
              <h1>
                {new Intl.NumberFormat('en', {
                  currency: 'USD',
                  style: 'currency',
                }).format(Number(orderTotal.toFixed(2)))}
              </h1>
            </LabelWithPrice>
          </OrderTotal>
          <Button
            type="submit"
            form="order"
            disabled={!isValid}
            onClick={handleConfirmOrder}
            title="confirm order"
          />
        </CartContainer>
      </div>
    </CheckoutContainer>
  )
}
