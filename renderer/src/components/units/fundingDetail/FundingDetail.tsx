import React, { useEffect, useState } from 'react'
import * as Styled from './FundingDetail.style'
import { getAttendant } from '@/src/commons/api/progressFundingApi'
import { typography } from '../../../commons/styles/typography'
import { color } from '@/src/commons/styles/styles'
import Tag from '../../commons/tag/Tag'
import Button from '../../commons/button/Button'
import FundingInfoList from './components/FundingInfoList'
import AttendantInfo from './components/AttendantInfo'

const FundingDetail = () => {
  const [attendantData, setAttendantData] = useState(null)

  useEffect(() => {
    getAttendant()
      .then((res: { data: React.SetStateAction<null> }) => {
        setAttendantData(res.data)
      })
      .catch((e: any) => console.log(e))
  }, [])

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
        <FundingInfoList data={attendantData} />
        <AttendantInfo data={attendantData} />
      </Styled.Content>
    </Styled.Container>
  )
}

export default FundingDetail
