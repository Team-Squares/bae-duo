import useRoutePage from '@/src/commons/hooks/useRoutePage'
import * as Styled from './Navbar.styles'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'

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
import { useInterval } from '@/src/commons/hooks/useInterval'
import { useToast } from '@/src/commons/hooks/useToast'
import { useSetRecoilState } from 'recoil'
import { toastArray } from '@/src/commons/atom/atom'

const HOURS = 23
const MINUTES = 56

const Navbar = () => {
  const router = useRouter()
  const [toggleDialog, setToggleDialog] = useState(false)
  const { pushToastQueue } = useToast()
  const setToastQueue = useSetRecoilState(toastArray)

  const sendMessage = () => {
    const title = '배달해듀오'
    const body = '펀딩 마감 10분전입니다!'
    const options = { body }

    const notif = new Notification(title, options)
  }

  const notiHandler = async (hours: number, minutes: number) => {
    const result = await Notification.requestPermission()
    const today = new Date()
    pushToastQueue('success', '[success]', setToastQueue, 3000)
    pushToastQueue('warning', '[warning]', setToastQueue, 3000)
    pushToastQueue('fail', '[fail]', setToastQueue, 3000)
    // 추후 알림시간을 지정받아서 설정하기
    if (today.getHours() === HOURS && today.getMinutes() === MINUTES) {
      if (result === 'granted') {
        sendMessage()
        pushToastQueue('success', '펀딩 마감직전!', setToastQueue, 3000)
      }
    }
  }

  // ? 1분마다 시간체크
  useInterval(notiHandler, 60 * 1000)

  return (
    <Styled.Header>
      <Styled.Navbar>
        <Styled.LeftSection>
          <Styled.Logo onClick={() => router.push('/')}>BAEDUO</Styled.Logo>
          <Styled.HistoryButtons>
            <div
              onClick={() => {
                router.back()
              }}
            >
              <ArrowBackIosNewIcon />
            </div>
            <div>
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
              <Image src={IconAlarm} alt="none" onClick={notiHandler}></Image>
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
