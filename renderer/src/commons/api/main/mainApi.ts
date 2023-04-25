import { apiInstance } from '..'
import { getAllFundingListProps } from '../../types/mainApi'
export const getAllFundingList = async () => {
  const res = await apiInstance.get('/funding')
  return res.data as getAllFundingListProps[]
}
