import React, { useRef } from 'react'
import * as Styled from '@/src/components/units/addFunding/AddFunding.styles'
import Input from '@/src/components/commons/input/Input'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import Button from '@/src/components/commons/button/Button'

interface AdditionalSettingProps {
  setCurStep: any
}

const AdditionalSetting = ({ setCurStep }: AdditionalSettingProps) => {
  const imgInputRef = useRef<HTMLInputElement | null>(null)

  return (
    <Styled.Flex direction="column" gap={8}>
      <Styled.Flex gap={8}>
        {/* 마감시간 설정 */}
        <Styled.SettingCard style={{ flex: 1 }}>
          <Styled.SettingCardHeader style={{ marginBottom: 0 }}>
            <h2>마감시간</h2>
            <input type="text" />
          </Styled.SettingCardHeader>
        </Styled.SettingCard>

        {/* 목표금액 설정 */}
        <Styled.SettingCard style={{ flex: 1 }}>
          <Styled.SettingCardHeader style={{ marginBottom: 0 }}>
            <h2>목표금액</h2>
            <input type="text" />
          </Styled.SettingCardHeader>
        </Styled.SettingCard>
      </Styled.Flex>

      <Styled.SettingCard>
        <Styled.SettingCardHeader>
          <h2>설명</h2>
        </Styled.SettingCardHeader>
        <Styled.SettingCardBody style={{ padding: '0 30px' }}>
          <textarea style={{ width: '100%', height: 120 }} />
        </Styled.SettingCardBody>
      </Styled.SettingCard>

      {/* 이미지 설정 */}
      <Styled.SettingCard>
        <Styled.SettingCardHeader>
          <h2>메뉴 이미지</h2>
          <AddCircleOutlineIcon
            sx={{
              cursor: 'pointer',
            }}
            onClick={() => {
              if (!imgInputRef.current) return
              imgInputRef.current.click()
            }}
          />
          <input
            ref={imgInputRef}
            type="file"
            accept="image/jpg, image/jpeg, image/png"
            multiple
            style={{ display: 'none' }}
          />
        </Styled.SettingCardHeader>
      </Styled.SettingCard>

      <Button style={{ width: '100%', height: 56 }} onClick={() => setCurStep(3)}>
        다음
      </Button>
    </Styled.Flex>
  )
}

export default AdditionalSetting
