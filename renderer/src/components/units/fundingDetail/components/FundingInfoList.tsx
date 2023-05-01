import React, { useEffect, useState } from 'react'
import * as Styled from '../FundingDetail.style'
import Progress from './Progress'
import { AttendantInfoType } from '../FundingDetail.types'

const FundingInfoList = ({ ...props }) => {
  const { data, totalPrice, fundingData } = props

  return (
    <Styled.FundingInfoList>
      <div className="fundingImg"></div>
      <Progress type={'price'} data={totalPrice} defaultPrice={fundingData?.minPrice} />
      <Progress type={'time'} />
      <Progress type={'member'} data={data?.length} defaultMember={fundingData?.minMember} />
    </Styled.FundingInfoList>
  )
}

export default FundingInfoList
