import { login } from '@/src/commons/api/loginApi'
import Button from '@/src/components/commons/button/Button'
import Input from '@/src/components/commons/input/Input'

import React, { useContext, useEffect } from 'react'
import * as Styled from './Login.style'
import { UserContext } from '@/src/contexts/UserContext'
import { useRouter } from 'next/router'
import { Controller, useForm } from 'react-hook-form'
import { useRecoilState } from 'recoil'
import { userInfoState } from '@/src/commons/atom/user'

interface FormData {
  id: string
  password: string
}

const Login = () => {
  const { control, handleSubmit } = useForm({
    mode: 'onChange',
    defaultValues: {
      id: '',
      password: '',
    },
  })

  const [userInfo, setUserInfo] = useRecoilState(userInfoState)
  const router = useRouter()

  const onSubmit = async (param: FormData) => {
    if (param.id === '' || param.password === '') return alert('뭐 빼먹은거 없음?')
    try {
      const { data } = await login(param.id, param.password)
      setUserInfo({
        name: data?.name,
        id: data?.id,
        isLogin: true,
      })
      localStorage.setItem('isLogin', 'true')
      localStorage.setItem('user', JSON.stringify({ name: data?.name, id: data?.id }))
      router.push('/')
    } catch (error) {
      console.log(error)
      alert('정보가 이상함 다시 입력 바람')
    }
  }

  return (
    <Styled.LoginContainer>
      <div>
        {/* <input placeholder="아이디를 입력해주세요." {...register('id')} />
        <input placeholder="비밀번호를 입력해주세요." {...register('password')} /> */}
        <Controller
          control={control}
          name="id"
          render={({ field }: { field: any }) => <Input {...field} placeholder="id를 입력해주세요" />}
        />
        <Controller
          control={control}
          name="password"
          render={({ field }: { field: any }) => <Input {...field} placeholder="password를 입력해주세요" />}
        />
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
