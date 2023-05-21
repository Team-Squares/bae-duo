import { atom } from 'recoil'

interface UserType {
  id: number
  name: string
  isLogin: boolean
}
export const userInfoState = atom<UserType>({
  key: 'userInfo',
  default: {
    id: 0,
    name: '',
    isLogin: false,
  },
})
