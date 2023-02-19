import * as Styled from './ToastArea.styles'
import Toast from './Toast'
import { useState } from 'react'

interface ToastInfo {
  id: number
  type: string
}

const ToastArea = () => {
  // TODO : 버튼 클릭시, Toast Queue에 데이터를 채워넣기
  // TODO : 들어오고 나서, setTimeout을 걸고 1초뒤에 사라지게 만들기

  // TODO : 생성후, active class를 주고 active에는 transform: translateX(0) 주기
  const [toastQueue, setToastQueue] = useState<string[]>([])
  const pushToastQueue = (type: string) => {
    setToastQueue((prev: string[]) => [...prev, type])
    setTimeout(removeToast, 2000)
  }
  const removeToast = () => {
    // TODO : 맨 앞 index 날리기
    setToastQueue((prev: string[]) => {
      prev.shift()
      return [...prev]
    })
  }
  return (
    <Styled.Container>
      <Styled.TestButtonArea>
        <Styled.TestButton onClick={() => pushToastQueue('success')}>Success</Styled.TestButton>
        <Styled.TestButton onClick={() => pushToastQueue('fail')}>Fail</Styled.TestButton>
        <Styled.TestButton onClick={() => pushToastQueue('warning')}>Warning</Styled.TestButton>
      </Styled.TestButtonArea>
      {toastQueue.length > 0 && (
        <Styled.ToastArea>
          {toastQueue.map(toast => (
            <Toast toast={toast} />
          ))}
        </Styled.ToastArea>
      )}
    </Styled.Container>
  )
}

export default ToastArea
