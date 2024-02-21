import { Bank, CreditCard, Money } from '@phosphor-icons/react'
import { Container } from './styles'
import { useTheme } from 'styled-components'
import { InputHTMLAttributes } from 'react'

export interface SelectProps extends InputHTMLAttributes<HTMLInputElement> {
  option: 'creditCard' | 'debitCard' | 'cash'
  isSelected?: boolean
}

export function Select({ option, isSelected, ...props }: SelectProps) {
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
    <Container type="radio" option={option} data-state={isSelected} {...props}>
      {icon}
      <h4>{title}</h4>
    </Container>
  )
}
