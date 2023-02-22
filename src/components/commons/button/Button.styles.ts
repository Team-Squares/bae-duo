import styled from '@emotion/styled'
import { ButtonStyleProps } from './Button.types'

export const Button = styled.button<ButtonStyleProps>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};

  border: ${({ border }) => border};
  border-radius: ${({ borderRadius }) => `${borderRadius}px`};
  background-color: ${({ backgroundColor }) => backgroundColor};

  font-size: ${({ fontSize }) => `${fontSize}px`};
  font-weight: 700;
  color: ${({ fontColor }) => fontColor};

  cursor: ${({ disable }) => (disable ? 'not-allowed' : 'pointer')};

  :hover {
    border: ${({ hoverBorder, disable }) => disable || hoverBorder};
    background-color: ${({ hoverBackground, disable }) => disable || hoverBackground};
  }

  span {
    position: relative;
  }

  svg {
    position: absolute;
    top: 1px;
  }
`
