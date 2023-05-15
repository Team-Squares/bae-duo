import React, { useEffect, useState } from 'react'
import * as Styled from '../../FundingDetail.style'
import Button from '../../../../commons/button/Button'
import Input from '../../../../commons/input/Input'
import { AttendantInfoType, Menu } from '../../FundingDetail.types'
import { postBill } from '@/src/commons/api/progressFundingApi'

const BillInfo = ({ ...props }) => {
  const { attendantData, totalPrice: menuPrice } = props
  const [attendants, setAttendants] = useState([])
  const [totalPrice, setTotalPrice] = useState(menuPrice)
  const [deliveryFee, setDeliveryFee] = useState<number>(0)
  const [accountInfo, setAccountInfo] = useState({
    bankName: '',
    bankAccount: '',
  })

  // 최종 금액
  useEffect(() => {
    setTotalPrice(deliveryFee + menuPrice)
  }, [deliveryFee, menuPrice])

  // bill attendants data
  useEffect(() => {
    setAttendants(attendantData.map((data: AttendantInfoType) => data.userId))
  }, [attendantData])

  const handlePostBill = () => {
    const obj = {
      attendants: `${attendants}`,
      minPrice: 1,
      bankName: `${accountInfo.bankName}`,
      bankAccount: `${accountInfo.bankAccount}`,
      deliveryFee: deliveryFee,
    }
    postBill(obj)
      .then(res => {
        console.log('postBill:', res.data)
      })
      .catch(e => console.log(e))
  }

  return (
    <Styled.BillInfo>
      <div className="title">주문서</div>
      <div className="billContainer">
        {attendantData.map((data: AttendantInfoType, idx: number) => (
          <div className="attendantInfo" key={idx}>
            <div className="userInfo">
              <div className="img"></div>
              <div className="userName">{data.userName}</div>
            </div>
            <div className="menuList">
              {data.menuInfo.map((menuInfo: Menu, idx: number) => (
                <div className="menuInfo" key={idx}>
                  <div className="menuName">{menuInfo.menuName}</div>
                  <div className="menuPrice">{menuInfo.menuPrice.toLocaleString()} 원</div>
                </div>
              ))}
            </div>
          </div>
        ))}
        <div className="billInfoContainer">
          <div className="billInfoGroup">
            <div className="billTitle">주문합계</div>
            <div className="price">{menuPrice.toLocaleString()} 원</div>
          </div>
          <div className="billInfoGroup">
            <div className="billTitle">배달비</div>
            <div className="price">
              <Input
                style={{ width: '80px' }}
                value={deliveryFee}
                placeholder="배달비"
                onChange={e => setDeliveryFee(parseInt(e.target.value))}
              />
              <span>원</span>
            </div>
          </div>
          <div className="billInfoGroup total">
            <div className="billTitle">총 합계</div>
            <div className="menuPrice">{totalPrice.toLocaleString()} 원</div>
          </div>
        </div>
        <div className="accountInfoContainer">
          <p>입금받을 계좌 정보를 입력하세요!</p>
          <div className="accountGroup">
            <Input
              labelType="wrapper"
              label="은행명"
              variant="soft"
              style={{ width: '130px' }}
              value={accountInfo.bankName}
              onChange={e => setAccountInfo({ ...accountInfo, bankName: e.target.value })}
            />
            <Input
              labelType="wrapper"
              label="계좌번호"
              variant="soft"
              style={{ width: 'calc(100% - 150px)' }}
              value={accountInfo.bankAccount}
              onChange={e => setAccountInfo({ ...accountInfo, bankAccount: e.target.value })}
            />
          </div>
        </div>
        <Button
          size="large"
          style={{
            width: '100%',
            marginTop: '30px',
          }}
          onClick={handlePostBill}
        >
          주문 완료하기
        </Button>
      </div>
    </Styled.BillInfo>
  )
}

export default BillInfo
