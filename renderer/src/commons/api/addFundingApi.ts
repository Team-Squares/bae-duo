import moment from 'moment'
import { apiInstance } from '.'
import { BrandType, FundingType } from '@/src/components/units/addFunding/AddFunding.types'

export const createFunding = (funding: FundingType) => {
  return apiInstance.post(`/funding`, {
    ...funding,
    deadline: moment(funding.deadline).format('YYYY-MM-DD HH:mm:ss'),
  })
}

export const getBrandList = () => {
  return apiInstance.get('/brands')
}

export const createBrand = (brand: Partial<BrandType>) => {
  return apiInstance.post('/brands', {
    ...brand,
    defaultDeadLine: moment(brand.defaultDeadLine).format('YYYY-MM-DD HH:mm:ss'),
  })
}

export const updateBrand = (brand: Partial<BrandType>) => {
  return apiInstance.put('/brands', {
    ...brand,
    defaultDeadLine: moment(brand.defaultDeadLine).format('YYYY-MM-DD HH:mm:ss'),
  })
}

export const deleteBrand = (brandId: number) => {
  return apiInstance.delete(`/brands/${brandId}`)
}
