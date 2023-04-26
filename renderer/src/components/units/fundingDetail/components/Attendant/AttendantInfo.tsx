import React, { useEffect, useState } from 'react'
import * as Styled from '../../FundingDetail.style'
import { colorPalette } from '../../../../../commons/styles/color'
import Button from '../../../../commons/button/Button'
import Input from '../../../../commons/input/Input'
import AttendantMenu from './AttendantMenu'
import { AttendantInfo } from '../../FundingDetail.types'
import { putAttendant, postAttendant } from '@/src/commons/api/progressFundingApi'

const AttendantInfo = ({ ...props }) => {
  const { data } = props
  // 임시 사용자 정보, description은 메뉴에서 받아오는 정보?
  const [menu, setMenu] = useState({
    id: 51,
    userName: 'front team',
    menuName: '',
    menuPrice: '',
    menuDesc: 'description',
  })
  const [attendData, setAttendData] = useState<AttendantInfo[]>(data)

  const handlePutData = () => {
    // 메뉴 등록시 (처음 등록(0): post, 두번째 등록(default): put)
    const _menuNum = data.filter((el: { userId: number }) => el.userId === menu.id).length
    switch (_menuNum) {
      case 0: {
        const obj = {
          id: 53,
          fundingId: 1,
          userId: menu.id,
          userName: menu.userName,
          hasPaid: false,
          menuInfo: `[{'id': 52,  'menuName': '${menu.menuName}', 'menuPrice': ${menu.menuPrice}, 'description': '${menu.menuDesc}'}]`,
        }
        postAttendant(obj)
          .then(res => {
            console.log('postAttendant:', res.data)
            setAttendData([...attendData, res.data])
            setMenu({ ...menu, menuName: '', menuPrice: '' })
          })
          .catch(e => console.log(e))

        break
      }
      default: {
        const obj = {
          id: 53,
          fundingId: 1,
          userId: menu.id,
          userName: menu.userName,
          hasPaid: false,
          menuInfo: `[{'id': 12,  'menuName': '${menu.menuName}', 'menuPrice': ${menu.menuPrice}}]`,
        }
        putAttendant(obj)
          .then(res => {
            console.log(res.data)
            setMenu({ ...menu, menuName: '', menuPrice: '' })
          })
          .catch(e => console.log(e))
        break
      }
    }
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
        onClick={handlePutData}
      >
        + 메뉴담기
      </Button>

      {data?.map((item: AttendantInfo, idx: number) => (
        <AttendantMenu item={item} key={idx} attendData={data} />
      ))}
    </Styled.AttendantInfo>
  )
}

export default AttendantInfo
