import React, { memo, useEffect, useState } from 'react'
import * as Styled from './Button.styles'
import { ButtonProps } from './Button.types'

const Button = ({
  children,
  type,
  disabled,
  onClick,
  style,
  size = 'medium',
  variant = 'contained',
  endIcon,
}: ButtonProps) => {
  //size
  const [width, setWidth] = useState(121)
  const [height, setHeight] = useState(45)
  const [fontSize, setFontSize] = useState(14)
  const [borderRadius, setBorderRadius] = useState(16)

  //style
  const [border, setBorder] = useState('none')
  const [backgroundColor, setBackgroundColor] = useState('#4263eb')
  const [fontColor, setFontColor] = useState('white')

  //hover style
  const [hoverBorder, setHoverBorder] = useState('none')
  const [hoverBackground, setHoverBackground] = useState('#354fbc')

  useEffect(() => {
    switch (size) {
      case 'large':
        setWidth(154)
        setHeight(56)
        setFontSize(16)
        break

      case 'medium':
        break

      case 'small':
        setWidth(84)
        setHeight(38)
        setFontSize(12)
        setBorderRadius(10)
        break
    }
  }, [size])

  useEffect(() => {
    switch (variant) {
      case 'text':
        if (disabled) {
          setBackgroundColor('transparent')
          setFontColor('#ADB5BD')
          return
        }
        setBackgroundColor('transparent')
        setFontColor('#4263eb')
        setHoverBackground('#D9E0FB')
        break
      case 'contained':
        if (disabled) {
          setBackgroundColor('#F1F3F5')
          setFontColor('#ADB5BD')
          return
        }
        break
      case 'outlined':
        if (disabled) {
          setBorder('1px solid #ADB5BD')
          setBackgroundColor('white')
          setFontColor('#ADB5BD')
          return
        }
        setBorder('1px solid #4263eb')
        setBackgroundColor('white')
        setFontColor('#4263eb')
        setHoverBorder('1px solid #354fbc')
        setHoverBackground('#D9E0FB')
        break
    }
  }, [variant, disabled])

  return (
    <Styled.Button
      style={{ ...style }}
      type={type}
      disabled={disabled}
      onClick={onClick}
      width={width}
      height={height}
      fontSize={fontSize}
      border={border}
      borderRadius={borderRadius}
      backgroundColor={backgroundColor}
      fontColor={fontColor}
      hoverBorder={hoverBorder}
      hoverBackground={hoverBackground}
      disable={disabled || false}
    >
      <div>{children}</div>
      {endIcon && <>{endIcon}</>}
    </Styled.Button>
  )
}

export default memo(Button)
