import * as Styled from './useToast.styles'
import { createElement, useEffect, useState } from 'react'
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
 * @param    number
 * useToast hook입니다.
 */
export const useToast = () => {
  /**
   * 새롭게 받은 toast를 toast queue에 push해줍니다.
   */
  const pushToastQueue = (type: string, content: string, setToastQueue: any, delay: number) => {
    if (Object.keys(type).length === 0) return
    setToastQueue((prev: Toast[]) => {
      let temp = [...prev]
      return [...temp, { type, content, delay }]
    })

    if (delay) setTimeout(() => removeToast(setToastQueue), delay)
  }

  /**
   * toast queue에서, 가장 먼저 들어온 toast를 지워줍니다.
   */
  const removeToast = (setToastQueue: any) => {
    setToastQueue((prev: Toast[]) => {
      let temp = [...prev]
      temp.shift()
      return [...temp]
    })
  }

  /** Toast가 보여지는 영역입니다.
   * param-direction은 좌상,좌하,우상,우하 로 받을 예정입니다. */

  const ToastArea = ({ ...props }) => {
    const { toastQueue, setToastQueue } = props
    const isExistToast = toastQueue.length > 0

    return (
      <Styled.Container>
        {toastQueue.length > 0 && (
          <Styled.ToastArea isExistToast={isExistToast}>
            {toastQueue.map((toast: Toast, i: number) => {
              return <Toast key={i} toast={toast} index={i} setToastQueue={setToastQueue} />
            })}
          </Styled.ToastArea>
        )}
      </Styled.Container>
    )
  }

  return { pushToastQueue, ToastArea }
}

/**
 * 개별 Toast 컴포넌트입니다.
 */
const Toast = (props: ToastProps) => {
  const { index, toast, setToastQueue } = props
  const hideDelay = toast.delay - 600
  // ? hideDelay 시간 후, translateX(110%)을 주어야함.

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
    <Styled.Toast type={toast.type} hideDelay={hideDelay}>
      <Styled.Icon type={toast.type}>{createElement(ToastIcon[toast.type])}</Styled.Icon>
      <Styled.Contents>
        <p>{toast.content}</p>
      </Styled.Contents>
      <Styled.Close onClick={onClickClose}>
        <CloseIcon />
      </Styled.Close>
    </Styled.Toast>
  )
}
