import React, { FC } from 'react'
import * as Styled from './Input.styles'

interface InputProps {
  text: string
}
const Input: FC<InputProps> = ({ text }) => {
  return (
    <Styled.InputContainer>
      <Styled.Input placeholder={text} />
    </Styled.InputContainer>
  )
}

export default Input
