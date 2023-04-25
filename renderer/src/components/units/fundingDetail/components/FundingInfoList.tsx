import React, { useEffect, useState } from 'react'
import * as Styled from '../FundingDetail.style'
import Progress from './Progress'
import { AttendantInfo } from '../FundingDetail.types'

const FundingInfoList = ({ ...props }) => {
  const { data } = props
  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(() => {
    let _totalPrice = 0
    const _menuInfoArr = data?.map((el: AttendantInfo) => el.menuInfo) || []
    for (let i = 0; i < _menuInfoArr.length; i++) {
      for (let j = 0; j < _menuInfoArr[i].length; j++) {
        _totalPrice += _menuInfoArr[i][j].menuPrice
      }
    }

    setTotalPrice(_totalPrice)
  }, [data])

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
