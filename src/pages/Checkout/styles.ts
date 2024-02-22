import styled from 'styled-components'
import { FONTS } from '../../styles/themes/default'

export const CheckoutContainer = styled.div`
  display: flex;
  gap: 32px;

  margin: 2.5rem auto 0;
  max-width: 70rem;
`
export const SectionTitle = styled.h2`
  ${FONTS.TITLE_XS}
  color: ${({ theme }) => theme.COLORS.BASE_SUBTITLE};
  margin-bottom: 1rem;
`

export const BaseContainer = styled.div`
  padding: 2.5rem;
  border-radius: 6px;
  background: ${({ theme }) => theme.COLORS.BASE_CARD};
`
export const AddressFormContainer = styled(BaseContainer)`
  margin-bottom: 0.75rem;
  min-width: 40rem;
`
export const PaymentContainer = styled(BaseContainer)``
export const CartContainer = styled(BaseContainer)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 28rem;
`

export const ContainerTitle = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  margin-bottom: 2rem;

  svg {
    height: 1.375rem;
    width: 1.375rem;
  }

  h3 {
    ${FONTS.TEXT_M}
    color: ${({ theme }) => theme.COLORS.BASE_SUBTITLE};
  }

  span {
    ${FONTS.TEXT_S}
    color: ${({ theme }) => theme.COLORS.BASE_TEXT};
  }
`
export const InputFormContainer = styled.div`
  display: grid;
  grid-template-columns: 12.5rem 1fr 3.75rem;
  gap: 16px 12px;

  grid-template-areas:
    'zip . .'
    'street street street'
    'number complement complement'
    'country city state';
`
export const PaymentMethods = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
`
export const Line = styled.div`
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.BASE_BUTTON};
`
export const LabelWithPrice = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    ${FONTS.TEXT_L}
    font-weight: bold;
    color: ${({ theme }) => theme.COLORS.BASE_SUBTITLE};
  }

  h4 {
    ${FONTS.TEXT_S}
  }
`
export const OrderTotal = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`
