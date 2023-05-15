import { apiInstance } from '.'

export const getFundingList = () => {
  return apiInstance.get('/funding')
}

export const getFundingItem = (id: number) => {
  return apiInstance.get(`/funding/${id}`)
}

export const putFunding = (body: any) => {
  return apiInstance.put('/funding', body)
}

export const postFunding = (body: any) => {
  return apiInstance.post(`/funding`, body)
}

export const deleteFunding = (id: number) => {
  return apiInstance.delete(`/funding/${id}`)
}
