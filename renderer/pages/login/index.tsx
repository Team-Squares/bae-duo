import React from 'react'
import DefaultLayout from '@/src/components/commons/layout/DefaultLayout'
import Login from '@/src/components/units/user/login/Login'

const LoginPage = () => {
  return (
    <DefaultLayout isNav={true}>
      <Login />
    </DefaultLayout>
  )
}

export default LoginPage
