import styled from '@emotion/styled'
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

export const Toast = styled.div<{ type: string }>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  padding: 20px 0;
  border: 1px solid ${({ type }) => ToastColor[type]};
  margin: 1.5px 0;
  border-radius: 5px;
  background-color: ${({ type }) => ToastBackgroundColor[type]};

  transform: 'translateX(0)';
  // transform: translateX(100%);
  // transition: all 0.5s cubic-bezier(0.68, -0.55, 0.25, 1.35);
`

export const Icon = styled.div<{ type: string }>`
  margin: 0 20px;
  color: ${({ type }) => ToastColor[type]};
`

export const Contents = styled.div`
  width: 100%;
`
export const Close = styled.div`
  margin: 0 20px;
  cursor: pointer;
`

// ToastArea
// ToastArea
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 300px;
`

export const ToastArea = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: 400px;
  padding: 10px;
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
