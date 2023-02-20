import * as Styled from './Toast.styles'
import CloseIcon from '@mui/icons-material/Close'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import HighlightOffIcon from '@mui/icons-material/HighlightOff'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline'

interface ToastProps {
  toast: string
}

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

const Toast = (props: ToastProps) => {
  const { index, toast, setToastQueue } = props

  const onClickClose = (e: any) => {
    setToastQueue((prev: any) => {
      console.log('prev: ', prev)
      let toastQueue = [...prev]
      toastQueue.splice(index, 1)
      return [...toastQueue]
    })
  }

  return (
    <Styled.Toast
      style={{
        transform: 'translateX(0)',
        borderColor: `${ToastColor[toast.type]}`,
        backgroundColor: `${ToastBackgroundColor[toast.type]}`,
      }}
    >
      <Styled.Icon style={{ color: `${ToastColor[toast.type]}` }}>{ToastIcon[toast.type]}</Styled.Icon>
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

export default Toast
