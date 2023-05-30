import React, { useCallback, useEffect, useState, useMemo } from 'react'
import * as Styled from './FundingDetail.style'
import { useRouter } from 'next/router'
import { useQuery } from 'react-query'
import moment from 'moment'
import { getAttendant, getFundingData } from '@/src/commons/api/progressFundingApi'
import { typography } from '../../../commons/styles/typography'
import { color } from '@/src/commons/styles/styles'
import { FundingListType } from '../home/Home.types'
import { AttendantInfoType } from './FundingDetail.types'
import Tag from '../../commons/tag/Tag'
import Button from '../../commons/button/Button'
import FundingInfoList from './components/FundingInfoList'
import AttendantInfo from './components/Attendant/AttendantInfo'
import BillInfo from './components/Bill/BillInfo'
import { userInfoState } from '@/src/commons/atom/user'
import { useRecoilState } from 'recoil'
import BillFinal from './components/Bill/BillFinal'
import Modal from '../../commons/modal/Modal'
import FundingMenuModal from './components/FundingMenuModal'
import FundingSkeleton from '../../commons/skeleton/FundingSkeleton'

const FundingDetail = () => {
  const [userInfo] = useRecoilState(userInfoState)
  const router = useRouter()
  const [fundingData, setFundingData] = useState<FundingListType | null>(null)
  const [attendantData, setAttendantData] = useState<AttendantInfoType[]>([])
  const [fundingMode, setFundingMode] = useState('attendant')
  const [totalPrice, setTotalPrice] = useState<number>(0)
  const [queryId, setQueryId] = useState(0)
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  const { data, isSuccess, status: attendantStatus } = useQuery(['getAllAttendantList'], () => getAttendant())
  const {
    data: fetchedFundingData,
    isSuccess: isFundingSuccess,
    status: fundingStatus,
  } = useQuery(['getAllFundingList'], () => getFundingData(parseInt(router.query.id as string)))
  const [isCompleteOrder, setIsCompleteOrder] = useState(false)

  const fundingStatusText = useMemo(() => {
    if (!fundingData) return '상태 알 수 없음'
    const DOING = 1
    const SUCCESS = 2
    const FAIL = 3
    switch (fundingData.status) {
      case DOING:
        return '펀딩 진행 중'
      case SUCCESS:
        return '펀딩 성공'
      case FAIL:
        return '펀딩 실패'
      default:
        return '상태 알 수 없음'
    }
  }, [fundingData])

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

  const handleOpenMenu = useCallback(() => {
    setIsOpenMenu(prev => !prev)
  }, [])

  useEffect(() => {
    if (isFundingSuccess) {
      _getFundingData()
      setTotalPrice(fetchedFundingData.data.curPrice)
    }
  }, [_getFundingData, fetchedFundingData?.data?.curPrice, isFundingSuccess])

  // get funding data
  useEffect(() => {
    _getFundingData()
  }, [_getFundingData, router])

  // get attendant data
  useEffect(() => {
    if (isSuccess) {
      const _filtered = data.data.filter((data: { fundingId: number }) => data.fundingId === queryId)
      setAttendantData(_filtered)
    }
  }, [data, isSuccess, queryId])

  return (
    <Styled.Container>
      <Styled.Header>
        <div className="fundingInfo">
          <h2>{fundingData?.brand}</h2>
          <div className="fundingSubInfo">
            <Tag text={fundingStatusText} />
            <span className="fundingDate">{moment(fundingData?.createdAt).format('YYYY.MM.DD')}</span>
          </div>
        </div>
        {fundingData?.status === 1 && (
          <div className="buttonGroup">
            {fundingMode === 'attendant' ? (
              <Button
                variant={'text'}
                style={{
                  backgroundColor: `${color.$secondaryBg}`,
                  fontSize: `${typography.body1.medium}`,
                  marginBottom: '32px',
                }}
                onClick={handleOpenMenu}
              >
                메뉴 보기
              </Button>
            ) : (
              <Button
                variant={'text'}
                style={{
                  backgroundColor: `${color.$secondaryBg}`,
                  fontSize: `${typography.body1.medium}`,
                  marginBottom: '32px',
                }}
                onClick={() => setFundingMode('attendant')}
              >
                이전
              </Button>
            )}

            {/* 스타터 아이디로 변경 필요 , 임시 데이터 */}
            {fetchedFundingData?.data.starter === userInfo.id || 'seung2' ? (
              <Button
                style={{
                  backgroundColor: `${color.$point}`,
                  fontSize: `${typography.body1.light}`,
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
        )}
      </Styled.Header>
      <Styled.Content>
        <FundingInfoList data={attendantData} totalPrice={totalPrice} fundingData={fundingData} />
        {fundingStatus === 'loading' ? (
          <FundingSkeleton />
        ) : (
          fundingMode === 'attendant' &&
          fundingData?.status === 1 && <AttendantInfo data={attendantData} funding={fundingData} user={userInfo} />
        )}

        {fundingMode === 'bill' && fundingData?.status === 1 && (
          <BillInfo
            attendantData={attendantData}
            totalPrice={totalPrice}
            userId={userInfo?.id}
            fundingData={fundingData}
            setIsCompleteOrder={setIsCompleteOrder}
          />
        )}
        {fundingData?.status === 2 && (
          <BillFinal
            attendantData={attendantData}
            totalPrice={totalPrice}
            userId={userInfo?.id}
            fundingData={fundingData}
            setIsCompleteOrder={setIsCompleteOrder}
            fundingId={fetchedFundingData?.data.id}
          />
        )}
      </Styled.Content>
      {isOpenMenu && (
        <Modal
          id="1"
          title="메뉴 이미지"
          width={'400px'}
          height={'500px'}
          left={'50%'}
          top={'50%'}
          mode="none"
          closeModal={() => setIsOpenMenu(false)}
        >
          <FundingMenuModal />
        </Modal>
      )}
    </Styled.Container>
  )
}

export default FundingDetail
