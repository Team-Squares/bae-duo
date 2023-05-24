import useRoutePage from '@/src/commons/hooks/useRoutePage'
import * as Styled from './Dialog.styles'
import Image from 'next/image'

import IconDarkmode from '@/public/icons/darkmode.svg'
import IconHistory from '@/public/icons/history.svg'
import IconLogin from '@/public/icons/login.svg'
import IconPerson from '@/public/icons/person.svg'
import IconSetting from '@/public/icons/setting.svg'

import tempProfileImg from '@/public/images/profile_medium.svg'
import { Switch } from '@mui/material'
import { styled } from '@mui/material/styles'
import css from 'styled-jsx/css'
import { useContext } from 'react'
import { UserContext } from '@/src/contexts/UserContext'
import { useRecoilState, useResetRecoilState } from 'recoil'
import { userInfoState } from '@/src/commons/atom/user'

const Dialog = ({ ...props }) => {
  const { routePage } = useRoutePage()
  // const { user, setUser } = useContext(UserContext)
  const [userInfo] = useRecoilState(userInfoState)
  const userLogout = useResetRecoilState(userInfoState)

  const logout = () => {
    localStorage.removeItem('isLogin')
    localStorage.removeItem('user')
    userLogout()
  }

  const { setToggleDialog } = props
  return (
    <Styled.DialogLayer
      onClick={() => {
        setToggleDialog((prev: any) => !prev)
      }}
    >
      <Styled.Dialog
        onClick={e => {
          e.stopPropagation()
        }}
      >
        <Styled.Profile>
          <Image src={tempProfileImg} alt="none"></Image>
          <Styled.Info>
            <Styled.Title>{userInfo.name}</Styled.Title>
            <Styled.Mail>dev@squares.ai</Styled.Mail>
          </Styled.Info>
        </Styled.Profile>
        <Styled.Row>
          <Styled.MenuIcon>
            <Image src={IconDarkmode} alt="none"></Image>
          </Styled.MenuIcon>
          <Styled.MenuTitle>
            <Styled.Text>다크 모드</Styled.Text>
            <AntSwitch />
          </Styled.MenuTitle>
        </Styled.Row>
        <Styled.Line />
        <Styled.Row>
          <Styled.MenuIcon>
            <Image src={IconPerson} alt="none"></Image>
          </Styled.MenuIcon>
          <Styled.MenuTitle>개인 정보 수정</Styled.MenuTitle>
        </Styled.Row>
        <Styled.Row>
          <Styled.MenuIcon>
            <Image src={IconHistory} alt="none"></Image>
          </Styled.MenuIcon>
          <Styled.MenuTitle>최근 펀딩 보기</Styled.MenuTitle>
        </Styled.Row>
        <Styled.Row>
          <Styled.MenuIcon>
            <Image src={IconSetting} alt="none"></Image>
          </Styled.MenuIcon>
          <Styled.MenuTitle>설정</Styled.MenuTitle>
        </Styled.Row>
        <Styled.Row
          onClick={() => {
            // setUser && setUser({ name: '', id: 0 })
            if (userInfo.isLogin) logout()
            routePage('/login')
          }}
        >
          <Styled.MenuIcon>
            <Image src={IconLogin} alt="none"></Image>
          </Styled.MenuIcon>
          {/* <Styled.MenuTitle>{user?.name && user.name !== '' ? '로그아웃' : '로그인'}</Styled.MenuTitle> */}
          <Styled.MenuTitle>{userInfo?.name && userInfo.name !== '' ? '로그아웃' : '로그인'}</Styled.MenuTitle>
        </Styled.Row>
      </Styled.Dialog>
    </Styled.DialogLayer>
  )
}

export default Dialog

const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 28,
  height: 16,
  padding: 0,
  display: 'flex',
  '&:active': {
    '& .MuiSwitch-thumb': {
      width: 15,
      color: '#fff',
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
      transform: 'translateX(9px)',
    },
  },
  '& .MuiSwitch-switchBase': {
    padding: 2,
    '&.Mui-checked': {
      transform: 'translateX(12px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#eee' : '#999',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
    color: '#fff',
    width: 12,
    height: 12,
    borderRadius: 6,
    transition: theme.transitions.create(['width'], {
      duration: 200,
    }),
  },
  '& .MuiSwitch-track': {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : '#999',
    boxSizing: 'border-box',
  },
}))
