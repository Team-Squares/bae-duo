import React, { useEffect, useState } from 'react'
import * as Styled from './Detail.style'
import { colorPalette } from '../../../commons/styles/color'
import Button from '../../commons/button/Button'
import Input from '../../commons/input/Input'
import ParticipantMenu from './ParticipantMenu'

interface List {
  menuName: string
  menuPrice: string
}

const ParticipantInfo = () => {
  const [data, setData] = useState({
    menuName: '',
    menuPrice: '',
  })
  const [menuList, setMenuList] = useState<List[]>([])

  const onChangeInfo = () => {
    setMenuList([data, ...menuList])
  }
  return (
    <Styled.ParticipantInfo>
      <div className="title">참여자</div>
      <div className="inputGroup">
        <Input
          placeholder="메뉴를 입력하세요"
          size="sm"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setData({ ...data, menuName: e.target.value })}
        />
        <Input
          placeholder="가격을 입력하세요"
          size="sm"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setData({ ...data, menuPrice: e.target.value })}
        />
      </div>
      <Button
        size="large"
        style={{
          width: '100%',
          backgroundColor: `${colorPalette.gray.gray10}`,
          marginBottom: '32px',
        }}
        onClick={onChangeInfo}
      >
        + 메뉴담기
      </Button>

      {menuList.map((item, idx) => (
        <ParticipantMenu item={item} key={idx} />
      ))}
    </Styled.ParticipantInfo>
  )
}

export default ParticipantInfo
