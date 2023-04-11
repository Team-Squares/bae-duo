import React, { useEffect, useState } from 'react'
import * as Styled from '../FundingDetail.style'
import { colorPalette } from '../../../../commons/styles/color'
import Button from '../../../commons/button/Button'
import Input from '../../../commons/input/Input'
import AttendantMenu from './AttendantMenu'
import { Menu } from '../FundingDetail.types'

const AttendantInfo = ({ ...props }) => {
  const { data } = props
  const [menu, setMenu] = useState({
    userId: 2,
    menuName: '',
    menuPrice: '',
  })
  const [attendData, setAttendData] = useState<Menu[]>(data)

  useEffect(() => {
    console.log(data)
  }, [])

  const addMenuList = () => {
    if (!menu.menuName || !menu.menuPrice) return
    const _sameUser = attendData.filter((data: Menu) => data.userId === menu.userId)
    if (_sameUser.length) {
      _sameUser[0].menuInfo.push({
        [menu.menuName]: menu.menuPrice,
      })
      setAttendData([
        {
          userId: menu.userId,
          menuInfo: [..._sameUser[0].menuInfo],
        },
        ...attendData.filter(data => data.userId !== menu.userId),
      ])
    } else {
      setAttendData([
        {
          userId: 2,
          menuInfo: [
            {
              [menu.menuName]: menu.menuPrice,
            },
          ],
        },
        ...attendData,
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

  return (
    <Styled.AttendantInfo>
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
        <AttendantMenu item={item} key={idx} setAttendData={setAttendData} attendData={attendData} />
      ))}
    </Styled.AttendantInfo>
  )
}

export default AttendantInfo
