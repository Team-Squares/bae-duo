import { atom } from 'recoil'

export const test = atom({
  key: 'test',
  default: 7,
})

export const toastArray = atom({
  key: 'toastArray',
  default: [],
})
