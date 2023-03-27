import React, { useEffect, useState } from 'react'
import * as Styled from './fundingDetail.style'
import Tag from '../../commons/tag/Tag'
import Button from '../../commons/button/Button'
import Progress from './Progress'
import Input from '../../commons/input/Input'

const FundingDetail = () => {
  const data = {
    img: '',
    price: 16000,
    deadLine: '11:50',
    participant: 4,
  }

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
          <Button variant={'text'}>메뉴 보기</Button>
          <Button>주문 하기</Button>
        </div>
      </Styled.Header>
      <Styled.Content>
        <Styled.FundingInfoList>
          <div className="fundingImg"></div>
          <Progress type={'price'} />
          <Progress type={'time'} />
          <Progress type={'member'} />
        </Styled.FundingInfoList>
        <Styled.ParticipantInfo>
          <div className="title">참여자</div>
          <div className="inputGroup">
            <Input placeholder="메뉴를 입력하세요" size="sm" />
            <Input placeholder="가격을 입력하세요" size="sm" />
          </div>
        </Styled.ParticipantInfo>
      </Styled.Content>
    </Styled.Container>
  )
}

export default FundingDetail
