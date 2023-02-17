import DefaultLayout from '@/src/components/commons/layout/DefaultLayout'
import Home from '@/src/components/units/home/Home'

const HomePage = () => {
  return (
    <DefaultLayout title={'안녕 난 헤더얌'}>
      <Home />
    </DefaultLayout>
  )
}

export default HomePage
