import styled from '@emotion/styled'

export const Dropdown = styled.div`
  position: relative;
`
export const DropdownSelectInput = styled.div`
  padding: 10px;
  cursor: pointer;
  border: 1px solid #dee2e6;
  border-radius: 10px;

  &:hover {
    background-color: #adb5bd1a;
  }
`

export const DropdownOptionList = styled.div<{ top?: string }>`
  width: 100%;
  padding: 10px;
  background-color: #fff;
  border: 1px solid #dee2e6;
  border-radius: 10px;
  position: absolute;
  left: 0;
  top: ${props => props.top || '40px'};
`
export const DropdownOption = styled.div`
  padding: 10px;
  cursor: pointer;

  &:hover {
    background-color: #adb5bd1a;
  }
`

export const Placeholder = styled.span`
  color: #868e96;
`
