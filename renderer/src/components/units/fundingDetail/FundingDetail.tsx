import React, { useEffect, useState } from 'react'
import * as Styled from './FundingDetail.style'
import { getAttendant, getSubDataList } from '@/src/commons/api/subApi'
import { typography } from '../../../commons/styles/typography'
import { color } from '@/src/commons/styles/styles'
import Tag from '../../commons/tag/Tag'
import Button from '../../commons/button/Button'
import FundingInfoList from './components/FundingInfoList'
import AttendantInfo from './components/AttendantInfo'
import axios from 'axios'

const FundingDetail = () => {
  const [attendantData, setAttendantData] = useState(null)
  const dummyData = [
    {
      userId: 1,
      menuInfo: [
        {
          '참치마요 덮밥': 5700,
        },
        {
          '김치 볶음밥': 5000,
        },
      ],
    },
    {
      userId: 2,
      menuInfo: [
        {
          '참치마요 덮밥': 5700,
        },
      ],
    },
  ]

  // useEffect(() => {
  //   getSubDataList()
  //     .then(res => setAttendantData(res.data))
  //     .catch(e => console.log(e))
  // }, [])

  return (
    <Styled.Container>
      <Styled.Header>
        <div className="fundingInfo">
          <h2>한솥 도시락</h2>
          <div className="fundingSubInfo">
            <Tag text={'펀딩 진행 중'} />
            <span className="fundingDate">2023.00.00</span>
          </div>
        </div>
        <div className="buttonGroup">
          <Button
            variant={'text'}
            style={{
              backgroundColor: `${color.$secondaryBg}`,
              fontSize: `${typography.body1.medium}`,
              width: '100%',
              marginBottom: '32px',
            }}
          >
            메뉴 보기
          </Button>
          <Button
            style={{
              backgroundColor: `${color.$point}`,
              fontSize: `${typography.body1.light}`,
              width: '100%',
              marginBottom: '32px',
            }}
          >
            주문 하기
          </Button>
        </div>
      </Styled.Header>
      <Styled.Content>
        <FundingInfoList />
        <AttendantInfo data={dummyData} />
      </Styled.Content>
    </Styled.Container>
  )
}

export default FundingDetail
