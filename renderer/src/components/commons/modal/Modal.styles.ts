import { color } from '@/src/commons/styles/styles'
import { css } from '@emotion/react'
import styled from '@emotion/styled'

const padding = '20px'
const bdRadius = '10px'
const btnWidth = '80px'
const btnHeight = '35px'

export const BackGround = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.4);
`

export const Modal = styled.div<{ height: string; width: string; left: string; top: string }>`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  height: ${props => props.height};
  width: ${props => props.width};
  left: ${props => props.left};
  top: ${props => props.top};
  background-color: white;
  border-radius: ${bdRadius};

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const TopBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${padding};
`

export const Child = styled.div`
  display: flex;
  justify-content: center;
  padding: ${padding};
`

export const Title = styled.div`
  font-size: 18px;
`

export const CloseBtn = styled.div`
  width: 30px;
  height: 30px;
  &:hover {
    cursor: pointer;
  }
`

export const BtnBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: ${padding};
`

const displayCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`

const buttonStyle = css`
  width: ${btnWidth};
  height: ${btnHeight};
  border-radius: ${bdRadius};
  font-size: 13px;
  &:hover {
    cursor: pointer;
  }
`

export const CancleBtn = styled.div`
  ${buttonStyle}
  ${displayCenter}
  border: 1px solid ${color.$blue30};
  color: ${color.$blue30};
`

export const SubmitBtn = styled.div`
  ${buttonStyle}
  ${displayCenter}
  background-color: ${color.$blue30};
  color: white;
`

export const CheckBox = styled.div`
  padding: ${padding};
  ${displayCenter}
  gap: 10px;
  span {
    font-size: 15px;
  }
`
