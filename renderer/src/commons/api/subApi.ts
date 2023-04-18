import { apiInstance } from '.'
import { dataProps } from '../types/subTypes'

export const getFundingList = () => {
  return apiInstance.get('/funding')
}

export const getSubDataList = () => {
  return apiInstance.get('/domain')
}
export const getSubDataDetail = (id: number) => {
  return apiInstance.get(`/domain/${id}`)
}

export const getAttendant = () => {
  return apiInstance.get('/attendant')
}

export const postSubData = (body: dataProps) => {
  return apiInstance.post(`/domain`, body)
}

export const deleteSubData = (id: number) => {
  return apiInstance.delete(`/domain/${id}`)
}
