import * as Styled from './Input.styles'

interface InputProps {
  placeholder?: string
  type?: string
  label?: string
  size?: 'sm' | 'md' | 'lg'
}

const Input: React.FC<InputProps> = ({ placeholder, type, label = '', size = 'md' }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value)
  }

  return (
    <Styled.InputContainer size={size}>
      <Styled.Label label={label}>{label}</Styled.Label>
      <Styled.Input onChange={handleChange} placeholder={placeholder} type={type} />
    </Styled.InputContainer>
  )
}

export default Input
