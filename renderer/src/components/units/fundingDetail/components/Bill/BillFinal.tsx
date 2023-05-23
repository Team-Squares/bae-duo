import React, { useEffect, useState } from 'react'
import * as Styled from '../../FundingDetail.style'
import Button from '../../../../commons/button/Button'
import { useQueryClient, useQuery } from 'react-query'
import { getBill } from '@/src/commons/api/progressFundingApi'
import { billType, billPriceInfoType } from '../../FundingDetail.types'

const BillFinal = ({ ...props }) => {
  const { totalPrice: menuPrice, fundingId } = props
  // const [billData, setBillData] = useState<billType>()
  const [totalPrice, setTotalPrice] = useState(menuPrice)
  const [fetchedBillData, setFetchedBillData] = useState<billType>()
  const { data, status } = useQuery(['getAllBillList'], () => getBill(fundingId))

  useEffect(() => {
    if (!data) return
    setFetchedBillData(data.data)
    console.log(fetchedBillData)
  }, [data, status])

  return (
    <Styled.BillInfo>
      <div className="title">주문서</div>
      {/* 주문완료 */}
      <div className="billContainer">
        {fetchedBillData?.priceInfo.map((priceInfo: billPriceInfoType, idx: number) => (
          <div className="attendantInfo" key={idx}>
            <div className="userInfo">
              <div className="img"></div>
              <div className="userName">{priceInfo.userName}</div>
            </div>
            <div className="menuList">
              <div className="menuPrice" key={idx}>
                {priceInfo.totalPrice.toLocaleString()} 원
              </div>
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
            <div className="price">{fetchedBillData?.deliveryFee?.toLocaleString()} 원</div>
          </div>
          <div className="billInfoGroup total">
            <div className="billTitle">총 합계</div>
            <div className="menuPrice">{totalPrice.toLocaleString()} 원</div>
          </div>
        </div>
        <div className="accountInfoContainer">
          <p>주문자 계좌 정보</p>
          <div className="accountGroup">
            <div>{fetchedBillData?.bankName}</div>
            <div>{fetchedBillData?.bankAccount}</div>
          </div>
        </div>
        <Button
          size="large"
          style={{
            width: '100%',
            marginTop: '30px',
          }}
          onClick={() => alert('입금 부탁해여')}
        >
          입금 요청하기 💸
        </Button>
      </div>
    </Styled.BillInfo>
  )
}

export default BillFinal
