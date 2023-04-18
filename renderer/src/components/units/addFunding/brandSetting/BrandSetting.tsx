import React from 'react'
import hansotImg from '@/public/images/hansot.svg'
import noBrandImg from '@/public/images/nobrand.svg'
import * as Styled from '@/src/components/units/addFunding/AddFunding.styles'
import Image from 'next/image'

interface BrandSettingProps {
  brand: string
  setBrand: any
  setCurStep: any
}

const BrandSetting = ({ brand, setBrand, setCurStep }: BrandSettingProps) => {
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
            setBrand('한솥 도시락 (을지로4가점)')
            setCurStep(2)
          }}
          isActive={brand === '한솥 도시락 (을지로4가점)'}
        >
          <Styled.BrandImageContainer isActive={brand === '한솥 도시락 (을지로4가점)'}>
            <Image src={hansotImg} alt={'한솥 이미지'} />
          </Styled.BrandImageContainer>
          <Styled.BrandInfo isActive={brand === '한솥 도시락 (을지로4가점)'}>
            <h3 className="title">한솥 도시락 (을지로4가점)</h3>
            <p className="funding-count">지난 펀딩 횟수: 4회</p>
          </Styled.BrandInfo>
        </Styled.Brand>
        <Styled.Brand
          onClick={() => {
            setBrand('노브랜드 버거 (을지로점)')
            setCurStep(2)
          }}
          isActive={brand === '노브랜드 버거 (을지로점)'}
        >
          <Styled.BrandImageContainer isActive={brand === '노브랜드 버거 (을지로점)'}>
            <Image src={noBrandImg} alt={'노브랜드 이미지'} />
          </Styled.BrandImageContainer>
          <Styled.BrandInfo isActive={brand === '노브랜드 버거 (을지로점)'}>
            <h3 className="title">노브랜드 버거 (을지로점)</h3>
            <p className="funding-count">지난 펀딩 횟수: 2회</p>
          </Styled.BrandInfo>
        </Styled.Brand>
      </Styled.SettingCardBody>
    </Styled.SettingCard>
  )
}

export default BrandSetting
