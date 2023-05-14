import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import Image from 'next/image'
import styled from '@emotion/styled'
import { useFormContext, useWatch } from 'react-hook-form'
import * as Styled from '@/src/components/units/addFunding/AddFunding.styles'
import { BrandType, SetCurStepProps } from '../AddFunding.types'
import AddIcon from '@mui/icons-material/Add'
import { color, colorPalette } from '@/src/commons/styles/color'
import { typography } from '@/src/commons/styles/typography'
import AddBrandModal from '../addBrandModal/AddBrandModal'
import DefaultFoodImage from '@/public/images/food.svg'
import Button from '@/src/components/commons/button/Button'
import { useMutation, useQueryClient } from 'react-query'
import { deleteBrand, getBrandList } from '@/src/commons/api/addFundingApi'

interface BranSettingProps extends SetCurStepProps {
  brandList: BrandType[]
  setSelectedBrand: Dispatch<SetStateAction<BrandType | null>>
}

const BrandSetting = ({ brandList, setCurStep, setSelectedBrand }: BranSettingProps) => {
  const queryClient = useQueryClient()
  const [addingBrandModal, setAddingBrandModal] = useState(false)
  const [viewBrandList, setViewBrandList] = useState<BrandType[]>()
  const [filtered, setFiltered] = useState<'all' | 'delivery' | 'toGo'>('all')
  const [modifiedBrand, setModifiedBrand] = useState<BrandType>()
  const { control } = useFormContext()
  const [brandName] = useWatch({
    control,
    name: ['brand'],
  })

  const deleteBrandMutation = useMutation(deleteBrand, {
    onSuccess: () => {
      return queryClient.invalidateQueries('getBrandListKey')
    },
    onError: error => {
      console.dir(error)
    },
    onSettled: () => {
      queryClient.refetchQueries()
    },
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
                <Image src={brand.menuImage || DefaultFoodImage} alt={brand.name} width={80} height={80} />
              </Styled.BrandImageContainer>
              <Styled.BrandInfo isActive={brand.name === brandName}>
                <Styled.Flex justifyContent="space-between">
                  <div>
                    <h3 className="title">
                      [{brand.orderType === 1 ? '배달' : '포장'}] {brand.name}
                    </h3>
                    <p className="funding-count">지난 펀딩 횟수: {brand.orderCnt}회</p>
                  </div>
                  <Buttons className="buttons">
                    <Button
                      size="small"
                      variant="outlined"
                      onClick={e => {
                        e.stopPropagation()
                        setAddingBrandModal(true)
                        setModifiedBrand(brand)
                      }}
                    >
                      수정
                    </Button>
                    <Button
                      size="small"
                      style={{ backgroundColor: colorPalette.red.red40 }}
                      onClick={e => {
                        e.stopPropagation()
                        const message = confirm(`'${brand.name}'을(를) 정말 삭제하실건가요? 🥲`)
                        if (message) {
                          deleteBrandMutation.mutate(brand.id)
                        }
                      }}
                    >
                      삭제
                    </Button>
                  </Buttons>
                </Styled.Flex>
              </Styled.BrandInfo>
            </Styled.Brand>
          ))}
          {(!viewBrandList || viewBrandList.length === 0) && <EmptyList>브랜드가 없어요 🥲</EmptyList>}
        </Styled.SettingCardBody>
      </Styled.SettingCard>

      {/* 브랜드 추가 모달 */}
      {addingBrandModal && (
        <AddBrandModal brand={modifiedBrand} isEditingMode={true} setShowModal={setAddingBrandModal} />
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

const EmptyList = styled(Styled.FlexCenter)`
  height: 200px;
  color: ${color.text.gray};
  ${typography.body2.medium}
`

export const Buttons = styled.div`
  display: flex;
  gap: 4px;
  visibility: hidden;
  opacity: 0;
`
