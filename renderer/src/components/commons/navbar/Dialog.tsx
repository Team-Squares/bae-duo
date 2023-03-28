import useRoutePage from '@/src/commons/hooks/useRoutePage'
import * as Styled from './Dialog.styles'
import Image from 'next/image'
import { useState } from 'react'

import IconDarkmode from '@/public/icons/darkmode.svg'
import IconHistory from '@/public/icons/history.svg'
import IconLogin from '@/public/icons/login.svg'
import IconPerson from '@/public/icons/person.svg'
import IconSetting from '@/public/icons/setting.svg'

import tempProfileImg from '@/public/images/profile_medium.svg'

const Dialog = ({ ...props }) => {
  const { routePage } = useRoutePage()
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
            <Styled.Title>문동은</Styled.Title>
            <Styled.Mail>dev@squares.ai</Styled.Mail>
          </Styled.Info>
        </Styled.Profile>
        <Styled.Row>
          <Styled.MenuIcon>
            <Image src={IconDarkmode} alt="none"></Image>
          </Styled.MenuIcon>
          <Styled.MenuTitle>다크 모드</Styled.MenuTitle>
        </Styled.Row>
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
        <Styled.Row>
          <Styled.MenuIcon>
            <Image src={IconLogin} alt="none"></Image>
          </Styled.MenuIcon>
          <Styled.MenuTitle>로그아웃</Styled.MenuTitle>
        </Styled.Row>
      </Styled.Dialog>
    </Styled.DialogLayer>
  )
}

export default Dialog
