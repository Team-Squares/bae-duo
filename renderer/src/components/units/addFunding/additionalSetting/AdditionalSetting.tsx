import * as Styled from '@/src/components/units/addFunding/AddFunding.styles'
import Button from '@/src/components/commons/button/Button'
import Dropdown from '@/src/components/commons/dropdown/Dropdown'
import ImageUploader from '@/src/components/units/imageUploader/ImageUploader'
import { Controller, useFormContext, useWatch } from 'react-hook-form'
import moment from 'moment'
import Input from '@/src/components/commons/input/Input'
import { SetCurStepProps } from '@/src/components/units/addFunding/AddFunding.types'
import { Dispatch, SetStateAction } from 'react'

interface AdditionalSettingProps extends SetCurStepProps {
  setImageFiles: Dispatch<SetStateAction<File[]>>
}

const AdditionalSetting = ({ setCurStep, setImageFiles }: AdditionalSettingProps) => {
  const { register, setValue, control } = useFormContext()
  const [deadline, images] = useWatch({
    control,
    name: ['deadline', 'images'],
  })

  return (
    <Styled.Flex direction="column" gap={8}>
      <Styled.Flex gap={8}>
        {/* 마감시간 설정 */}
        <Styled.SettingCard style={{ flex: 1 }}>
          <Styled.SettingCardHeader style={{ marginBottom: 0 }}>
            <h2>마감시간</h2>
            <Styled.Flex alignItems="center" gap={4}>
              <Controller
                control={control}
                name="deadline"
                render={({ field: { onChange } }) => {
                  return (
                    <>
                      <div style={{ width: 70 }}>
                        <Dropdown
                          defaultValue={moment(deadline).hour()}
                          optionList={[9, 10, 11, 12]}
                          placeholder="시"
                          onSelect={option => {
                            onChange(new Date(moment(deadline).hours(+option).format()))
                          }}
                        />
                      </div>
                      <div>:</div>
                      <div style={{ width: 70 }}>
                        <Dropdown
                          defaultValue={moment(deadline).minute()}
                          optionList={[0, 10, 20, 30, 40, 50]}
                          placeholder="분"
                          onSelect={option => {
                            onChange(new Date(moment(deadline).minutes(+option).format()))
                          }}
                        />
                      </div>
                    </>
                  )
                }}
              />
            </Styled.Flex>
          </Styled.SettingCardHeader>
        </Styled.SettingCard>

        {/* 최소금액 설정 */}
        <Styled.SettingCard style={{ flex: 1 }}>
          <Styled.SettingCardHeader style={{ marginBottom: 0 }}>
            <h2>최소금액</h2>
            <Controller
              control={control}
              name="minPrice"
              render={({ field: { onChange, value } }) => {
                return (
                  <Input
                    value={value}
                    size="sm"
                    onChange={e => {
                      onChange(+e.target.value)
                    }}
                  />
                )
              }}
            />
          </Styled.SettingCardHeader>
        </Styled.SettingCard>
      </Styled.Flex>

      <Styled.SettingCard style={{ flex: 1 }}>
        <Styled.SettingCardHeader style={{ marginBottom: 0 }}>
          <h2>최소인원</h2>
          <Controller
            control={control}
            name="minMember"
            render={({ field: { onChange, value } }) => {
              return (
                <Input
                  size="sm"
                  value={value}
                  onChange={e => {
                    onChange(+e.target.value)
                  }}
                />
              )
            }}
          />
        </Styled.SettingCardHeader>
      </Styled.SettingCard>

      <Styled.SettingCard>
        <Styled.SettingCardHeader>
          <h2>설명</h2>
        </Styled.SettingCardHeader>
        <Styled.SettingCardBody style={{ padding: '0 30px' }}>
          <textarea style={{ width: '100%', height: 120 }} {...register('description')} />
        </Styled.SettingCardBody>
      </Styled.SettingCard>

      {/* 이미지 설정 */}
      <Styled.SettingCard>
        <Styled.SettingCardHeader>
          <h2>메뉴 이미지</h2>
        </Styled.SettingCardHeader>
        <Styled.SettingCardBody style={{ padding: '0 30px' }}>
          <ImageUploader
            imageUrlList={images}
            setImageUrlList={imageUrlList => {
              setValue('images', imageUrlList)
            }}
            onAddImageFiles={imageFiles => {
              setImageFiles(prev => [...prev, ...imageFiles])
            }}
            onRomoveImageFileByIndex={index => {
              setImageFiles(prev => prev.filter((file, i) => i !== index))
            }}
          />
        </Styled.SettingCardBody>
      </Styled.SettingCard>

      <Button style={{ width: '100%', height: 56 }} onClick={() => setCurStep(3)}>
        다음
      </Button>
    </Styled.Flex>
  )
}

export default AdditionalSetting
