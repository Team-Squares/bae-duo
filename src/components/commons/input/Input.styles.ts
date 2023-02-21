import styled from '@emotion/styled'
import { css } from '@emotion/react'

const smInputStyles = css`
  width: 200px;
  padding: 10px 15px;
`

const mdInputStyles = css`
  width: 400px;
  padding: 15px 18px;
`

const lgInputStyles = css`
  width: 100%;
  padding: 20px;
`

export const InputContainer = styled.div<{ size: string }>`
  border-radius: 10px;
  background-color: #f5f7fe;
  ${props => (props.size === 'sm' ? smInputStyles : props.size === 'md' ? mdInputStyles : lgInputStyles)}
`

export const Label = styled.label<{ label: string }>`
  font-size: 12px;
  display: block;
  color: #868e96;
  margin-bottom: ${props => (props.label ? '8px' : '0px')};
`

export const Input = styled.input`
  width: 100%;
  font-size: 16px;
  border: none;
  background-color: #f5f7fe;

  &::placeholder {
    font-size: 14px;
  }

  &:focus {
    outline: none;
  }
`
