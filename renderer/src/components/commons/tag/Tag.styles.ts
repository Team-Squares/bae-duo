import styled from '@emotion/styled'

export const TagContainer = styled.div<{ bgColor: string; color: string; size: string }>`
  min-width: 64px;
  width: fit-content;
  padding: ${props => (props.size === 'sm' ? '4px 8px' : props.size === 'md' ? '8px 20px;' : '10px 24px')};
  font-size: ${props => (props.size === 'sm' ? '10px' : props.size === 'md' ? '12px' : '14px')};
  font-weight: bold;
  text-align: center;
  border-radius: 50px;
  color: ${props => props.color || 'black'};
  background-color: ${props => props.bgColor};
`
