import React, { useEffect, useState, useLayoutEffect } from 'react'
import * as Styled from '../../FundingDetail.style'
import { colorPalette } from '../../../../../commons/styles/color'
import { useMutation, useQueryClient } from 'react-query'
import Button from '../../../../commons/button/Button'
import Input from '../../../../commons/input/Input'
import AttendantMenu from './AttendantMenu'
import { AttendantInfoType } from '../../FundingDetail.types'
import { putAttendant, postAttendant } from '@/src/commons/api/progressFundingApi'

const AttendantInfo = ({ ...props }) => {
  const { data, funding } = props
  const queryClient = useQueryClient()
  // 임시 사용자 정보, description은 메뉴에서 받아오는 정보?
  const [attendantId, setAttendantId] = useState()
  const [attendantData, setAttendantData] = useState([])
  const [menu, setMenu] = useState({
    id: 67,
    userName: '하이루',
    menuName: '',
    menuPrice: '',
    menuDesc: 'description',
  })

  // attendantId 판별
  useLayoutEffect(() => {
    if (!attendantData) return
    // TODO menu.id 는 user.id 를 context에서 받아와서 사용해야 하는데 아직 로그인이 구현 안 되어 있으므로 보류
    const _filtered: any = attendantData.filter((data: { userId: number }) => data.userId === menu.id)[0]
    if (!_filtered) return
    setAttendantId(_filtered.id)
  }, [attendantData])

  useLayoutEffect(() => {
    setAttendantData(data)
  }, [data])

  const validationFunc = () => {
    const _menuNum = data.filter((el: { userId: number }) => el.userId === menu.id).length
    const obj = {
      id: attendantId,
      fundingId: funding.id,
      userId: menu.id,
      userName: menu.userName,
      hasPaid: false,
      // id 부분 동적으로 받아야함
      menuInfo: `[{'id': 17,  'menuName': '${menu.menuName}', 'menuPrice': ${menu.menuPrice}, 'description': '${menu.menuDesc}'}]`,
    }

    switch (_menuNum) {
      case 0: {
        console.log('POST')
        PostAttendantMutation.mutate(obj)
        setMenu({ ...menu, menuName: '', menuPrice: '' })
        break
      }
      default: {
        console.log('PUT')
        PutAttendantMutation.mutate(obj)
        setMenu({ ...menu, menuName: '', menuPrice: '' })
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
      setMenu({ ...menu, menuName: '', menuPrice: '' })
      // PutFundingMutation.mutate(JSON.stringify(fundingData))

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
      setMenu({ ...menu, menuName: '', menuPrice: '' })
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
        onClick={validationFunc}
      >
        + 메뉴담기
      </Button>

      {data.map((item: AttendantInfoType, idx: number) => (
        <AttendantMenu item={item} key={idx} attendData={data} />
      ))}
      {!data.length && <h2>지금 펀딩에 참여해보세요!</h2>}
    </Styled.AttendantInfo>
  )
}

export default AttendantInfo
