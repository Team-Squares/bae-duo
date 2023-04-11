import React from 'react'
import styled from '@emotion/styled'
import * as Styled from '@/src/components/units/addFunding/AddFunding.styles'
import Image from 'next/image'
import hansotImg from '@/public/images/hansot.svg'
import { color } from '@/src/commons/styles/color'
import { typography } from '@/src/commons/styles/typography'
import SuccessIcon from '@/public/icons/success_icon.svg'
import moment from 'moment'
import CloseIcon from '@mui/icons-material/Close'

interface FundingCardProps {
  isSuccess?: boolean
  brand: string
  deadline: Date
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
            <SettingItemBody>{moment(deadline).format('h시 mm분')}</SettingItemBody>
          </SettingItem>
          <SettingItem>
            <SettingItemTitle>목표금액</SettingItemTitle>
            <SettingItemBody>{Number(totalPrice).toLocaleString()}원</SettingItemBody>
          </SettingItem>
          <SettingItem>
            <SettingItemTitle>추가설명</SettingItemTitle>
            <SettingItemBody>
              <Description>{description}</Description>
            </SettingItemBody>
          </SettingItem>
          <SettingItem>
            <SettingItemTitle>메뉴 이미지</SettingItemTitle>
            <SettingItemBody>
              <ImagePreviewContainer>
                {images &&
                  images.map((image, i) => (
                    <ImagePreview key={`image-uploader-${i}`}>
                      <Image src={image} alt={`이미지 ${i}`} width={120} height={80} />
                    </ImagePreview>
                  ))}
              </ImagePreviewContainer>
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
const Description = styled.p`
  white-space: pre-wrap;
`

const ImagePreviewContainer = styled.div`
  display: flex;
  gap: 4px;
  flex-wrap: wrap;

  min-height: 40px;
`

const ImagePreview = styled.div`
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid ${color.border.default};

  img {
    object-fit: cover;
  }
`
