import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { color } from '@/src/commons/styles/styles'

const smInputStyles = css`
  width: 200px;
  input {
    font-size: 14px;
    padding: 15px;
    &::placeholder {
      font-size: 14px;
    }
  }
`

const mdInputStyles = css`
  width: 400px;
  input {
    font-size: 16px;
    padding: 18px 15px;
    input::placeholder {
      font-size: 14px;
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
  border: 1px solid #dee2e6;
  background-color: transparent;
`

const softStyles = css`
  background-color: #f5f7fe;
`

const wrapperStyles = css`
  padding: 15px;
  border-radius: 10px;
  input {
    padding: 0;
    border: none;
    border-radius: 0;
    &:focus {
      outline: none;
    }
  }
`

const defaultStyles = css`
  border: none;
  background: transparent;
`

export const InputContainer = styled.div<{ size: string }>`
  margin: 30px; //삭제필요
  ${props => (props.size === 'sm' ? smInputStyles : props.size === 'md' ? mdInputStyles : lgInputStyles)}
`

export const LabelWrapper = styled.div<{ labelType: string; variant: string }>`
  ${props => (props.variant === 'outlined' ? outlinedStyles : props.variant === 'soft' ? softStyles : '')};
  ${props => (props.labelType === 'wrapper' ? wrapperStyles : defaultStyles)}
`

export const Label = styled.label<{ label: string }>`
  font-size: 14px;
  display: block;
  color: #333;
  margin-bottom: 5px;
`

export const Input = styled.input<{ variant: string }>`
  width: 100%;
  font-size: 16px;
  border: none;
  border-radius: 10px;
  ${props => (props.variant === 'outlined' ? outlinedStyles : props.variant === 'soft' ? softStyles : '')};
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: #999;
  }
`

export const HelperText = styled.p<{ helperTextColor: string }>`
  color: ${props =>
    props.helperTextColor === 'notice' ? `${color.$default}` : props.helperTextColor === 'error' ? 'red' : 'green'};
  font-size: 12px;
  margin-top: 10px;
  padding-left: 5px;
`
