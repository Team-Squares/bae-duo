import { login } from '@/src/commons/api/loginApi'
import Button from '@/src/components/commons/button/Button'
import Input from '@/src/components/commons/input/Input'

import React, { useContext, useEffect } from 'react'
import * as Styled from './Login.style'
import { UserContext } from '@/src/contexts/UserContext'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { useRecoilState } from 'recoil'
import { userInfoState } from '@/src/commons/atom/user'

interface FormData {
  id: string
  password: string
}

const Login = () => {
  const { register, handleSubmit } = useForm({
    mode: 'onChange',
    defaultValues: {
      id: '',
      password: '',
    },
  })

  // const { user, setUser } = useContext(UserContext)
  const [userInfo, setUserInfo] = useRecoilState(userInfoState)
  const router = useRouter()

  const onSubmit = async (param: FormData) => {
    try {
      const { data } = await login(param.id, param.password)
      console.log(data)

      // setUser &&
      //   setUser({
      //     name: data?.name,
      //     id: data?.id,
      //   })
      setUserInfo({
        name: data?.name,
        id: data?.id,
        isLogin: true,
      })
      router.push('/')
    } catch (error) {
      console.log(error)
      alert('로그인 실패')
    }
  }

  return (
    <Styled.LoginContainer>
      <div>
        <input placeholder="아이디를 입력해주세요." {...register('id')} />
        <input placeholder="비밀번호를 입력해주세요." {...register('password')} />
      </div>
      <div>
        <Button variant="outlined" onClick={() => router.push('/signUp')} style={{ width: '100%', marginBottom: 20 }}>
          회원 가입
        </Button>
        <Button onClick={handleSubmit(onSubmit)} style={{ width: '100%' }}>
          로그인
        </Button>
      </div>
    </Styled.LoginContainer>
  )
}

export default Login
