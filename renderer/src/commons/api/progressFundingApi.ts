import { apiInstance } from '.'

export const getAttendant = () => {
  return apiInstance.get('/attendant')
}

export const putAttendant = (body: any) => {
  return apiInstance.put(`/attendant`, body)
}

export const postAttendant = (body: any) => {
  return apiInstance.post(`/attendant`, body)
}

export const deleteAttendant = (id: number) => {
  return apiInstance.delete(`/attendant/${id}`)
}

export const postBill = (body: any) => {
  return apiInstance.post(`/bill`, body)
}
