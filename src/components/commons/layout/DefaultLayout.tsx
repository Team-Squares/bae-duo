import React from 'react'
import * as Styled from './DefaultLayout.styles'

import styled from '@emotion/styled'
import Navbar from '@/src/components/commons/navbar/Navbar'
import Footer from '@/src/components/commons/footer/Footer'
import { color } from '@/src/commons/styles/styles'

type Props = {
  children: React.ReactNode
  isNav?: boolean
}
//default layout 은 전체중앙정렬이 되어야하고 바디가 1040이 되어야 한다.
const DefaultLayout = ({ children, isNav = true }: Props) => {
  return (
    <Styled.Main>
      {isNav && <Navbar />}
      <Styled.Container>{children} </Styled.Container>
      <Footer />
    </Styled.Main>
  )
}

export default DefaultLayout
