import React, { FC } from 'react'
import * as Styled from './Skeleton.styles'

export type SkeletonProps = {
  width?: number
  height?: number
  isCol?: boolean
}

const Skeleton: FC<SkeletonProps> = ({ width, height, isCol }) => {
  return (
    <Styled.SkeletonContainer>
      {/*<Styled.SkeletonCircle width={width} height={height} />*/}
      <Styled.SkeletonImg />
      <Styled.SkeletonArticle>
        <Styled.SkeletonFlex isCol={isCol}>
          <Styled.SkeletonFlex>
            <Styled.SkeletonLine width={80} />
            <Styled.SkeletonLine width={40} />
          </Styled.SkeletonFlex>
          <Styled.SkeletonLine height={10} />
          <Styled.SkeletonLine />
          <Styled.SkeletonLine />
        </Styled.SkeletonFlex>
      </Styled.SkeletonArticle>
    </Styled.SkeletonContainer>
  )
}

export default Skeleton
