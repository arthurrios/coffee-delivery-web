import {
  InputHTMLAttributes,
  forwardRef,
  LegacyRef,
  useState,
  FocusEvent,
  HTMLProps,
} from 'react'
import { Box, Container, ErrorMessage } from './styles'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  optional?: boolean
  containerProps: HTMLProps<HTMLDivElement>
  errorMessage?: string
}

export const Input = forwardRef(function Input(
  {
    optional,
    containerProps,
    onFocus,
    onBlur,
    errorMessage,
    ...props
  }: InputProps,
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

  console.log(errorMessage)

  return (
    <Box {...containerProps}>
      <Container data-state={isFocused ? 'focused' : 'blurred'}>
        <input onFocus={handleFocus} onBlur={handleBlur} ref={ref} {...props} />
        {optional ? <span>Optional</span> : null}
      </Container>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </Box>
  )
})
