import * as Styled from './Input.styles'
import { InputProps } from './Input.types'

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
  onKeyDown,
  style,
  value,
}) => {
  return (
    <Styled.InputContainer size={size} style={{ ...style }}>
      {labelType === 'wrapper' ? (
        <Styled.LabelWrapper variant={variant}>
          <Styled.Label label={label}>{label}</Styled.Label>
          <Styled.WrapperInput
            onChange={onChange}
            placeholder={placeholder}
            type={type}
            disabled={disabled}
            variant={variant}
            value={value}
          />
        </Styled.LabelWrapper>
      ) : (
        <>
          <Styled.Label label={label}>{label}</Styled.Label>
          <Styled.Input
            onChange={onChange}
            onKeyDown={onKeyDown}
            placeholder={placeholder}
            type={type}
            disabled={disabled}
            variant={variant}
            value={value}
          />
        </>
      )}
      <Styled.HelperText helperTextColor={helperTextColor}>{helperText}</Styled.HelperText>
    </Styled.InputContainer>
  )
}

export default Input
