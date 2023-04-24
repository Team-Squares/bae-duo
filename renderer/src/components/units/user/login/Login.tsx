import Button from '@/src/components/commons/button/Button'
import Input from '@/src/components/commons/input/Input'

import React from 'react'
import * as Styled from './Login.style'

const Login = () => {
  return (
    <Styled.LoginContainer>
      <Input placeholder="아이디를 입력해주세요." />
      <Input placeholder="비밀번호를 입력해주세요." />
      <Button variant="outlined">회원 가입</Button>
      <Button>로그인</Button>
    </Styled.LoginContainer>
  )
}

export default Login
