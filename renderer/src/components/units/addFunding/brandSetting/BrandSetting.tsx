import React from 'react'
import hansotImg from '@/public/images/hansot.svg'
import noBrandImg from '@/public/images/nobrand.svg'
import * as Styled from '@/src/components/units/addFunding/AddFunding.styles'
import Image from 'next/image'
import { color, colorPalette } from '@/src/commons/styles/color'
import { typography } from '@/src/commons/styles/typography'
import styled from '@emotion/styled'

interface BrandSettingProps {
  selectedBrand: string
  setSelectedBrand: any
  setCurStep: any
}

const BrandSetting = ({ selectedBrand, setSelectedBrand, setCurStep }: BrandSettingProps) => {
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
  )
}

export default BrandSetting
