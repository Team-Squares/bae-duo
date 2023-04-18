import React, { useEffect, useState } from 'react'
import * as Styled from '../FundingDetail.style'

const Progress = ({ ...props }) => {
  const { type } = props
  const [value, setValue] = useState()
  const data = {
    img: '',
    price: 16000,
    deadLine: '11:50',
    participant: 4,
  }

  const getFundingInfoItem = () => {
    switch (type) {
      case 'price':
        return (
          <>
            <Styled.FundingInfoItem>
              <div className="title">
                <span>모인 금액</span>
                <span>목표 금액</span>
              </div>
              <div className="value">
                <span>{data.price}</span>
                <span>30,000</span>
              </div>
              <div className="progressBar">
                <div className="progressValue" style={{ width: `${(data.price / 30000) * 100}%` }}></div>
              </div>
            </Styled.FundingInfoItem>
          </>
        )
      case 'time':
        return (
          <>
            <Styled.FundingInfoItem>
              <div className="title">
                <span>현재 시간</span>
                <span>주문 시간</span>
              </div>
              <div className="value">
                <span>-</span>
                <span>{data.deadLine}</span>
              </div>
              <div className="progressBar">
                <div className="progressValue" style={{ width: `${(data.price / 30000) * 100}%` }}></div>
              </div>
            </Styled.FundingInfoItem>
          </>
        )
      case 'member':
        return (
          <>
            <Styled.FundingInfoItem>
              <div className="title">
                <span>현재 인원</span>
                <span>목표 인원</span>
              </div>
              <div className="value">
                <span>3</span>
                <span>{data.participant}</span>
              </div>
              <div className="progressBar">
                <div className="progressValue" style={{ width: `${(3 / data.participant) * 100}%` }}></div>
              </div>
            </Styled.FundingInfoItem>
          </>
        )
    }
  }

  return <>{getFundingInfoItem()}</>
}

export default Progress
