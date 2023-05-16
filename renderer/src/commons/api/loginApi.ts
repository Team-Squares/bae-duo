import { apiInstance } from '.'

interface UserParam {
  name: string
  password: string
}

export const login = (id: string, password: string) => {
  return apiInstance.post(`/user`, { name: id, password })
}

export const addUser = (param: UserParam) => {
  return apiInstance.post('/user/add', param)
}
