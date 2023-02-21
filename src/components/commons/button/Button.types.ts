import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'
import { IconBaseProps } from 'react-icons'

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  size?: string
  variant?: string
  endIcon?: IconBaseProps
}

export interface ButtonStyleProps {
  width: number
  height: number
  border: string
  borderRadius: number
  backgroundColor: string
  fontSize: number
  fontColor: string
  hoverBorder: string
  hoverBackground: string
  disable: boolean
}
