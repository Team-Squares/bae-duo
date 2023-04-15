import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { color } from '@/src/commons/styles/styles'

const smInputStyles = css`
  width: 100px;
  input {
    font-size: 14px;
    padding: 10px 15px;
    &::placeholder {
      font-size: 12px;
    }
  }
`

const mdInputStyles = css`
  width: 200px;
  input {
    font-size: 14px;
    padding: 15px;
    &::placeholder {
      font-size: 12px;
    }
  }
`

const lgInputStyles = css`
  input {
    padding: 20px 15px;
    &::placeholder {
      font-size: 14px;
    }
  }
`

const outlinedStyles = css`
  border-radius: 10px;
  border: 1px solid #dee2e6;
  background-color: transparent;
  &:focus {
    outline: none;
    border: 1px solid ${color.$point};
  }
`

const softStyles = css`
  border-radius: 10px;
  background-color: #f5f7fe;
  &:focus {
    outline: none;
    border: 1px solid ${color.$point};
  }
`

const plainStyles = css`
  border: 1px solid transparent;
  border-bottom: 1px solid #dee2e6;

  &:focus {
    outline: none;
    border-bottom: 1px solid ${color.$point};
  }
`

export const InputContainer = styled.div<{ size: string }>`
  ${props => {
    switch (props.size) {
      case 'sm':
        return smInputStyles
      case 'lg':
        return lgInputStyles
      default:
        return mdInputStyles
    }
  }};

  input {
    width: 100%;
    font-size: 16px;

    &::placeholder {
      color: #999;
    }
  }
`

export const LabelWrapper = styled.div<{ variant: string }>`
  padding: 10px 15px;
  border-radius: 10px;
  input {
    padding: 0px;
    border: none;
    border-radius: 0;
    &:focus {
      border: none;
    }
  }
  ${props => {
    switch (props.variant) {
      case 'outlined':
        return outlinedStyles
      case 'soft':
        return softStyles
      default:
        return plainStyles
    }
  }};
`

export const Label = styled.label<{ label: string }>`
  font-size: 14px;
  display: block;
  color: #333;
  margin-bottom: 5px;
`

export const Input = styled.input<{ variant: string }>`
  padding: 10px;
  ${props => {
    switch (props.variant) {
      case 'outlined':
        return outlinedStyles
      case 'soft':
        return softStyles
      default:
        return plainStyles
    }
  }};
`

export const WrapperInput = styled.input<{ variant: string }>`
  ${props => {
    switch (props.variant) {
      case 'outlined':
        return outlinedStyles
      case 'soft':
        return softStyles
      default:
        return plainStyles
    }
  }};
`

export const HelperText = styled.p<{ helperTextColor: string }>`
  color: ${props => {
    switch (props.helperTextColor) {
      case 'notice':
        return `${color.$default}`
      case 'error':
        return 'red'
      default:
        return 'green'
    }
  }};
  font-size: 12px;
  margin-top: 10px;
  padding-left: 5px;
`
