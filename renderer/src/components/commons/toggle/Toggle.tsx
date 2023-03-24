import styled from '@emotion/styled'
import { Dispatch, SetStateAction } from 'react'

interface ToggleProps {
  isCheck: boolean
  setIsCheck: Dispatch<SetStateAction<boolean>>
}

interface ToggleBarProps {
  isCheck: boolean
}

const Toggle = ({ isCheck, setIsCheck }: ToggleProps) => {
  return <ToggleBar isCheck={isCheck} onClick={() => setIsCheck(pre => !pre)} />
}

export default Toggle

const ToggleBar = styled.div<ToggleBarProps>`
  position: relative;
  width: 45px;
  height: 15px;
  border-radius: 30px;
  background-color: ${({ isCheck }) => (isCheck ? '#B3C1F7' : '#DEE2E6')};
  transition: 500ms linear;
  cursor: pointer;

  &:before {
    content: '';
    position: absolute;
    top: -5px;
    right: ${({ isCheck }) => (isCheck ? '0px' : '20px')};
    display: inline-block;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: ${({ isCheck }) => (isCheck ? '#4263EB' : '#ADB5BD')};
    transition: 500ms;
  }
`
