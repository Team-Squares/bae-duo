import React, { useCallback, useEffect, useState } from 'react'
import * as Styled from './FundingDetail.style'
import { getAttendant } from '@/src/commons/api/progressFundingApi'
import { typography } from '../../../commons/styles/typography'
import { color } from '@/src/commons/styles/styles'
import Tag from '../../commons/tag/Tag'
import Button from '../../commons/button/Button'
import FundingInfoList from './components/FundingInfoList'
import AttendantInfo from './components/Attendant/AttendantInfo'
import BillInfo from './components/Bill/BillInfo'
import Modal from '../../commons/modal/Modal'
import FundingMenuModal from './components/FundingMenuModal'

const FundingDetail = () => {
  const [attendantData, setAttendantData] = useState([])
  const [fundingMode, setFundingMode] = useState('attendant')
  const [totalPrice, setTotalPrice] = useState(0)
  const [isOpenMenu, setIsOpenMenu] = useState(false)

  // 데이터 get
  useEffect(() => {
    getAttendant()
      .then(res => {
        setAttendantData(res.data)
      })
      .catch((e: any) => console.log(e))
  }, [])

  useEffect(() => {
    let _totalPrice = 0
    const _menuInfoArr = attendantData.map((el: { menuInfo: any }) => el.menuInfo) || []
    for (let i = 0; i < _menuInfoArr.length; i++) {
      for (let j = 0; j < _menuInfoArr[i].length; j++) {
        _totalPrice += _menuInfoArr[i][j].menuPrice
      }
    }

    setTotalPrice(_totalPrice)
  }, [attendantData])

  const handleOpenMenu = useCallback(() => {
    setIsOpenMenu(prev => !prev)
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
          {fundingMode === 'attendant' ? (
            <Button
              variant={'text'}
              style={{
                backgroundColor: `${color.$secondaryBg}`,
                fontSize: `${typography.body1.medium}`,
                width: '100%',
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
                width: '100%',
                marginBottom: '32px',
              }}
              onClick={() => setFundingMode('attendant')}
            >
              이전
            </Button>
          )}
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
        </div>
      </Styled.Header>
      <Styled.Content>
        <FundingInfoList data={attendantData} totalPrice={totalPrice} />
        {fundingMode === 'attendant' && <AttendantInfo data={attendantData} />}
        {fundingMode === 'bill' && <BillInfo attendantData={attendantData} totalPrice={totalPrice} />}
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
