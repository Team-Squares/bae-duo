import React, { FC, useEffect, useState } from 'react'
import * as Styled from './Tag.styles'

interface TagProps {
  text: string
  color?: string
  size?: 'sm' | 'md' | 'lg'
}

const Tag: FC<TagProps> = ({ text, color = '#4263EB', size = 'sm' }) => {
  const [bgColor, setBgColor] = useState<string>('')

  const hexToRGB = (hex: string, alpha = 1) => {
    let parseString = hex
    if (hex.startsWith('#')) {
      parseString = hex.slice(1, 7)
    }
    if (parseString.length !== 6) {
      return null
    }
    const r = parseInt(parseString.slice(0, 2), 16)
    const g = parseInt(parseString.slice(2, 4), 16)
    const b = parseInt(parseString.slice(4, 6), 16)
    if (isNaN(r) || isNaN(g) || isNaN(b)) {
      return null
    }
    return setBgColor(`rgba(${r}, ${g}, ${b}, ${alpha})`)
  }

  useEffect(() => {
    hexToRGB(color, 0.1)
  }, [color])

  return (
    <Styled.TagContainer color={color} bgColor={bgColor} size={size}>
      {text}
    </Styled.TagContainer>
  )
}

export default Tag
