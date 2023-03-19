import { apiInstance } from '.'
import { dataProps } from '../types/subTypes'

export const getSubDataList = () => {
  return apiInstance.get('/domain')
}
export const getSubDataDetail = (id: number) => {
  return apiInstance.get(`/domain/${id}`)
}

export const postSubData = (body: dataProps) => {
  return apiInstance.post(`/domain`, body)
}

export const deleteSubData = (id: number) => {
  return apiInstance.delete(`/domain/${id}`)
}
