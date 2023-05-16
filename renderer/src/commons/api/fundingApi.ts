import { FundingType } from '@/src/components/units/addFunding/AddFunding.types'
import moment from 'moment'
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

export const createFunding = (funding: FundingType) => {
  return apiInstance.post(`/funding`, {
    ...funding,
    deadline: moment(funding.deadline).format('YYYY-MM-DD HH:mm:ss'),
  })
}
