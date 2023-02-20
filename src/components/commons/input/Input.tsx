import React, { FC } from 'react'
import * as Styled from './Input.styles'

interface InputProps {
  placeholder: string
  type: string
  label: string
  width: string
}
const Input: FC<InputProps> = ({ placeholder, type, label, width }) => {
  const inputStyle = width || '100%'

  return (
    <Styled.InputContainer width={inputStyle}>
      <Styled.Label>{label}</Styled.Label>
      <Styled.Input placeholder={placeholder} type={type} />
    </Styled.InputContainer>
  )
}

export default Input
