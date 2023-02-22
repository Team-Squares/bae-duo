import styled from '@emotion/styled'

const ToastColor: any = {
  success: '#45B9C4',
  warning: '#F0AB38',
  fail: '#DC2626',
}

const ToastBackgroundColor: any = {
  success: '#E0F5F6',
  warning: '#FdF3E3',
  fail: '#FCA5A5',
}

export const Toast = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px 0;
  border: 1px solid blue;
  background-color: #fff;
  margin: 1.5px 0;
  border-radius: 5px;
  // transform: translateX(100%);
  // transition: all 0.5s cubic-bezier(0.68, -0.55, 0.25, 1.35);
`

export const Icon = styled.div<{ type: any }>`
  margin: 0 20px;
  color: ${({ type }) => {
    console.log('type: ', type)
    return ToastColor[type]
  }};
`

export const Contents = styled.div`
  width: 100%;
`
export const Close = styled.div`
  margin: 0 20px;
  cursor: pointer;
`
