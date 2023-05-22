import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'
import { ToastColorProps } from './useToast.types'

// Toast
// Toast
const ToastColor: ToastColorProps = {
  success: '#45B9C4',
  warning: '#F0AB38',
  fail: '#DC2626',
}

const ToastBackgroundColor: ToastColorProps = {
  success: '#E0F5F6',
  warning: '#FdF3E3',
  fail: '#FCA5A5',
}

export const showToast = keyframes`
  0% {
    transform: translateX(380px);
  }
  50% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(380px);
  }
`

export const Toast = styled.div<{ type: string; hideDelay: number }>`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  padding: 20px 0;
  margin: 1.5px 0;
  border-radius: 5px;
  border: 1px solid #eee;
  border-left: 3px solid ${({ type }) => ToastColor[type]};
  background-color: #fff;
  animation-name: ${showToast};
  animation-duration: ${({ hideDelay }) => hideDelay + 's'};
  animation-timing-function: ease;
`

export const Icon = styled.div<{ type: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 20px;
  color: ${({ type }) => ToastColor[type]} !important;
`

export const Contents = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
`
export const Close = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  margin: 10px;
  color: #999;
  cursor: pointer;
`

// ToastArea
// ToastArea
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  /* height: 300px; */
`

export const ToastArea = styled.div<{ isExistToast: boolean }>`
  position: absolute;
  right: 0;
  top: 70px;
  display: ${({ isExistToast }) => (isExistToast ? 'flex' : 'none')};
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: 400px;
  padding: 10px;
  z-index: 999;
`

export const TestButtonArea = styled.div`
  display: flex;
  flex-direction: column;
`

export const TestButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 40px;
  margin: 5px 0;
  border: 1px solid;
`
