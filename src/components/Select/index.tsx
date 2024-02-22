import { Bank, CreditCard, Money } from '@phosphor-icons/react'
import { Container } from './styles'
import { useTheme } from 'styled-components'
import { InputHTMLAttributes, LegacyRef, forwardRef } from 'react'

export interface SelectProps extends InputHTMLAttributes<HTMLInputElement> {
  option: 'creditCard' | 'debitCard' | 'cash'
  isSelected?: boolean
}

export const Select = forwardRef(function Select(
  { isSelected, option, ...props }: SelectProps,
  ref: LegacyRef<HTMLInputElement>,
) {
  const { COLORS } = useTheme()

  let icon
  let title

  switch (option) {
    case 'creditCard':
      icon = <CreditCard color={COLORS.PURPLE} />
      title = 'Credit Card'
      break
    case 'debitCard':
      icon = <Bank color={COLORS.PURPLE} />
      title = 'Debit Card'
      break
    case 'cash':
      icon = <Money color={COLORS.PURPLE} />
      title = 'Cash'
      break
    default:
      return
  }

  return (
    <Container option={option} data-state={isSelected}>
      <input type="radio" ref={ref} {...props} />
      {icon}
      <h4>{title}</h4>
    </Container>
  )
})
