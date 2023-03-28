import React, { useEffect, useState } from 'react'
import * as Styled from './Detail.style'
import Progress from './Progress'

const FundingInfoList = () => {
  return (
    <Styled.FundingInfoList>
      <div className="fundingImg"></div>
      <Progress type={'price'} />
      <Progress type={'time'} />
      <Progress type={'member'} />
    </Styled.FundingInfoList>
  )
}

export default FundingInfoList
