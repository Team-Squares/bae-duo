import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import Image from 'next/image'
import styled from '@emotion/styled'
import { useFormContext, useWatch } from 'react-hook-form'
import * as Styled from '@/src/components/units/addFunding/AddFunding.styles'
import { BrandType, SetCurStepProps } from '../AddFunding.types'
import AddIcon from '@mui/icons-material/Add'
import { color, colorPalette } from '@/src/commons/styles/color'
import { typography } from '@/src/commons/styles/typography'
import Modal from '@/src/components/commons/modal/Modal'
import Input from '@/src/components/commons/input/Input'

interface BranSettingProps extends SetCurStepProps {
  brandList: BrandType[]
  setSelectedBrand: Dispatch<SetStateAction<BrandType | null>>
}

const BrandSetting = ({ brandList, setCurStep, setSelectedBrand }: BranSettingProps) => {
  const [addingBrandModal, setAddingBrandModal] = useState(false)
  const [viewBrandList, setViewBrandList] = useState<BrandType[]>()
  const [filtered, setFiltered] = useState<'all' | 'delivery' | 'toGo'>('all')
  const { control } = useFormContext()
  const [brandName] = useWatch({
    control,
    name: ['brand'],
  })

  useEffect(() => {
    setViewBrandList(brandList)
    setFiltered('all')
  }, [brandList])

  return (
    <>
      <Styled.SettingCard>
        <Styled.SettingCardHeader>
          <div style={{ display: 'flex', gap: 20 }}>
            <h2>브랜드 선택</h2>
            <AddBrandButton onClick={() => setAddingBrandModal(true)}>
              <AddIcon sx={{ width: 16, height: 16 }} />
              <span>브랜드 추가</span>
            </AddBrandButton>
          </div>

          <ul>
            <li
              className={filtered === 'all' ? 'active' : ''}
              onClick={() => {
                setViewBrandList(brandList)
                setFiltered('all')
              }}
            >
              전체
            </li>
            <li
              className={filtered === 'delivery' ? 'active' : ''}
              onClick={() => {
                setViewBrandList(brandList.filter(brand => brand.orderType === 1))
                setFiltered('delivery')
              }}
            >
              배달
            </li>
            <li
              className={filtered === 'toGo' ? 'active' : ''}
              onClick={() => {
                setViewBrandList(brandList.filter(brand => brand.orderType === 2))
                setFiltered('toGo')
              }}
            >
              포장
            </li>
          </ul>
        </Styled.SettingCardHeader>
        <Styled.SettingCardBody>
          {viewBrandList?.map((brand: BrandType) => (
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
                <h3 className="title">
                  [{brand.orderType === 1 ? '배달' : '포장'}] {brand.name}
                </h3>
                <p className="funding-count">지난 펀딩 횟수: {brand.orderCnt}회</p>
              </Styled.BrandInfo>
            </Styled.Brand>
          ))}
          {(!viewBrandList || viewBrandList.length === 0) && <EmptyList>브랜드가 없어요 🥲</EmptyList>}
        </Styled.SettingCardBody>
      </Styled.SettingCard>

      {addingBrandModal && (
        <Modal
          id="1"
          title="브랜드 추가"
          width={'400px'}
          height={'500px'}
          left={'50%'}
          top={'50%'}
          mode="submit"
          closeModal={() => setAddingBrandModal(false)}
        >
          <AddBrandContainer>
            <SettingItem>
              <SettingItemTitle>
                <div
                  style={{
                    width: 80,
                    height: 80,
                    border: `2px dashed ${color.border.default}`,
                    borderRadius: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                  }}
                >
                  <AddIcon sx={{ fill: color.border.default }} />
                  <p>대표이미지</p>
                </div>
              </SettingItemTitle>
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
                <SettingItemBody>
                  <Styled.Flex alignItems="center" gap={4}>
                    <input type="radio" id="orderType1" name="orderType" />
                    <label htmlFor="orderType1">배달</label>
                  </Styled.Flex>
                  <Styled.Flex alignItems="center" gap={4}>
                    <input type="radio" id="orderType2" name="orderType" />
                    <label htmlFor="orderType2">포장</label>
                  </Styled.Flex>
                </SettingItemBody>
                <Input size="sm" placeholder="브랜드명" style={{ width: '100%' }} />
              </div>
            </SettingItem>
            <SettingItem>
              <SettingItemTitle>기본 마감시간</SettingItemTitle>
              <SettingItemBody>
                <Input size="sm" style={{ width: '100%' }} />
              </SettingItemBody>
            </SettingItem>
            <SettingItem>
              <SettingItemTitle>기본 최소금액</SettingItemTitle>
              <SettingItemBody>
                <Input size="sm" style={{ width: '100%' }} />
              </SettingItemBody>
            </SettingItem>
            <SettingItem>
              <SettingItemTitle>기본 최소인원</SettingItemTitle>
              <SettingItemBody>
                <Input size="sm" style={{ width: '100%' }} />
              </SettingItemBody>
            </SettingItem>
          </AddBrandContainer>
        </Modal>
      )}
    </>
  )
}

export default BrandSetting

const AddBrandButton = styled.button`
  ${typography.caption.medium}
  background-color: ${colorPalette.gray.gray80};
  padding: 4px 16px 4px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border-radius: 100px;

  span {
    color: ${color.text.white};
  }
  svg {
    fill: ${color.text.white};
  }
`

const AddBrandContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;

  p {
    ${typography.caption.light}
    color: ${color.text.gray};
    position: absolute;
    bottom: 8px;
  }
`

const SettingItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 20px;
  ${typography.body2.medium}
`
const SettingItemTitle = styled.div`
  width: 84px;
  color: ${color.text.gray};
`
const SettingItemBody = styled.div`
  flex: 1;
  display: flex;
  gap: 16px;
`

const EmptyList = styled(Styled.FlexCenter)`
  height: 200px;
  color: ${color.text.gray};
  ${typography.body2.medium}
`
