import {
  InputHTMLAttributes,
  forwardRef,
  LegacyRef,
  HTMLAttributes,
  useState,
  FocusEvent,
} from 'react'
import { Box, Container } from './styles'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  optional?: boolean
  containerProps: HTMLAttributes<HTMLDivElement>
}

export const Input = forwardRef(function Input(
  { optional, containerProps, onFocus, onBlur, ...props }: InputProps,
  ref: LegacyRef<HTMLInputElement>,
) {
  const [isFocused, setIsFocused] = useState(false)

  function handleFocus(event: FocusEvent<HTMLInputElement, Element>) {
    setIsFocused(true)
    onFocus?.(event)
  }

  function handleBlur(event: FocusEvent<HTMLInputElement, Element>) {
    setIsFocused(false)
    onBlur?.(event)
  }

  return (
    <Box {...containerProps}>
      <Container data-state={isFocused ? 'focused' : 'blurred'}>
        <input onFocus={handleFocus} onBlur={handleBlur} ref={ref} {...props} />
        {optional ? <span>Optional</span> : null}
      </Container>
    </Box>
  )
})
