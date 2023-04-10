import React from 'react'
import styled from '@emotion/styled'
import * as Styled from '@/src/components/units/addFunding/AddFunding.styles'
import Image from 'next/image'
import hansotImg from '@/public/images/hansot.svg'
import { color } from '@/src/commons/styles/color'
import { typography } from '@/src/commons/styles/typography'
import SuccessIcon from '@/public/icons/success_icon.svg'

interface FundingCardProps {
  isSuccess?: boolean
  brand: string
  deadline: string
  totalPrice: number
  description?: string
  images?: string[]
}

const FundingCard = ({ isSuccess, brand, deadline, totalPrice, description, images }: FundingCardProps) => {
  return (
    <FundingCardContainer>
      {isSuccess && (
        <FundingCardHeaderImage>
          <Image src={SuccessIcon} alt="펀딩 생성 성공" style={{ width: 160 }} />
        </FundingCardHeaderImage>
      )}
      <FundingCardHeader>
        <FundingBrandImageContainer>
          <Image src={hansotImg} alt={'한솥 이미지'} />
        </FundingBrandImageContainer>
        <h3>{brand}</h3>
      </FundingCardHeader>
      <Styled.SettingCardBody>
        <Styled.Flex direction="column" gap={16}>
          <SettingItem>
            <SettingItemTitle>마감시간</SettingItemTitle>
            <SettingItemBody>{deadline}</SettingItemBody>
          </SettingItem>
          <SettingItem>
            <SettingItemTitle>목표금액</SettingItemTitle>
            <SettingItemBody>{totalPrice}원</SettingItemBody>
          </SettingItem>
          <SettingItem>
            <SettingItemTitle>추가설명</SettingItemTitle>
            <SettingItemBody>
              <p>
                {description}
                {/* 자세한 메뉴알고 싶으신 분들은 노브랜드 버거 을지로4가점 검색해서 보세요 🐷
                <br />
                현저하게 사랑의 없는 끝까지 청춘의 풍부하게 청춘이 약동하다. 이상 낙원을 미인을 기쁘며, 스며들어 이 하는
                봄바람이다. <br />
                인생에 풀밭에 무한한 남는 피가 행복스럽고 듣는다. */}
              </p>
            </SettingItemBody>
          </SettingItem>
        </Styled.Flex>
      </Styled.SettingCardBody>
    </FundingCardContainer>
  )
}

export default FundingCard

const FundingCardContainer = styled(Styled.SettingCard)`
  display: flex;
  flex-direction: column;
  gap: 8px;
`
const FundingCardHeaderImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  img {
    width: 160px;
  }
`
const FundingCardHeader = styled(Styled.SettingCardHeader)`
  justify-content: flex-start;
  gap: 20px;

  h3 {
    ${typography.subheading}
  }
`
const FundingBrandImageContainer = styled(Styled.BrandImageContainer)`
  width: 60px;
  height: 60px;
`

const SettingItem = styled.div`
  display: flex;
  padding: 0 30px;
  ${typography.body2.medium}
`
const SettingItemTitle = styled.div`
  width: 84px;
  color: ${color.text.gray};
`
const SettingItemBody = styled.div`
  flex: 1;
`
