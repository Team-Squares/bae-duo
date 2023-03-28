import { useEffect, ComponentType } from 'react'

export const withAuth =
  <P extends {}>(Component: ComponentType<P>) =>
  (props: P) => {
    useEffect(() => {
      console.log('withAuth HOC !')
    }, [])

    return <Component {...props} />
  }
