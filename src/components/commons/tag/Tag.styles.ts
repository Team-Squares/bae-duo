import styled from '@emotion/styled'

export const TagContainer = styled.div<{ bgColor: string; color: string; size: string }>`
  padding: 2px 14px;
  width: fit-content;
  font-size: ${props => (props.size === 'sm' ? '10px' : props.size === 'md' ? '12px' : '14px')};
  border-radius: 50px;
  color: ${props => props.color || 'black'};
  background-color: ${props => props.bgColor};
`
