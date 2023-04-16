import { FundingType } from '@/src/components/units/addFunding/AddFunding.types'
import moment from 'moment'
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

export const getBrandList = () => {
  return apiInstance.get('/brands')
}

export const postSubData = (body: dataProps) => {
  return apiInstance.post(`/domain`, body)
}

export const createFunding = (funding: FundingType) => {
  return apiInstance.post(`/funding`, {
    ...funding,
    deadline: moment(funding.deadline).format('YYYY-MM-DD HH:mm:ss'),
  })
}

export const deleteSubData = (id: number) => {
  return apiInstance.delete(`/domain/${id}`)
}
