import styled from '@emotion/styled'
import Button from '@/src/components/commons/button/Button'
import { Controller, useForm } from 'react-hook-form'
import { addUser } from '@/src/commons/api/loginApi'
import { useRouter } from 'next/router'
import Input from '@/src/components/commons/input/Input'

interface FormData {
  id: string
  password: string
}

const SignUp = () => {
  const router = useRouter()
  const { control, handleSubmit } = useForm({
    mode: 'onChange',
    defaultValues: {
      id: '',
      password: '',
    },
  })

  const onSubmit = async (params: FormData) => {
    if (params.id === '' || params.password === '') return alert('뭐 빼먹은거 없어?')

    try {
      const { data } = await addUser({ name: params.id, password: params.password })
      alert(`반가워요 ${data.name} 님 미안하지만 다시 로그인 해주세요...`)
      router.push('/login')
    } catch (error) {
      console.log(error)
      alert('서버가 이상하네요...')
    }
  }

  return (
    <Container>
      <div>
        {/* <input placeholder="아이디를 입력해주세요." {...register('id')} />
        <input placeholder="비밀번호를 입력해주세요." {...register('password')} /> */}
        <Controller
          control={control}
          name="id"
          render={({ field }: { field: any }) => <Input {...field} placeholder="id를 입력해라" />}
        />
        <Controller
          control={control}
          name="password"
          render={({ field }: { field: any }) => <Input {...field} placeholder="password를 입력해라" />}
        />
      </div>
      <div>
        <Button onClick={handleSubmit(onSubmit)} variant="outlined" style={{ width: '100%', marginBottom: 20 }}>
          회원 가입
        </Button>
      </div>
    </Container>
  )
}

export default SignUp

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 300px;
  height: 300px;
`
