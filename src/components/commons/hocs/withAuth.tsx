import { useEffect, ComponentType } from 'react'

export const withAuth =
  <P extends {}>(Component: ComponentType<P>) =>
  (props: P) => {
    useEffect(() => {
      //ㅎㅇ
      alert('withAuth HOC !')
    }, [])

    return <Component {...props} />
  }
