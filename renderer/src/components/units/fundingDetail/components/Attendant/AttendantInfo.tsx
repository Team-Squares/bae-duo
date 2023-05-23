import React, { useEffect, useState, useLayoutEffect } from 'react'
import * as Styled from '../../FundingDetail.style'
import { colorPalette } from '../../../../../commons/styles/color'
import { useMutation, useQueryClient } from 'react-query'
import Button from '../../../../commons/button/Button'
import Input from '../../../../commons/input/Input'
import AttendantMenu from './AttendantMenu'
import { AttendantInfoType } from '../../FundingDetail.types'
import { putAttendant, postAttendant } from '@/src/commons/api/progressFundingApi'
import { userInfoState } from '@/src/commons/atom/user'
import { useRecoilState } from 'recoil'

const AttendantInfo = ({ ...props }) => {
  const { data, funding } = props
  const [userInfo] = useRecoilState(userInfoState)

  const queryClient = useQueryClient()
  const [menu, setMenu] = useState({
    menuName: '',
    menuPrice: 0,
    menuDesc: '',
    menuCount: 0,
  })

  const cleanMenu = () =>
    setMenu({
      menuName: '',
      menuPrice: 0,
      menuDesc: '',
      menuCount: 0,
    })

  const validationFunc = () => {
    const __menu = data.filter((el: { userId: number }) => el.userId === userInfo.id)[0]
    const _menuNum = data.filter((el: { userId: number }) => el.userId === userInfo.id).length
    const postObj = {
      fundingId: funding.id,
      userId: userInfo.id,
      userName: userInfo.name,
      menuInfo: `[{'menuName': '${menu.menuName}', 'menuPrice': ${menu.menuPrice}, 'description': ' ${menu.menuDesc}', 'count':${menu.menuCount}}]`,
    }
    const putObj = {
      id: __menu?.id || -1,
      fundingId: funding.id,
      userId: userInfo.id,
      userName: userInfo.name,
      menuInfo: `[{'menuName': '${menu.menuName}', 'menuPrice': ${menu.menuPrice}, 'description': ' ${menu.menuDesc}', 'count':${menu.menuCount}}]`,
    }

    switch (_menuNum) {
      case 0: {
        console.log('POST')
        PostAttendantMutation.mutate(postObj)
        cleanMenu()
        break
      }
      default: {
        console.log('PUT')
        PutAttendantMutation.mutate(putObj)
        cleanMenu()
        break
      }
    }
  }
  // put attendant data
  const PutAttendantMutation = useMutation(putAttendant, {
    onError: error => {
      console.log('error', error)
    },
    onSuccess: variables => {
      console.log('success', variables)
      return queryClient.invalidateQueries('getAllAttendantList')
    },
  })

  // post attendant data
  const PostAttendantMutation = useMutation(postAttendant, {
    onError: error => {
      console.log('error', error)
    },
    onSuccess: async variables => {
      console.log('success', variables)
      // PutFundingMutation.mutate(JSON.stringify(fundingData))
      await queryClient.invalidateQueries('getAllFundingList')
      return queryClient.invalidateQueries('getAllAttendantList')
    },
  })

  const handleChangeData = (e: React.ChangeEvent<HTMLInputElement>, type: string) => {
    switch (type) {
      case 'menu':
        setMenu({ ...menu, menuName: e.target.value })
        break
      case 'price':
        setMenu({ ...menu, menuPrice: Number(e.target.value) })
        break
      case 'count':
        setMenu({ ...menu, menuCount: Number(e.target.value) })
        break
      case 'description':
        setMenu({ ...menu, menuDesc: e.target.value })
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
          value={menu.menuPrice > 0 ? menu.menuPrice : ''}
          onChange={e => handleChangeData(e, 'price')}
        />
        <Input
          placeholder="수량을 입력하세요"
          size="md"
          value={menu.menuCount > 0 ? menu.menuCount : ''}
          onChange={e => handleChangeData(e, 'count')}
        />
        <Input
          placeholder="설명을 입력하세요"
          size="md"
          value={menu.menuDesc}
          onChange={e => handleChangeData(e, 'description')}
        />
      </div>
      <Button
        size="large"
        style={{
          width: '100%',
          backgroundColor: `${colorPalette.gray.gray10}`,
          marginBottom: '32px',
        }}
        onClick={validationFunc}
      >
        + 메뉴담기
      </Button>

      {data.map((item: AttendantInfoType, idx: number) => (
        <AttendantMenu item={item} key={idx} attendData={data} user={userInfo} />
      ))}
      {!data.length && <h2>지금 펀딩에 참여해보세요!</h2>}
    </Styled.AttendantInfo>
  )
}

export default AttendantInfo
