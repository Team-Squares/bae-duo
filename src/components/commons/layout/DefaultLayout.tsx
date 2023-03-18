import React from 'react'
import * as Styled from './DefaultLayout.styles'
import Navbar from '@/src/components/commons/navbar/Navbar'
import Footer from '@/src/components/commons/footer/Footer'
import { useToast } from '@/src/commons/hooks/useToast'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { toastArray } from '@/src/commons/atom/atom'

type Props = {
  children: React.ReactNode
  isNav?: boolean
  title?: string
}

const DefaultLayout = ({ children, isNav = true, title }: Props) => {
  const { ToastArea } = useToast()
  const [toastQueue] = useRecoilState(toastArray)
  const setToastQueue = useSetRecoilState(toastArray)

  return (
    <Styled.Main>
      <ToastArea toastQueue={toastQueue} setToastQueue={setToastQueue} />
      {isNav && <Navbar />}
      <Styled.Container>
        {/* {title && <Styled.HeaderLayout>{title}</Styled.HeaderLayout>} */}
        {children}
      </Styled.Container>
      <Footer />
    </Styled.Main>
  )
}

export default DefaultLayout
