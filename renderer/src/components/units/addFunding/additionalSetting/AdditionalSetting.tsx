import React, { useEffect, useState } from 'react'
import * as Styled from '@/src/components/units/addFunding/AddFunding.styles'
import Button from '@/src/components/commons/button/Button'
import Dropdown from '@/src/components/commons/dropdown/Dropdown'
import ImageUploader from '@/src/components/units/imageUploader/ImageUploader'
import { Controller, useFormContext, useWatch } from 'react-hook-form'
import moment from 'moment'
import Input from '@/src/components/commons/input/Input'
import { SetCurStepProps } from '@/src/components/units/addFunding/AddFunding.types'

const AdditionalSetting = ({ setCurStep }: SetCurStepProps) => {
  const [deadlineHour, setDeadlineHour] = useState<number>()
  const [deadlineMinute, setDeadlineMinute] = useState<number>()

  const { register, setValue, control } = useFormContext()
  const [deadline, images] = useWatch({
    control,
    name: ['deadline', 'images'],
  })

  useEffect(() => {
    const hours = deadline.getHours()
    const minutes = deadline.getMinutes()

    setDeadlineHour(hours)
    setDeadlineMinute(minutes)
  }, [deadline])

  useEffect(() => {
    if (deadlineHour === null || deadlineHour === undefined) return
    setValue('deadline', new Date(moment(deadline).hours(deadlineHour).format()))
  }, [deadline, setValue])

  useEffect(() => {
    if (deadlineMinute === null || deadlineMinute === undefined) return
    setValue('deadline', new Date(moment(deadline).minutes(deadlineMinute).format()))
  }, [deadline, setValue])

  return (
    <Styled.Flex direction="column" gap={8}>
      <Styled.Flex gap={8}>
        {/* 마감시간 설정 */}
        <Styled.SettingCard style={{ flex: 1 }}>
          <Styled.SettingCardHeader style={{ marginBottom: 0 }}>
            <h2>마감시간</h2>
            <Styled.Flex alignItems="center" gap={4}>
              <div style={{ width: 70 }}>
                <Dropdown
                  defaultValue={deadlineHour}
                  optionList={[9, 10, 11, 12]}
                  placeholder="시"
                  onSelect={option => setDeadlineHour(+option)}
                />
              </div>
              <div>:</div>
              <div style={{ width: 70 }}>
                <Dropdown
                  defaultValue={deadlineMinute}
                  optionList={[0, 10, 20, 30, 40, 50]}
                  placeholder="분"
                  onSelect={option => setDeadlineMinute(+option)}
                />
              </div>
            </Styled.Flex>
          </Styled.SettingCardHeader>
        </Styled.SettingCard>

        {/* 목표금액 설정 */}
        <Styled.SettingCard style={{ flex: 1 }}>
          <Styled.SettingCardHeader style={{ marginBottom: 0 }}>
            <h2>목표금액</h2>
            <input
              type="number"
              {...register('minPrice', {
                valueAsNumber: true,
              })}
            />
            {/* <Controller
              name="minPrice"
              render={({ field: { onChange } }) => {
                return (
                  <Input
                    size="sm"
                    onChange={e => {
                      onChange(e.target.value)
                    }}
                  />
                )
              }}
            /> */}
          </Styled.SettingCardHeader>
        </Styled.SettingCard>
      </Styled.Flex>

      <Styled.SettingCard style={{ flex: 1 }}>
        <Styled.SettingCardHeader style={{ marginBottom: 0 }}>
          <h2>최소인원</h2>
          <input
            type="number"
            {...register('minMember', {
              valueAsNumber: true,
            })}
          />
          {/* <Controller
              name="minPrice"
              render={({ field: { onChange } }) => {
                return (
                  <Input
                    size="sm"
                    onChange={e => {
                      onChange(e.target.value)
                    }}
                  />
                )
              }}
            /> */}
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
            images={images}
            onChangeImages={images => {
              setValue('images', images)
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
