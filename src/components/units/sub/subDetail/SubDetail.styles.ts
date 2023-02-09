import styled from '@emotion/styled'
import { color } from '@/src/commons/styles/styles'

export const Container = styled.div`
  padding: 50px;
  color: ${color.$default};
  font-size: 32px;
  text-align: center;
`
export const ExplainText = styled.span<{ type: string; size: number }>`
  margin-left: 10px;
  color: ${({ type }) => (type === '짝수' ? color.$point : color.$sub)};
  font-size: ${({ size }) => `${size + 10}px`};
`
