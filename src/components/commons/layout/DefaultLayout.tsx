import React from 'react'
import * as Styled from './DefaultLayout.styles'
import Navbar from '@/src/components/commons/navbar/Navbar'
import Footer from '@/src/components/commons/footer/Footer'

type Props = {
  children: React.ReactNode
  isNav?: boolean
  title?: string
}

const DefaultLayout = ({ children, isNav = true, title }: Props) => {
  return (
    <Styled.Main>
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
