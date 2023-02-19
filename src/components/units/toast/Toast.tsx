import * as Styled from './Toast.styles'
import CloseIcon from '@mui/icons-material/Close'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import HighlightOffIcon from '@mui/icons-material/HighlightOff'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline'
import { useEffect, useState } from 'react'

interface ToastProps {
  toast: string
}

const Toast = (props: ToastProps) => {
  const ToastIcon: any = {
    success: <CheckCircleOutlineIcon />,
    fail: <HighlightOffIcon />,
    warning: <ErrorOutlineIcon />,
  }

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

  const [isActive, setIsActive] = useState<boolean>(false)
  useEffect(() => {
    setTimeout(() => setIsActive(true), 0)
  }, [])

  return (
    <Styled.Toast
      style={
        isActive
          ? {
              transform: 'translateX(0)',
              borderColor: `${ToastColor[props.toast]}`,
              backgroundColor: `${ToastBackgroundColor[props.toast]}`,
            }
          : null
      }
    >
      <Styled.Icon style={{ color: `${ToastColor[props.toast]}` }}>{ToastIcon[props.toast]}</Styled.Icon>
      <Styled.Contents>안녕 나는 {props.toast}맛 토스트야</Styled.Contents>
      <Styled.Close>
        <CloseIcon />
      </Styled.Close>
    </Styled.Toast>
  )
}

export default Toast
