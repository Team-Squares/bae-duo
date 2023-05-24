import React from 'react'
import * as Styled from './DefaultLayout.styles'
import Navbar from '@/src/components/commons/navbar/Navbar'
import Footer from '@/src/components/commons/footer/Footer'
import { useToast } from '@/src/commons/hooks/useToast'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { toastArray } from '@/src/commons/atom/toast'
import Link from 'next/link'
import { userInfoState } from '@/src/commons/atom/user'

type Props = {
  children: React.ReactNode
  isNav?: boolean
  title?: string
}

const DefaultLayout = ({ children, isNav = true, title }: Props) => {
  const [userInfo, setUserInfo] = useRecoilState(userInfoState)
  const { ToastArea } = useToast()
  const [toastQueue] = useRecoilState(toastArray)
  const setToastQueue = useSetRecoilState(toastArray)

  const checkLogin = () => {
    const isLogin = localStorage.getItem('isLogin')
    if (!isLogin) return
    const user = JSON.parse(localStorage.getItem('user') || '')
    console.log(user)
    setUserInfo({
      name: user?.name,
      id: user?.id,
      isLogin: true,
    })
  }

  React.useEffect(() => {
    checkLogin()
  }, [])

  return (
    <Styled.Main>
      <ToastArea toastQueue={toastQueue} setToastQueue={setToastQueue} />
      {isNav && <Navbar />}
      <Styled.Container>
        {title && <Styled.HeaderLayout>{title}</Styled.HeaderLayout>}
        {children}
      </Styled.Container>
      <Link href="/1">
        {' '}
        <Footer />
      </Link>
    </Styled.Main>
  )
}

export default DefaultLayout
