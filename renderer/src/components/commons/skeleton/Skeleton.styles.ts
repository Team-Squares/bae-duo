import { color } from '@/src/commons/styles/styles'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'
import { SkeletonProps } from './Skeleton'

export const pulse = keyframes`
	0%,
	100% {
		opacity: 1;
	}
	50% {
		opacity: 0.5;
	}
`

export const SkeletonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  border: 0.2px solid #e5e7eb;
  height: fit-content;
  min-height: 160px;
  min-width: 336px;
  max-width: 900px;
  padding: 16px;
  border-radius: 8px;
  animation: ${pulse} 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
`
export const SkeletonArticle = styled.article`
  margin-top: 12px;
`
export const SkeletonImg = styled.div`
  height: 176px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const SkeletonCircle = styled.div<SkeletonProps>`
  border-radius: 100%;
  background-color: ${color.$defaultGray};
  width: ${props => `${props.width}px`};
  height: ${props => `${props.height}px`};
`
export const SkeletonLine = styled.div<SkeletonProps>`
  height: 8px;
  border-radius: 4px;
  background-color: ${color.$defaultGray};
  height: ${props => `${props.height}px`};
  width: ${props => `${props.width ? `${props.width}px` : '100%'}`};
`
export const SkeletonFlex = styled.div<SkeletonProps>`
  display: flex;
  width: 100%;
  flex-direction: ${props => `${props.isCol ? 'column' : 'row'}`};
  align-items: center;
  gap: 8px;
`
