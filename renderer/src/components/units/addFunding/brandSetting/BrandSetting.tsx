import React, { Dispatch, SetStateAction } from 'react'
import Image from 'next/image'
import { useFormContext, useWatch } from 'react-hook-form'
import * as Styled from '@/src/components/units/addFunding/AddFunding.styles'
import { BrandType, SetCurStepProps } from '../AddFunding.types'

interface BranSettingProps extends SetCurStepProps {
  brandList: BrandType[]
  setSelectedBrand: Dispatch<SetStateAction<BrandType | null>>
}

const BrandSetting = ({ brandList, setCurStep, setSelectedBrand }: BranSettingProps) => {
  const { control } = useFormContext()
  const [brandName] = useWatch({
    control,
    name: ['brand'],
  })

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
        {brandList?.map((brand: BrandType) => (
          <Styled.Brand
            key={`brand-item-${brand.id}`}
            onClick={() => {
              setSelectedBrand(brand)
              setCurStep(2)
            }}
            isActive={brand.name === brandName}
          >
            <Styled.BrandImageContainer isActive={brand.name === brandName}>
              <Image src={brand.menuImage} alt={brand.name} width={80} height={80} />
            </Styled.BrandImageContainer>
            <Styled.BrandInfo isActive={brand.name === brandName}>
              <h3 className="title">{brand.name}</h3>
              <p className="funding-count">지난 펀딩 횟수: {brand.orderCnt}회</p>
            </Styled.BrandInfo>
          </Styled.Brand>
        ))}
      </Styled.SettingCardBody>
    </Styled.SettingCard>
  )
}

export default BrandSetting
