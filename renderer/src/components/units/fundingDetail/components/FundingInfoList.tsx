import React, { useEffect, useState } from 'react'
import * as Styled from '../FundingDetail.style'
import Progress from './Progress'
import { AttendantInfo } from '../FundingDetail.types'

const FundingInfoList = ({ ...props }) => {
  const { data, totalPrice } = props
  return (
    <Styled.FundingInfoList>
      <div className="fundingImg"></div>
      <Progress type={'price'} data={totalPrice} />
      <Progress type={'time'} />
      <Progress type={'member'} data={data?.length} />
    </Styled.FundingInfoList>
  )
}

export default FundingInfoList
