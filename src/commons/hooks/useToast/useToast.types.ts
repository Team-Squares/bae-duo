type ToastType = 'success' | 'fail' | 'warning'

export interface Toast {
  type: ToastType
  content: string
}

export interface ToastProps {
  toast: Toast
  index: number
  setToastQueue: React.Dispatch<React.SetStateAction<Toast[]>>
}

export interface UseToastOptions {
  delay: number
}

export interface ToastIconProps {
  // ? [key in ToastType]: React.ComponentType
  [key: string]: React.ComponentType
}
