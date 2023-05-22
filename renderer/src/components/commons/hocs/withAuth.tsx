import { userInfoState } from '@/src/commons/atom/user'
import { UserContext } from '@/src/contexts/UserContext'
import { useRouter } from 'next/router'
import { useEffect, ComponentType, useContext } from 'react'
import { useRecoilState } from 'recoil'

export const withAuth =
  <P extends {}>(Component: ComponentType<P>) =>
  (props: P) => {
    // const { user, setUser } = useContext(UserContext)
    const [userInfo] = useRecoilState(userInfoState)
    const router = useRouter()

    useEffect(() => {
      // if (user?.name === '') router.push('/login')
      if (!userInfo?.isLogin) router.push('/login')
    })

    return <Component {...props} />
  }
