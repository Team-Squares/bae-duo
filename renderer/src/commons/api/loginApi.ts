import { apiInstance } from '.'

export const login = (id: string) => {
  return apiInstance.get(`/user/${id}`)
}
