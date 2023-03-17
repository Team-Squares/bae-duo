import styled from '@emotion/styled'

export const TagContainer = styled.div<{ bgColor: string; color: string; size: string }>`
  width: fit-content;
  padding: ${props => (props.size === 'sm' ? '2px 14px' : props.size === 'md' ? '3px 16px;' : '8px 24px')};
  font-size: ${props => (props.size === 'sm' ? '10px' : props.size === 'md' ? '12px' : '14px')};
  border-radius: 50px;
  color: ${props => props.color || 'black'};
  background-color: ${props => props.bgColor};
`
