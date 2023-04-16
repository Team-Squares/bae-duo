import React, { Dispatch, SetStateAction, useEffect } from 'react'
import Image from 'next/image'
import { Controller, useFormContext, useWatch } from 'react-hook-form'
import hansotImg from '@/public/images/hansot.svg'
import noBrandImg from '@/public/images/nobrand.svg'
import * as Styled from '@/src/components/units/addFunding/AddFunding.styles'
import { SetCurStepProps } from '../AddFunding.types'

const BrandSetting = ({ setCurStep }: SetCurStepProps) => {
  return (
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
        <Brand name="한솥 도시락 (을지로4가점)" image={hansotImg} setCurStep={setCurStep} />
        <Brand name="노브랜드 버거 (을지로점)" image={noBrandImg} setCurStep={setCurStep} />
      </Styled.SettingCardBody>
    </Styled.SettingCard>
  )
}

export default BrandSetting

interface BrandProps {
  name: string
  image: string
  setCurStep: any
}

const Brand = ({ name, image, setCurStep }: BrandProps) => {
  const { control } = useFormContext()
  const brand = useWatch({
    control,
    name: 'brand',
  })

  return (
    <>
      <Controller
        name="brand"
        render={({ field: { onChange } }) => {
          return (
            <Styled.Brand
              onClick={() => {
                onChange(name)
                setCurStep(2)
              }}
              isActive={brand === name}
            >
              <Styled.BrandImageContainer isActive={brand === name}>
                <Image src={image} alt={name} />
              </Styled.BrandImageContainer>
              <Styled.BrandInfo isActive={brand === name}>
                <h3 className="title">{name}</h3>
                <p className="funding-count">지난 펀딩 횟수: 4회</p>
              </Styled.BrandInfo>
            </Styled.Brand>
          )
        }}
      />
    </>
  )
}
