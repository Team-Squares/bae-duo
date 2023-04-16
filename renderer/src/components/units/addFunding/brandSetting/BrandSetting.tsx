import React, { useEffect, useState } from 'react'
import hansotImg from '@/public/images/hansot.svg'
import noBrandImg from '@/public/images/nobrand.svg'
import defaultImg from '@/public/images/meal.svg'
import * as Styled from '@/src/components/units/addFunding/AddFunding.styles'
import Image from 'next/image'
import CloseIcon from '@mui/icons-material/Close'

interface BrandSettingProps {
  brand: string
  setBrand: any
  setCurStep: any
}

const BrandSetting = ({ brand, setBrand, setCurStep }: BrandSettingProps) => {
  const [openDialog, setOpenDialog] = useState(false)
  const [brandName, setBrandName] = useState('')

  const BRAND_LIST_ARRAY = [
    { title: '한솥 도시락 (을지로4가점)', img: hansotImg, count: 4 },
    { title: '노브랜드 버거 (을지로점)', img: noBrandImg, count: 2 },
  ]

  const [brandList, setBrandList] = useState([...BRAND_LIST_ARRAY])

  useEffect(() => {
    setBrandName('')
  }, [openDialog])

  return (
    <>
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
          {brandList.map((el, i): any => {
            return (
              <Styled.Brand
                onClick={() => {
                  setBrand('한솥 도시락 (을지로4가점)')
                  setCurStep(2)
                }}
                isActive={brand === el.title}
              >
                <Styled.BrandImageContainer isActive={brand === el.title}>
                  <Image src={el.img} alt={el.title} />
                </Styled.BrandImageContainer>
                <Styled.BrandInfo isActive={brand === el.title}>
                  <h3 className="title">{el.title}</h3>
                  <p className="funding-count">지난 펀딩 횟수: {el.count}회</p>
                </Styled.BrandInfo>
              </Styled.Brand>
            )
          })}
        </Styled.SettingCardBody>
        <Styled.SettingCaryFooter>
          <Styled.BrandAddButton
            onClick={() => {
              setOpenDialog(true)
            }}
          >
            펀딩 추가하기
          </Styled.BrandAddButton>
        </Styled.SettingCaryFooter>
      </Styled.SettingCard>

      {openDialog && (
        <Styled.DialogLayer onClick={() => setOpenDialog(false)}>
          <Styled.DialogBody
            onClick={(e: any) => {
              e.stopPropagation()
            }}
          >
            <Styled.CloseButton
              onClick={() => {
                setOpenDialog(false)
              }}
            >
              <CloseIcon />
            </Styled.CloseButton>
            <Styled.Row>
              <span>브랜드명</span>
              <input
                type="text"
                value={brandName}
                onChange={(e: any) => {
                  setBrandName(e.target.value)
                }}
              />
            </Styled.Row>

            <Styled.Submit
              onClick={() => {
                if (brandName) {
                  let _brandList = [...brandList]
                  let obj = { title: brandName, img: defaultImg, count: 0 }
                  _brandList.push(obj)
                  setBrandList([..._brandList])
                  setOpenDialog(false)
                } else {
                  alert('브랜드명 입력은 필수입니다.')
                }
              }}
            >
              브랜드 추가하기
            </Styled.Submit>
          </Styled.DialogBody>
        </Styled.DialogLayer>
      )}
    </>
  )
}

export default BrandSetting
