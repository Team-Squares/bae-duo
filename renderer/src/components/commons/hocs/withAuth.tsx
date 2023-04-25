import { UserContext } from '@/src/contexts/UserContext'
import { useRouter } from 'next/router'
import { useEffect, ComponentType, useContext } from 'react'

export const withAuth =
  <P extends {}>(Component: ComponentType<P>) =>
  (props: P) => {
    const { user, setUser } = useContext(UserContext)
    const router = useRouter()

    useEffect(() => {
      if (user?.name === '') router.push('/login')
    })

    return <Component {...props} />
  }
