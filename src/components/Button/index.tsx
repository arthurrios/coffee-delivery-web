import { ButtonHTMLAttributes } from 'react'
import { Container } from './styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string
}

export function Button({ title, ...props }: ButtonProps) {
  return <Container {...props}>{title}</Container>
}
