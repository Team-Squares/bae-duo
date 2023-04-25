import moment from 'moment'
import { apiInstance } from '.'
import { FundingType } from '@/src/components/units/addFunding/AddFunding.types'

export const createFunding = (funding: FundingType) => {
  return apiInstance.post(`/funding`, {
    ...funding,
    deadline: moment(funding.deadline).format('YYYY-MM-DD HH:mm:ss'),
  })
}

export const getBrandList = () => {
  return apiInstance.get('/brands')
}
