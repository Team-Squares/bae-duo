import React, { useEffect, useRef, useState } from 'react'
import * as Styled from '@/src/components/units/addFunding/AddFunding.styles'
import Input from '@/src/components/commons/input/Input'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import Button from '@/src/components/commons/button/Button'
import Dropdown from '@/src/components/commons/dropdown/Dropdown'
import ImageUploader from '../../imageUploader/ImageUploader'

interface AdditionalSettingProps {
  // deadline: string
  totalPrice: number
  description: string
  images: string[]
  setDeadline: any
  setTotalPrice: any
  setDescription: any
  setImages: any
  setCurStep: any
}

const AdditionalSetting = ({
  // deadline,
  totalPrice,
  description,
  images,
  setDeadline,
  setTotalPrice,
  setDescription,
  setImages,
  setCurStep,
}: AdditionalSettingProps) => {
  const [deadlineHour, setDeadlineHour] = useState<number>()
  const [deadlineMinute, setDeadlineMinute] = useState<number>()

  useEffect(() => {
    if (!deadlineHour || !deadlineMinute) return

    const today = new Date()
    setDeadline(new Date(today.getFullYear(), today.getMonth(), today.getDate(), deadlineHour, deadlineMinute))
  }, [deadlineHour, deadlineMinute])

  return (
    <Styled.Flex direction="column" gap={8}>
      <Styled.Flex gap={8}>
        {/* 마감시간 설정 */}
        <Styled.SettingCard style={{ flex: 1 }}>
          <Styled.SettingCardHeader style={{ marginBottom: 0 }}>
            <h2>마감시간</h2>
            {/* <input type="text" onChange={e => setDeadline(e.target.value)} /> */}
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
            <input type="number" onChange={e => setTotalPrice(e.target.value)} />
          </Styled.SettingCardHeader>
        </Styled.SettingCard>
      </Styled.Flex>

      <Styled.SettingCard>
        <Styled.SettingCardHeader>
          <h2>설명</h2>
        </Styled.SettingCardHeader>
        <Styled.SettingCardBody style={{ padding: '0 30px' }}>
          <textarea style={{ width: '100%', height: 120 }} onChange={e => setDescription(e.target.value)} />
        </Styled.SettingCardBody>
      </Styled.SettingCard>

      {/* 이미지 설정 */}
      <Styled.SettingCard>
        <Styled.SettingCardHeader>
          <h2>메뉴 이미지</h2>
        </Styled.SettingCardHeader>
        <Styled.SettingCardBody style={{ padding: '0 30px' }}>
          <ImageUploader images={images} setImages={setImages} />
        </Styled.SettingCardBody>
      </Styled.SettingCard>

      <Button style={{ width: '100%', height: 56 }} onClick={() => setCurStep(3)}>
        다음
      </Button>
    </Styled.Flex>
  )
}

export default AdditionalSetting
