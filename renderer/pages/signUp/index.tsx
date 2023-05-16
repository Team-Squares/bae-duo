import SignUp from '@/src/components/units/user/signUp/SignUp'
import DefaultLayout from '@/src/components/commons/layout/DefaultLayout'

const signUpPage = () => {
  return (
    <DefaultLayout isNav={false}>
      <SignUp />
    </DefaultLayout>
  )
}

export default signUpPage
