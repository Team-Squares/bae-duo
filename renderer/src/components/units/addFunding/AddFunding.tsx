import React, { useRef, useState } from 'react'
import * as Styled from './AddFunding.styles'
import Stepper from '../stepper/Stepper'
import Button from '../../commons/button/Button'
import BrandSetting from './brandSetting/BrandSetting'
import AdditionalSetting from './additionalSetting/AdditionalSetting'
import FundingCard from './fundingCard/FundingCard'

const AddFunding = () => {
  const [useGoalPrice, setUseGoalPrice] = useState(false)
  const [selectedBrand, setSelectedBrand] = useState('')
  const [curStep, setCurStep] = useState(1)

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
        {/* STEPPER*/}
        <Stepper
          step={curStep}
          onChangeCurStep={(step: number) => {
            setCurStep(step)
          }}
        />

        {/* CONTENT */}
        {/* 1. 브랜드 설정 */}
        {curStep === 1 && (
          <BrandSetting selectedBrand={selectedBrand} setSelectedBrand={setSelectedBrand} setCurStep={setCurStep} />
        )}

        {/* 2. 추가 설정 */}
        {curStep === 2 && <AdditionalSetting setCurStep={setCurStep} />}

        {/* 3. 설정 확인 */}
        {curStep === 3 && (
          <Styled.Flex direction="column" gap={8}>
            <FundingCard />

            <Button style={{ width: '100%', height: 56 }} onClick={() => setCurStep(4)}>
              다음
            </Button>
          </Styled.Flex>
        )}

        {/* 4. 생성 완료 */}
        {curStep === 4 && (
          <Styled.Flex direction="column" gap={8}>
            <FundingCard isSuccess={true} />

            <Button style={{ width: '100%', height: 56 }}>펀딩으로 이동</Button>
          </Styled.Flex>
        )}
      </Styled.AddFundingBody>
    </>
  )
}

export default AddFunding
