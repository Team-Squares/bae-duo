import React, { useEffect, useState } from 'react'
import { FormProvider, useForm, useWatch } from 'react-hook-form'
import moment from 'moment'
import * as Styled from '@/src/components/units/addFunding/AddFunding.styles'
import Stepper from '@/src/components/units/stepper/Stepper'
import Button from '@/src/components/commons/button/Button'
import BrandSetting from '@/src/components/units/addFunding/brandSetting/BrandSetting'
import AdditionalSetting from '@/src/components/units/addFunding/additionalSetting/AdditionalSetting'
import FundingCard from '@/src/components/units/addFunding/fundingCard/FundingCard'
import { AddFundingProps } from '@/src/components/units/addFunding/AddFunding.types'

const AddFunding = () => {
  const [curStep, setCurStep] = useState(1)

  const methods = useForm<AddFundingProps>({
    defaultValues: {
      starter: 'seung',
      brand: '',
      minPrice: 0,
      minMember: 0,
      deadline: new Date(moment().hours(11).minutes(0).seconds(0).format()), // 기본 11:00 세팅
      description: '',
      images: [],
    },
  })
  const { handleSubmit, control } = methods

  const [deadline] = useWatch({
    control,
    name: ['deadline'],
  })

  const handleAddFunding = (data: AddFundingProps) => {
    setCurStep(4)
    console.log(data)
  }

  return (
    <>
      <FormProvider<AddFundingProps> {...methods}>
        {/* HEADER */}
        <Styled.AddFundingHeader>
          <div>
            {/* <Styled.HeaderTitle>점심펀딩 만들기</Styled.HeaderTitle> */}
            {/* <Styled.HeaderSubTitle>배달 부터 포장까지 동료와 맛있는 점심을 함께 하세요.</Styled.HeaderSubTitle> */}
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
          {curStep === 1 && <BrandSetting setCurStep={setCurStep} />}

          {/* 2. 추가 설정 */}
          {curStep === 2 && <AdditionalSetting setCurStep={setCurStep} />}

          {/* 3. 설정 확인 */}
          {curStep === 3 && deadline && (
            <Styled.Flex direction="column" gap={8}>
              <FundingCard />

              <Button style={{ width: '100%', height: 56 }} onClick={handleSubmit(handleAddFunding)}>
                펀딩 만들기
              </Button>
            </Styled.Flex>
          )}

          {/* 4. 생성 완료 */}
          {curStep === 4 && deadline && (
            <Styled.Flex direction="column" gap={8}>
              <FundingCard isSuccess={true} />

              <Button style={{ width: '100%', height: 56 }}>펀딩으로 이동</Button>
            </Styled.Flex>
          )}
        </Styled.AddFundingBody>
      </FormProvider>
    </>
  )
}

export default AddFunding
