import * as Styled from './useToast.styles'
import { useState, createElement, MouseEvent } from 'react'
// mui icon
import CloseIcon from '@mui/icons-material/Close'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import HighlightOffIcon from '@mui/icons-material/HighlightOff'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline'
// type
import { Toast, ToastProps, UseToastOptions, ToastIconProps } from './useToast.types'

const ToastIcon: ToastIconProps = {
  success: CheckCircleOutlineIcon,
  fail: HighlightOffIcon,
  warning: ErrorOutlineIcon,
}

/**
 * 개별 Toast 컴포넌트입니다.
 */
const Toast = (props: ToastProps) => {
  const { index, toast, setToastQueue } = props

  /**
   * 토스트의 삭제버튼을 클릭했을 때 발생하는 이벤트입니다.
   * 해당 토스트의 index를 찾아 삭제합니다.
   */
  const onClickClose = () => {
    setToastQueue((prev: Toast[]) => {
      let toastQueue = [...prev]
      toastQueue.splice(index, 1)
      return [...toastQueue]
    })
  }

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
  const [toastQueue, setToastQueue] = useState<Toast[]>([])

  /**
   * 새롭게 받은 toast를 toast queue에 push해줍니다.
   */
  const pushToastQueue = (type: string, content: string) => {
    setToastQueue((prev: Toast[]) => [...prev, { type, content }])
    if (delay) setTimeout(removeToast, delay)
  }

  /**
   * toast queue에서, 가장 먼저 들어온 toast를 지워줍니다.
   */
  const removeToast = () => {
    setToastQueue((prev: Toast[]) => {
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
              return <Toast key={i} toast={toast} index={i} setToastQueue={setToastQueue} />
            })}
          </Styled.ToastArea>
        )}
      </Styled.Container>
    )
  }

  return [pushToastQueue, ToastArea]
}
