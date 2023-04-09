import React, { useRef, useState } from 'react'
import * as Styled from './AddFunding.styles'
import hansotImg from '@/public/images/hansot.svg'
import noBrandImg from '@/public/images/nobrand.svg'
import Image from 'next/image'
import Input from '@/src/components/commons/input/Input'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import StepBar from '../../commons/stepbar/StepBar'
import Button from '../../commons/button/Button'
import { color } from '@/src/commons/styles/color'
import SuccessIcon from '@/public/icons/success_icon.svg'

const AddFunding = () => {
  const [useGoalPrice, setUseGoalPrice] = useState(false)
  const [selectedBrand, setSelectedBrand] = useState('')
  const [curStep, setCurStep] = useState(1)

  const imgInputRef = useRef<HTMLInputElement | null>(null)

  return (
    <>
      {/* HEADER */}
      <Styled.AddFundingHeader>
        <div>
          <Styled.HeaderTitle>점심펀딩 만들기</Styled.HeaderTitle>
          <Styled.HeaderSubTitle>배달 부터 포장까지 동료와 맛있는 점심을 함께 하세요.</Styled.HeaderSubTitle>
        </div>
      </Styled.AddFundingHeader>

      {/* BODY */}
      <Styled.AddFundingBody>
        {/* STEP BAR */}
        <StepBar
          step={curStep}
          onChangeCurStep={(step: number) => {
            setCurStep(step)
          }}
        />

        {/* CONTENT */}
        {/* 1. 브랜드 설정 */}
        {curStep === 1 && (
          <Styled.SettingCard>
            <Styled.SettingCardHeader>
              <h2>브랜드 선택</h2>
              <ul>
                <li className="active">전체</li>
                <li>배달</li>
                <li>포장</li>
              </ul>
            </Styled.SettingCardHeader>
            <Styled.SettingCardBody>
              <Styled.Brand
                onClick={() => {
                  setSelectedBrand('hansot')
                  setCurStep(2)
                }}
                isActive={selectedBrand === 'hansot'}
              >
                <Styled.BrandImageContainer isActive={selectedBrand === 'hansot'}>
                  <Image src={hansotImg} alt={'한솥 이미지'} />
                </Styled.BrandImageContainer>
                <Styled.BrandInfo isActive={selectedBrand === 'hansot'}>
                  <h3 className="title">한솥 도시락 (을지로4가점)</h3>
                  <p className="funding-count">지난 펀딩 횟수: 4회</p>
                </Styled.BrandInfo>
              </Styled.Brand>
              <Styled.Brand
                onClick={() => {
                  setSelectedBrand('nobrand')
                }}
                isActive={selectedBrand === 'nobrand'}
              >
                <Styled.BrandImageContainer isActive={selectedBrand === 'nobrand'}>
                  <Image src={noBrandImg} alt={'노브랜드 이미지'} />
                </Styled.BrandImageContainer>
                <Styled.BrandInfo isActive={selectedBrand === 'nobrand'}>
                  <h3 className="title">노브랜드 버거 (을지로점)</h3>
                  <p className="funding-count">지난 펀딩 횟수: 2회</p>
                </Styled.BrandInfo>
              </Styled.Brand>
            </Styled.SettingCardBody>
          </Styled.SettingCard>
        )}

        {/* 2. 추가 설정 */}
        {curStep === 2 && (
          <Styled.Flex direction="column" gap={8}>
            <Styled.Flex gap={8}>
              {/* 마감시간 설정 */}
              <Styled.SettingCard style={{ flex: 1 }}>
                <Styled.SettingCardHeader>
                  <h2>마감시간</h2>
                  <Input size="sm" />
                </Styled.SettingCardHeader>
              </Styled.SettingCard>

              {/* 목표금액 설정 */}
              <Styled.SettingCard style={{ flex: 1 }}>
                <Styled.SettingCardHeader>
                  <h2>목표금액</h2>
                  <Input size="sm" />
                  {/* <Toggle isCheck={useGoalPrice} setIsCheck={setUseGoalPrice} /> */}
                </Styled.SettingCardHeader>
                {useGoalPrice && (
                  <Styled.SettingCardBody>
                    <Styled.CardContents>
                      <span>최소 주문금액</span>
                      <Input size="sm" />
                      <span>원</span>
                    </Styled.CardContents>
                  </Styled.SettingCardBody>
                )}
              </Styled.SettingCard>
            </Styled.Flex>

            <Styled.SettingCard>
              <Styled.SettingCardHeader>
                <h2>설명</h2>
                {/* <Input size="sm" /> */}
              </Styled.SettingCardHeader>
              {/* <Styled.SettingCardBody></Styled.SettingCardBody> */}
            </Styled.SettingCard>

            {/* 이미지 설정 */}
            <Styled.SettingCard>
              <Styled.SettingCardHeader>
                <h2>메뉴 이미지</h2>
                <AddCircleOutlineIcon
                  sx={{
                    cursor: 'pointer',
                  }}
                  onClick={() => {
                    if (!imgInputRef.current) return
                    imgInputRef.current.click()
                  }}
                />
                <input
                  ref={imgInputRef}
                  type="file"
                  accept="image/jpg, image/jpeg, image/png"
                  multiple
                  style={{ display: 'none' }}
                />
              </Styled.SettingCardHeader>
            </Styled.SettingCard>

            <Button style={{ width: '100%', height: 56 }} onClick={() => setCurStep(3)}>
              다음
            </Button>
          </Styled.Flex>
        )}

        {/* 3. 설정 확인 */}
        {curStep === 3 && (
          <Styled.Flex direction="column" gap={8}>
            <Styled.SettingCard>
              <Styled.SettingCardBody>
                <Styled.Flex direction="column" gap={16}>
                  <Styled.Flex alignItems="center" gap={20} style={{ padding: '0 30px', marginBottom: 12 }}>
                    <Styled.BrandImageContainer style={{ width: 60, height: 60 }}>
                      <Image src={hansotImg} alt={'한솥 이미지'} />
                    </Styled.BrandImageContainer>
                    <h3 style={{ fontSize: 18, fontWeight: 700 }}>한솥 도시락 (을지로점)</h3>
                  </Styled.Flex>

                  <div style={{ display: 'flex', padding: '0 30px', fontSize: 14 }}>
                    <div style={{ width: 84, color: color.text.gray }}>마감시간</div>
                    <div>11시 30분</div>
                  </div>
                  <div style={{ display: 'flex', padding: '0 30px', fontSize: 14 }}>
                    <div style={{ width: 84, color: color.text.gray }}>목표금액</div>
                    <div>20,000원</div>
                  </div>
                  <div style={{ display: 'flex', padding: '0 30px', fontSize: 14 }}>
                    <div style={{ width: 84, color: color.text.gray }}>추가설명</div>
                    <div style={{ flex: 1 }}>
                      <p>
                        자세한 메뉴알고 싶으신 분들은 노브랜드 버거 을지로4가점 검색해서 보세요 🐷
                        <br />
                        현저하게 사랑의 없는 끝까지 청춘의 풍부하게 청춘이 약동하다. 이상 낙원을 미인을 기쁘며, 스며들어
                        이 하는 봄바람이다. <br />
                        인생에 풀밭에 무한한 남는 피가 행복스럽고 듣는다.
                      </p>
                    </div>
                  </div>
                </Styled.Flex>
              </Styled.SettingCardBody>
            </Styled.SettingCard>

            <Button style={{ width: '100%', height: 56 }} onClick={() => setCurStep(4)}>
              다음
            </Button>
          </Styled.Flex>
        )}

        {/* 4. 생성 완료 */}
        {curStep === 4 && (
          <Styled.Flex direction="column" gap={8}>
            <Styled.SettingCard>
              <Styled.SettingCardHeader>
                <Styled.FlexCenter direction="column" gap={8} style={{ width: '100%', marginTop: 20 }}>
                  <Image src={SuccessIcon} alt="펀딩 생성 성공" style={{ width: 160 }} />
                </Styled.FlexCenter>
              </Styled.SettingCardHeader>
              <Styled.SettingCardBody>
                <Styled.Flex direction="column" gap={16}>
                  <Styled.Flex alignItems="center" gap={20} style={{ padding: '0 30px', marginBottom: 12 }}>
                    <Styled.BrandImageContainer style={{ width: 60, height: 60 }}>
                      <Image src={hansotImg} alt={'한솥 이미지'} />
                    </Styled.BrandImageContainer>
                    <h3 style={{ fontSize: 18, fontWeight: 700 }}>한솥 도시락 (을지로점)</h3>
                  </Styled.Flex>

                  <div style={{ display: 'flex', padding: '0 30px', fontSize: 14 }}>
                    <div style={{ width: 84, color: color.text.gray }}>마감시간</div>
                    <div>11시 30분</div>
                  </div>
                  <div style={{ display: 'flex', padding: '0 30px', fontSize: 14 }}>
                    <div style={{ width: 84, color: color.text.gray }}>목표금액</div>
                    <div>20,000원</div>
                  </div>
                  <div style={{ display: 'flex', padding: '0 30px', fontSize: 14 }}>
                    <div style={{ width: 84, color: color.text.gray }}>추가설명</div>
                    <div style={{ flex: 1 }}>
                      <p>
                        자세한 메뉴알고 싶으신 분들은 노브랜드 버거 을지로4가점 검색해서 보세요 🐷
                        <br />
                        현저하게 사랑의 없는 끝까지 청춘의 풍부하게 청춘이 약동하다. 이상 낙원을 미인을 기쁘며, 스며들어
                        이 하는 봄바람이다. <br />
                        인생에 풀밭에 무한한 남는 피가 행복스럽고 듣는다.
                      </p>
                    </div>
                  </div>
                </Styled.Flex>
              </Styled.SettingCardBody>
            </Styled.SettingCard>

            <Button style={{ width: '100%', height: 56 }}>펀딩으로 이동</Button>
          </Styled.Flex>
        )}
      </Styled.AddFundingBody>
    </>
  )
}

export default AddFunding
