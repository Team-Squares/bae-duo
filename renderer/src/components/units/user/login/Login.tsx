import { login } from '@/src/commons/api/loginApi'
import Button from '@/src/components/commons/button/Button'
import Input from '@/src/components/commons/input/Input'

import React, { useContext } from 'react'
import * as Styled from './Login.style'
import { UserContext } from '@/src/contexts/UserContext'
import { useRouter } from 'next/router'

const Login = () => {
  const { user, setUser } = useContext(UserContext)
  const router = useRouter()

  const onClickLogin = async () => {
    // console.log(await login('3'))
    console.log(user)
    setUser && setUser({ name: 'woo', account: 'woo@squaers.ai' })
    router.push('/')
  }
  return (
    <Styled.LoginContainer>
      <div>
        <Input placeholder="아이디를 입력해주세요." size="lg" />
        <Input placeholder="비밀번호를 입력해주세요." size="lg" />
      </div>
      <div>
        <Button variant="outlined" style={{ width: '100%', marginBottom: 20 }}>
          회원 가입
        </Button>
        <Button onClick={() => onClickLogin()} style={{ width: '100%' }}>
          로그인
        </Button>
      </div>
    </Styled.LoginContainer>
  )
}

export default Login
