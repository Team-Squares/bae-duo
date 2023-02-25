import * as Styled from './useToast.styles'
import { useEffect, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import HighlightOffIcon from '@mui/icons-material/HighlightOff'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline'
import { createElement } from 'react'

type ToastType = 'success' | 'fail' | 'warning'

interface Toast {
  type: ToastType
  content: string
}

interface ToastProps {
  toast: Toast
}

interface UseToastOptions {
  delay: number
}

interface ToastIconProps {
  [key]: React.ComponentType
}

const ToastIcon: ToastIconProps = {
  success: CheckCircleOutlineIcon,
  fail: HighlightOffIcon,
  warning: ErrorOutlineIcon,
}

const Toast = (props: ToastProps) => {
  const { index, toast, setToastQueue } = props

  const onClickClose = (e: any) => {
    setToastQueue((prev: Toast[]) => {
      console.log('prev: ', prev)
      let toastQueue = [...prev]
      toastQueue.splice(index, 1)
      return [...toastQueue]
    })
  }

  useEffect(() => {
    console.log('toast: ', toast)
  }, [toast])

  return (
    <Styled.Toast type={toast.type}>
      <Styled.Icon type={toast.type}>{createElement(ToastIcon[toast.type])}</Styled.Icon>
      <Styled.Contents>
        <p>
          안녕 나는 {index}번째 {toast.type}맛 토스트야
        </p>
        <p>{toast.content}</p>
      </Styled.Contents>
      <Styled.Close onClick={onClickClose}>
        <CloseIcon />
      </Styled.Close>
    </Styled.Toast>
  )
}

/**
 * @param delay number
 * useToast hook입니다.
 */
export const useToast = ({ delay }: UseToastOptions) => {
  const [toastQueue, setToastQueue] = useState<any>([])

  /**
   * 새롭게 받은 toast를 toast queue에 push해줍니다.
   */
  const pushToastQueue = (type: string, content: string) => {
    setToastQueue((prev: any) => [...prev, { type, content }])
    if (delay) setTimeout(removeToast, delay)
  }

  /**
   * toast queue에서, 가장 먼저 들어온 toast를 지워줍니다.
   */
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
            {toastQueue.map((toast: Toast, i: number) => {
              return <Toast key={i} toast={toast} index={index} setToastQueue={setToastQueue} />
            })}
          </Styled.ToastArea>
        )}
      </Styled.Container>
    )
  }

  return [pushToastQueue, ToastArea]
}
