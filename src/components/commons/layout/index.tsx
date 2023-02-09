import React from 'react'
import styled from '@emotion/styled'
import Navbar from './navbar/Navbar'
import Footer from './footer/Footer'
import { color } from '@/src/commons/styles/styles'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <Container>
      <Navbar />
      <BodyContainer>{children}</BodyContainer>
      <Footer />
    </Container>
  )
}

export default Layout

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  max-width: 1240px;
  width: 100%;
  margin: auto;
  margin-top: 50px;
`

const BodyContainer = styled.div`
  width: 100%;
  border: 5px solid ${color.$point};
`
