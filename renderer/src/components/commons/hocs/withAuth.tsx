import { UserContext } from '@/src/contexts/UserContext'
import { useEffect, ComponentType, useContext } from 'react'

export const withAuth =
  <P extends {}>(Component: ComponentType<P>) =>
  (props: P) => {
    const { user, setUser } = useContext(UserContext)

    useEffect(() => {
      console.log(user)
    }, [])

    return <Component {...props} />
  }
