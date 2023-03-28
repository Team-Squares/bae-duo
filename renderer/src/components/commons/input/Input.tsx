import * as Styled from './Input.styles'

interface InputProps {
  placeholder?: string
  type?: string
  label?: string
  labelType?: 'wrapper' | 'default'
  size?: 'sm' | 'md' | 'lg'
  variant?: 'plain' | 'outlined' | 'soft'
  disabled?: boolean
  helperText?: string
  helperTextColor?: 'error' | 'success' | 'notice'
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input: React.FC<InputProps> = ({
  placeholder,
  type,
  labelType = 'default',
  label = '',
  size = 'md',
  variant = 'outlined',
  disabled = false,
  helperText,
  helperTextColor = 'notice',
  onChange,
}) => {
  return (
    <Styled.InputContainer size={size}>
      <Styled.LabelWrapper labelType={labelType} variant={variant}>
        <Styled.Label label={label}>{label}</Styled.Label>
        <Styled.Input onChange={onChange} placeholder={placeholder} type={type} disabled={disabled} variant={variant} />
      </Styled.LabelWrapper>
      <Styled.HelperText helperTextColor={helperTextColor}>{helperText}</Styled.HelperText>
    </Styled.InputContainer>
  )
}

export default Input
