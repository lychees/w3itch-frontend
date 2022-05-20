import styled from '@emotion/styled'

declare type InputInvalid = {
  message: string
}
export declare interface InputRowProps {
  label: string
  subLabel?: string
  center?: boolean
  disabled?: boolean
  preview?: boolean
  placeholder?: string
  valid?: boolean
  invalid?: InputInvalid
  className?: string
  children?: React.ReactNode
}

const Container = styled.div<Pick<InputRowProps, 'center'>>`
  margin-bottom: 20px;
  font-size: 14px;
  ${(p) => p.center && `text-align: center`};
`
const Label = styled.div`
  color: #434343;
  font-weight: bold;
`
const Sub = styled.span`
  font-weight: normal;
  color: #606060;
`
const Validated = styled.div`
  position: relative;
`
const ErrorMessage = styled.span<Pick<InputRowProps, 'invalid' | 'disabled'>>`
  transition: all 0.2s ease;
  opacity: ${(p) => (p.invalid && !p.disabled ? 1 : 0)};
  color: #d14343;
`
const Input = styled.input<
  Pick<InputRowProps, 'invalid' | 'center' | 'disabled' | 'preview'>
>`
  box-sizing: border-box;
  max-width: 526px;
  width: 100%;
  transition: border-color 0.2s;
  position: relative;
  padding: 8px;
  border: 2px solid;
  border-color: #cdcdcd;
  color: #222;
  background-color: white;
  border-radius: 2px;
  font-family: inherit;
  margin: 6px 0;
  &:disabled {
    background-color: #f4f4f4;
    opacity: 0.5;
  }
  ${(p) => p.invalid && !p.disabled && `border-color: #D14343; color: #D14343;`}
  ${(p) => p.center && `text-align: center;`}
    ${(p) => p.preview && `border: none; font-size: 14px;`}
`

export function InputRow({
  label,
  subLabel,
  children,
  className,
  center,
  disabled,
  preview,
  placeholder,
  invalid,
  ...inputProps
}: InputRowProps & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <Container className={className} center={center}>
      <label>
        <Label>
          {label}
          {subLabel && <Sub>{subLabel}</Sub>}
        </Label>
        {!!children && children}
        {!children && (
          <Validated>
            <Input
              center={center}
              disabled={disabled}
              preview={preview}
              placeholder={placeholder}
              invalid={invalid}
              {...inputProps}
            />
            {invalid && (
              <ErrorMessage disabled={disabled} invalid={invalid}>
                {invalid.message}
              </ErrorMessage>
            )}
          </Validated>
        )}
      </label>
    </Container>
  )
}
