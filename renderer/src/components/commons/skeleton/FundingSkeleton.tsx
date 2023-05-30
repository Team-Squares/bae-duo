import React from 'react'
import * as Styled from './Skeleton.styles'

const FundingSkeleton = () => {
  return (
    <>
      <Styled.FundingSkeletonContainer>
        <Styled.SkeletonLine width={100} />
        <Styled.SkeletonArticle />
        <Styled.SkeletonFlex isCol={false}>
          <Styled.FundingSkeletonLine />
          <Styled.FundingSkeletonLine />
        </Styled.SkeletonFlex>
        <Styled.SkeletonFlex isCol={false}>
          <Styled.FundingSkeletonLine />
          <Styled.FundingSkeletonLine />
        </Styled.SkeletonFlex>

        <Styled.FundingSkeletonArticle>
          <Styled.SkeletonFlex isCol={false}>
            <Styled.SkeletonCircle width={24} height={24} />
            <Styled.SkeletonLine width={100} />
          </Styled.SkeletonFlex>
          <Styled.SkeletonLine />
          <Styled.SkeletonLine />
          <Styled.SkeletonLine />
          <Styled.SkeletonLine />
        </Styled.FundingSkeletonArticle>

        <Styled.FundingSkeletonArticle>
          <Styled.SkeletonFlex isCol={false}>
            <Styled.SkeletonCircle width={24} height={24} />
            <Styled.SkeletonLine width={100} />
          </Styled.SkeletonFlex>

          <Styled.SkeletonLine />
          <Styled.SkeletonLine />
          <Styled.SkeletonLine />
          <Styled.SkeletonLine />
        </Styled.FundingSkeletonArticle>
      </Styled.FundingSkeletonContainer>
    </>
  )
}

export default FundingSkeleton
