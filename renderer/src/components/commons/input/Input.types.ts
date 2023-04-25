export interface InputProps {
  placeholder?: string
  type?: string
  label?: string
  labelType?: 'wrapper' | 'default'
  size?: 'sm' | 'md' | 'lg'
  variant?: 'plain' | 'outlined' | 'soft'
  disabled?: boolean
  helperText?: string
  helperTextColor?: 'error' | 'success' | 'notice'
  value?: string | number
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void
  style?: any
}
