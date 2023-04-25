import React, { ChangeEvent, Dispatch, SetStateAction, useEffect, useRef } from 'react'
import * as AddFundingStyled from '@/src/components/units/addFunding/AddFunding.styles'
import * as Styled from '@/src/components/units/addFunding/addBrandModal/AddBrandModal.styles'
import AddIcon from '@mui/icons-material/Add'
import { color } from '@/src/commons/styles/color'
import Modal from '@/src/components/commons/modal/Modal'
import Input from '@/src/components/commons/input/Input'
import { Controller, useForm, useWatch } from 'react-hook-form'
import moment from 'moment'
import { BrandType } from '../AddFunding.types'
import Dropdown from '@/src/components/commons/dropdown/Dropdown'
import Image from 'next/image'

import { useMutation, useQueryClient } from 'react-query'
import { createBrand } from '@/src/commons/api/addFundingApi'

interface AddBrandModalProps {
  brand?: BrandType
  isEditingMode?: boolean
  setShowModal: Dispatch<SetStateAction<boolean>>
}

type AddBrandType = Partial<BrandType>

const AddBrandModal = ({ brand, isEditingMode = false, setShowModal }: AddBrandModalProps) => {
  const queryClient = useQueryClient()
  const imgInputRef = useRef<HTMLInputElement | null>(null)
  const { setValue, handleSubmit, control } = useForm<AddBrandType>({
    defaultValues: {
      createdId: brand?.createdId || 1,
      name: brand?.name || '',
      orderType: brand?.orderType || 1,
      menuImage: brand?.menuImage || '',
      defaultDeadLine: brand?.defaultDeadLine || new Date(moment().hours(11).minutes(0).seconds(0).format()), // 기본 11:00 세팅
      defaultMinPrice: brand?.defaultMinPrice || 0,
    },
  })

  const [orderType, menuImage, defaultDeadLine] = useWatch({
    control,
    name: ['orderType', 'menuImage', 'defaultDeadLine'],
  })

  const addBrandMutation = useMutation(createBrand, {
    onSuccess: () => {
      setShowModal(false)
      return queryClient.invalidateQueries('getBrandListKey')
    },
    onError: error => {
      console.dir(error)
    },
  })

  const handleChangeImage = (e: ChangeEvent) => {
    const targetFiles = (e.target as HTMLInputElement).files as FileList
    handleSetImageList(targetFiles)
  }

  const handleSetImageList = (fileList: FileList) => {
    const targetFilesArray = Array.from(fileList)
    const selectedFiles: string[] = targetFilesArray.map(file => URL.createObjectURL(file))
    setValue('menuImage', selectedFiles[0])
  }

  const handleAddBrand = (data: AddBrandType) => {
    addBrandMutation.mutate(data)
  }

  return (
    <Modal
      id="1"
      title="브랜드 추가"
      width={'400px'}
      height={'500px'}
      left={'50%'}
      top={'50%'}
      mode="submit"
      submitBtnContent="추가"
      cancelBtnContent="취소"
      submitFunc={() => {
        if (isEditingMode) {
        } else {
          handleSubmit(handleAddBrand)()
        }
      }}
      closeModal={() => setShowModal(false)}
    >
      <Styled.AddBrandContainer>
        <Styled.SettingItem>
          <Styled.SettingItemTitle>
            {!menuImage && (
              <Styled.AddImageContainer
                onClick={() => {
                  if (!imgInputRef.current) return
                  imgInputRef.current.click()
                }}
              >
                <AddIcon sx={{ fill: color.border.default }} />
                <p>대표이미지</p>
                <input
                  ref={imgInputRef}
                  type="file"
                  accept="image/jpg, image/jpeg, image/png"
                  onChange={handleChangeImage}
                />
              </Styled.AddImageContainer>
            )}
            {menuImage && (
              <Styled.ImagePreview>
                <Image width={80} height={80} src={menuImage} alt="브랜드 대표 이미지" />
                <Styled.ImageRemoveIcon
                  onClick={() => {
                    setValue('menuImage', '')
                  }}
                />
              </Styled.ImagePreview>
            )}
          </Styled.SettingItemTitle>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
            <Styled.SettingItemBody>
              <AddFundingStyled.Flex alignItems="center" gap={4}>
                <input
                  type="radio"
                  id="orderType1"
                  value={1}
                  checked={orderType === 1}
                  onChange={e => setValue('orderType', +e.target.value)}
                />
                <label htmlFor="orderType1">배달</label>
              </AddFundingStyled.Flex>
              <AddFundingStyled.Flex alignItems="center" gap={4}>
                <input
                  type="radio"
                  id="orderType2"
                  value={2}
                  checked={orderType === 2}
                  onChange={e => setValue('orderType', +e.target.value)}
                />
                <label htmlFor="orderType2">포장</label>
              </AddFundingStyled.Flex>
            </Styled.SettingItemBody>
            <Controller
              control={control}
              name="name"
              rules={{
                required: true,
              }}
              render={({ field: { onChange, value } }) => {
                return (
                  <Input
                    size="sm"
                    value={value}
                    placeholder="브랜드명 (필수)"
                    style={{ width: '100%' }}
                    onChange={e => onChange(e.target.value)}
                  />
                )
              }}
            />
          </div>
        </Styled.SettingItem>
        <Styled.SettingItem>
          <Styled.SettingItemTitle>기본 마감시간</Styled.SettingItemTitle>
          <Styled.SettingItemBody>
            <Controller
              control={control}
              name="defaultDeadLine"
              render={({ field: { onChange, value } }) => {
                return (
                  <>
                    <div style={{ width: 70 }}>
                      <Dropdown
                        defaultValue={moment(value).hour()}
                        optionList={[9, 10, 11, 12]}
                        placeholder="시"
                        onSelect={option => {
                          onChange(new Date(moment(value).hours(+option).format()))
                        }}
                      />
                    </div>
                    <div>:</div>
                    <div style={{ width: 70 }}>
                      <Dropdown
                        defaultValue={moment(value).minute()}
                        optionList={[0, 10, 20, 30, 40, 50]}
                        placeholder="분"
                        onSelect={option => {
                          onChange(new Date(moment(value).minutes(+option).format()))
                        }}
                      />
                    </div>
                  </>
                )
              }}
            />
          </Styled.SettingItemBody>
        </Styled.SettingItem>
        <Styled.SettingItem>
          <Styled.SettingItemTitle>기본 최소금액</Styled.SettingItemTitle>
          <Styled.SettingItemBody>
            <Controller
              control={control}
              name="defaultMinPrice"
              render={({ field: { onChange } }) => {
                return (
                  <Input
                    size="sm"
                    placeholder="선택사항"
                    style={{ width: '100%' }}
                    onChange={e => {
                      onChange(+e.target.value)
                    }}
                  />
                )
              }}
            />
          </Styled.SettingItemBody>
        </Styled.SettingItem>
        <Styled.SettingItem>
          <Styled.SettingItemTitle>기본 최소인원</Styled.SettingItemTitle>
          <Styled.SettingItemBody>
            <Input size="sm" placeholder="선택사항" style={{ width: '100%' }} />
          </Styled.SettingItemBody>
        </Styled.SettingItem>
      </Styled.AddBrandContainer>
    </Modal>
  )
}

export default AddBrandModal
