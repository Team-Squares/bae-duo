import * as Styled from './ToastArea.styles'
import Toast from './Toast'
import { useState } from 'react'

export const useToast = ({ delay }: any) => {
  const [toastQueue, setToastQueue] = useState<any>([])

  const pushToastQueue = (type: string, content: string) => {
    setToastQueue((prev: any) => [...prev, { type, content }])
    setTimeout(removeToast, delay)
  }

  const removeToast = () => {
    setToastQueue((prev: string[]) => {
      prev.shift()
      return [...prev]
    })
  }

  const ToastArea = () => {
    return (
      <Styled.Container>
        {toastQueue.length > 0 && (
          <Styled.ToastArea>
            {toastQueue.map((toast: any, i: number) => {
              return <Toast key={i} toast={toast} index={i} setToastQueue={setToastQueue} />
            })}
          </Styled.ToastArea>
        )}
      </Styled.Container>
    )
  }

  return [pushToastQueue, ToastArea]
}
