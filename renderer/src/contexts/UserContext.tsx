import React, { createContext, Dispatch, ReactElement, SetStateAction, useState } from 'react'

interface UserContextValue {
  user?: User
  setUser?: Dispatch<SetStateAction<User>>
}

interface User {
  name?: string
  account?: string
}

export const UserContextProvider = ({ children }: { children: JSX.Element[] }) => {
  const [user, setUser] = useState<User>({ name: 'Woo', account: 'woo@gmail.com' })
  const userValue = {
    user,
    setUser,
  }
  return <UserContext.Provider value={userValue}>{children}</UserContext.Provider>
}

export const UserContext = createContext<UserContextValue>({})
