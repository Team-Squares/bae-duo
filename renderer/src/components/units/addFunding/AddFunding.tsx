import React, { useState } from 'react'
import * as Styled from './AddFunding.styles'
import hansotImg from '@/public/images/hansot.svg'
import noBrandImg from '@/public/images/nobrand.svg'
import Image from 'next/image'
import Button from '@/src/components/commons/button/Button'
import Toggle from '@/src/components/commons/toggle/Toggle'
import Input from '@/src/components/commons/input/Input'

const AddFunding = () => {
  const [useGoalPrice, setUseGoalPrice] = useState(false)
  return (
    <>
      <Styled.TitleContainer>
        <div>
          <h1 className="title">점심펀딩 만들기</h1>
          <p className="subTitle">배달 부터 포장까지 동료와 맛있는 점심을 함께 하세요.</p>
        </div>
        <Button disabled={true}>펀딩만들기</Button>
      </Styled.TitleContainer>
      <Styled.ContentsContainer>
        <Styled.SettingCard>
          <Styled.SettingCardTitle>
            <h2>점심메뉴 설정</h2>
            <ul>
              <li className="active">전체</li>
              <li>배달</li>
              <li>포장</li>
            </ul>
          </Styled.SettingCardTitle>
          <Styled.SettingCardContents>
            <Styled.Brand>
              <div className="brand-img-container">
                <Image src={hansotImg} alt={'한솥 이미지'} />
              </div>
              <div className="info-container">
                <h3 className="title">한솥 도시락 (을지로4가점)</h3>
                <p className="funding-count">지난 펀딩 횟수: 4회</p>
              </div>
            </Styled.Brand>
            <Styled.Brand isActive={true}>
              <div className="brand-img-container">
                <Image src={noBrandImg} alt={'노브랜드 이미지'} />
              </div>
              <div className="info-container">
                <h3 className="title">노브랜드 버거 (을지로점)</h3>
                <p className="funding-count">지난 펀딩 횟수: 2회</p>
              </div>
            </Styled.Brand>
            <Styled.Brand>
              <div className="brand-img-container">
                <Image src={hansotImg} alt={'한솥 이미지'} />
              </div>
              <div className="info-container">
                <h3 className="title">한솥 도시락 (을지로4가점)</h3>
                <p className="funding-count">지난 펀딩 횟수: 4회</p>
              </div>
            </Styled.Brand>
          </Styled.SettingCardContents>
        </Styled.SettingCard>

        <Styled.Flex direction={'column'} gap={8}>
          {/* 마감시간 설정 */}
          <Styled.SettingCard>
            <Styled.SettingCardTitle>
              <h2>마감시간 설정</h2>
            </Styled.SettingCardTitle>
            {/* <Styled.SettingCardContents></Styled.SettingCardContents> */}
          </Styled.SettingCard>

          {/* 목표금액 설정 */}
          <Styled.SettingCard>
            <Styled.SettingCardTitle>
              <h2>목표금액 설정</h2>
              <Toggle isCheck={useGoalPrice} setIsCheck={setUseGoalPrice} />
            </Styled.SettingCardTitle>
            {useGoalPrice && (
              <Styled.SettingCardContents>
                <Styled.CardContents>
                  <span>최소 주문금액</span>
                  <Input size="sm" />
                  <span>원</span>
                </Styled.CardContents>
              </Styled.SettingCardContents>
            )}
          </Styled.SettingCard>

          {/* 인원 설정 */}
          <Styled.SettingCard>
            <Styled.SettingCardTitle>
              <h2>참여인원 설정</h2>
              <Toggle isCheck={false} setIsCheck={() => {}} />
            </Styled.SettingCardTitle>
            {/* {useGoalPrice && (
              <Styled.SettingCardContents>
                <div>sdf</div>
              </Styled.SettingCardContents>
            )} */}
          </Styled.SettingCard>
        </Styled.Flex>
      </Styled.ContentsContainer>
    </>
  )
}

export default AddFunding
