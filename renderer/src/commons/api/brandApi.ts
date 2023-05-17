import moment from 'moment'
import { apiInstance } from '.'

export const getBrandList = () => {
  return apiInstance.get('/brands')
}

export const createBrand = (brand: FormData) => {
  return apiInstance.post('/brands', brand, {
    headers: { 'Content-Type': 'multipart/form-data' },
  })
}

export const updateBrand = (brand: FormData) => {
  const brandId = brand.get('id')
  brand.delete('id')
  return apiInstance.put(`/brands/${brandId}`, brand, {
    headers: { 'Content-Type': 'multipart/form-data' },
  })
}

export const deleteBrand = (brandId: number) => {
  return apiInstance.delete(`/brands/${brandId}`)
}
