import styled from '@emotion/styled'

export const InputContainer = styled.div<{ width: string }>`
  width: ${props => props.width};
`

export const Label = styled.label`
  font-size: 14px;
  margin-bottom: 12px;
  display: block;
`

export const Input = styled.input`
  padding: 5px 10px;
  border-radius: 10px;
  width: 100%;
`
