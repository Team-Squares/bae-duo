import DefaultLayout from '@/src/components/commons/layout/DefaultLayout'
import Home from '@/src/components/units/home/Home'

const HomePage = () => {
  return (
    <DefaultLayout title={'펀딩 목록'}>
      <Home />
    </DefaultLayout>
  )
}

export default HomePage
