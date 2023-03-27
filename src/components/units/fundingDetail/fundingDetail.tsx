import React from 'react'
import * as Styled from './fundingDetail.style'
import Tag from '../../commons/tag/Tag'
import Button from '../../commons/button/Button'

const FundingDetail = ({ ...props }) => {
  return (
    <Styled.Container>
      <Styled.Header>
        <div className="fundingInfo">
          <h2>브랜드명</h2>
          <div className="fundingSubInfo">
            <Tag text={'펀딩 진행 중'} />
            <span>2023.00.00</span>
          </div>
        </div>
        <div className="buttonGroup">
          <Button variant={'text'}>메뉴 보기</Button>
          <Button>주문 하기</Button>
        </div>
      </Styled.Header>
    </Styled.Container>
  )
}

export default FundingDetail
