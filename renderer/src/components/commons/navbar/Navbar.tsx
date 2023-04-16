import useRoutePage from '@/src/commons/hooks/useRoutePage'
import * as Styled from './Navbar.styles'
import Image from 'next/image'
import { useState } from 'react'

import IconAlarm from '@/public/icons/alarm.svg'
import IconBack from '@/public/icons/back.svg'
import IconDarkmode from '@/public/icons/darkmode.svg'
import IconHistory from '@/public/icons/history.svg'
import IconLogin from '@/public/icons/login.svg'
import IconMagnifier from '@/public/icons/magnifier.svg'
import IconMessage from '@/public/icons/message.svg'
import IconPerson from '@/public/icons/person.svg'
import IconSetting from '@/public/icons/setting.svg'
import IconArrowBottom from '@/public/icons/arrowBottom.svg'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

import tempProfileImg from '@/public/images/profile_medium.svg'

import Dialog from '@/src/components/commons/navbar/Dialog'
import { useRouter } from 'next/router'

const Navbar = () => {
  const { routePage } = useRoutePage()
  const router = useRouter()

  const [toggleDialog, setToggleDialog] = useState(false)
  return (
    <Styled.Header>
      <Styled.Navbar>
        <Styled.LeftSection>
          <Styled.Logo>BAEDUO</Styled.Logo>
          <Styled.HistoryButtons>
            <div
              onClick={() => {
                router.back()
              }}
            >
              <ArrowBackIosNewIcon />
            </div>
            <div
              onClick={() => {
                console.log('앞으로가기')
                // router.forward()
                // ? router 내 forward 기능이 제대로 동작하지 않음
                window.history.forward()
              }}
            >
              <ArrowForwardIosIcon />
            </div>
          </Styled.HistoryButtons>
        </Styled.LeftSection>
        <Styled.RightSection>
          <Styled.SearchBox>
            <Styled.SearchInput placeholder="펀딩을 검색해보세요!"></Styled.SearchInput>
            <Styled.SearchButton>
              <Image src={IconMagnifier} alt="none"></Image>
            </Styled.SearchButton>
          </Styled.SearchBox>

          <Styled.MenuBox>
            {/* <Styled.Menu onClick={() => routePage('/')}>Home</Styled.Menu> */}
            {/* <Styled.Menu onClick={() => router.back()}>
              <Image src={IconBack} alt="none"></Image>
            </Styled.Menu> */}
            <Styled.Menu>
              <Image src={IconMessage} alt="none"></Image>
            </Styled.Menu>
            <Styled.Menu>
              <Image src={IconAlarm} alt="none"></Image>
            </Styled.Menu>
          </Styled.MenuBox>
          <Styled.Profile onClick={() => setToggleDialog(!toggleDialog)}>
            <Image src={tempProfileImg} alt="none"></Image>
            <Image src={IconArrowBottom} alt="none"></Image>
            {toggleDialog && <Dialog setToggleDialog={setToggleDialog} />}
          </Styled.Profile>
        </Styled.RightSection>
      </Styled.Navbar>
    </Styled.Header>
  )
}

export default Navbar
