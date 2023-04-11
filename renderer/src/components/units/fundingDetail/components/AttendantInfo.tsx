import React, { useEffect, useState } from 'react'
import * as Styled from '../FundingDetail.style'
import { colorPalette } from '../../../../commons/styles/color'
import Button from '../../../commons/button/Button'
import Input from '../../../commons/input/Input'
import ParticipantMenu from './AttendantMenu'
import { Menu } from '../FundingDetail.types'

const ParticipantInfo = ({ ...props }) => {
  const { data } = props
  const [menu, setMenu] = useState({
    userId: 2,
    menuName: '',
    menuPrice: '',
  })
  const [attendData, setAttendData] = useState<Menu[]>(data)

  const addMenuList = () => {
    if (!menu.menuName || !menu.menuPrice) return
    if (menu.userId === 2) {
      // 아이디가 이미 존재할때 -> 방법 고민중.!.!.
      let _addMenu = attendData.filter(data => data.userId === 2)
      _addMenu[0].menuInfo.push({
        menuName: menu.menuName,
        menuPrice: menu.menuPrice,
      })

      setAttendData([
        ...attendData.filter(data => data.userId !== 2),
        {
          userId: 2,
          menuInfo: [..._addMenu[0].menuInfo],
        },
      ])
    } else {
      setAttendData([
        ...attendData,
        {
          userId: menu.userId,
          menuInfo: [
            {
              menuName: menu.menuName,
              menuPrice: menu.menuPrice,
            },
          ],
        },
      ])
    }

    setMenu({
      userId: 2,
      menuName: '',
      menuPrice: '',
    })
  }

  const handleChangeData = (e: React.ChangeEvent<HTMLInputElement>, type: string) => {
    switch (type) {
      case 'menu':
        setMenu({ ...menu, menuName: e.target.value })
        break
      case 'price':
        setMenu({ ...menu, menuPrice: e.target.value })
        break
    }
  }

  const handleOnlyNumberKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    let check = /^[0-9]+$/
    if (check.test(e.key)) {
      e.preventDefault()
    }
  }

  return (
    <Styled.ParticipantInfo>
      <div className="title">참여자</div>
      <div className="inputGroup">
        <Input
          placeholder="메뉴를 입력하세요"
          size="md"
          value={menu.menuName}
          onChange={e => handleChangeData(e, 'menu')}
        />
        <Input
          placeholder="가격을 입력하세요"
          size="md"
          value={menu.menuPrice}
          onChange={e => handleChangeData(e, 'price')}
          onKeyDown={e => handleOnlyNumberKey(e)}
        />
      </div>
      <Button
        size="large"
        style={{
          width: '100%',
          backgroundColor: `${colorPalette.gray.gray10}`,
          marginBottom: '32px',
        }}
        onClick={addMenuList}
      >
        + 메뉴담기
      </Button>

      {attendData.map((item, idx) => (
        <ParticipantMenu item={item} key={idx} setAttendData={setAttendData} attendData={attendData} />
      ))}
    </Styled.ParticipantInfo>
  )
}

export default ParticipantInfo
