import React, { useCallback, useEffect, useState, useContext } from 'react'
import * as Styled from './FundingDetail.style'
import { useRouter } from 'next/router'
import { useQuery } from 'react-query'
import moment from 'moment'
import { getAttendant, getFundingData } from '@/src/commons/api/progressFundingApi'
import { UserContext } from '@/src/contexts/UserContext'
import { typography } from '../../../commons/styles/typography'
import { color } from '@/src/commons/styles/styles'
import { FundingListType } from '../home/Home.types'
import { AttendantInfoType } from './FundingDetail.types'
import Tag from '../../commons/tag/Tag'
import Button from '../../commons/button/Button'
import FundingInfoList from './components/FundingInfoList'
import AttendantInfo from './components/Attendant/AttendantInfo'
import BillInfo from './components/Bill/BillInfo'

const FundingDetail = () => {
  const { user } = useContext(UserContext)
  const router = useRouter()
  const [fundingData, setFundingData] = useState<FundingListType | null>(null)
  const [attendantData, setAttendantData] = useState<AttendantInfoType[]>([])
  const [fundingMode, setFundingMode] = useState('attendant')
  const [totalPrice, setTotalPrice] = useState<number>(0)
  const [queryId, setQueryId] = useState(0)
  const { data, isSuccess } = useQuery(['getAllAttendantList'], () => getAttendant())
  const { data: fetchedFundingData, isSuccess: isFundingSuccess } = useQuery(['getAllFundingList'], () =>
    getFundingData(parseInt(router.query.id as string))
  )
  const [isCompleteOrder, setIsCompleteOrder] = useState(false)

  const _getFundingData = useCallback(() => {
    const id = Number(router.query.id as string)
    setQueryId(id)
    if (!id) return
    getFundingData(id)
      .then(res => {
        setFundingData(res.data)
      })
      .catch(e => console.log(e))
  }, [router.query.id])

  useEffect(() => {
    if (isFundingSuccess) {
      _getFundingData()
      setTotalPrice(fetchedFundingData.data.curPrice)
    }
  }, [_getFundingData, isFundingSuccess, attendantData])

  // get funding data
  useEffect(() => {
    _getFundingData()
  }, [router])

  // get attendant data
  useEffect(() => {
    if (isSuccess) {
      const _filtered = data.data.filter((data: { fundingId: number }) => data.fundingId === queryId)
      setAttendantData(_filtered)
    }
  }, [data, isSuccess])

  return (
    <Styled.Container>
      <Styled.Header>
        <div className="fundingInfo">
          <h2>{fundingData?.brand}</h2>
          <div className="fundingSubInfo">
            <Tag text={'펀딩 진행 중'} />
            <span className="fundingDate">{moment(fundingData?.createdAt).format('YYYY.MM.DD')}</span>
          </div>
        </div>
        <div className="buttonGroup">
          {fundingMode === 'attendant' ? (
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
          ) : (
            <Button
              variant={'text'}
              style={{
                backgroundColor: `${color.$secondaryBg}`,
                fontSize: `${typography.body1.medium}`,
                width: '100%',
                marginBottom: '32px',
              }}
              onClick={() => setFundingMode('attendant')}
            >
              이전
            </Button>
          )}

          {/* 스타터 아이디로 변경 필요 , 임시 데이터 */}
          {fetchedFundingData?.data.starter === 'seung' ? (
            <Button
              style={{
                backgroundColor: `${color.$point}`,
                fontSize: `${typography.body1.light}`,
                width: '100%',
                marginBottom: '32px',
              }}
              onClick={() => setFundingMode('bill')}
            >
              주문 하기
            </Button>
          ) : (
            <Button
              style={{
                backgroundColor: `${color.$blue30}`,
                fontSize: `${typography.body1.light}`,
                width: '100%',
                marginBottom: '32px',
              }}
              onClick={() => {
                if (isCompleteOrder) {
                  setFundingMode('bill')
                } else {
                  alert('스타터가 주문중입니다')
                }
              }}
            >
              주문서 확인하기
            </Button>
          )}
        </div>
      </Styled.Header>
      <Styled.Content>
        <FundingInfoList data={attendantData} totalPrice={totalPrice} fundingData={fundingData} />
        {fundingMode === 'attendant' && <AttendantInfo data={attendantData} funding={fundingData} user={user} />}
        {fundingMode === 'bill' && (
          <BillInfo
            attendantData={attendantData}
            totalPrice={totalPrice}
            userId={user?.id}
            fundingData={fundingData}
            setIsCompleteOrder={setIsCompleteOrder}
          />
        )}
      </Styled.Content>
    </Styled.Container>
  )
}

export default FundingDetail
