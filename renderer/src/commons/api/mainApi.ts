import { apiInstance } from '.'
import { getAllFundingListProps } from '../types/mainApi'
export const getAllFundingList = async () => {
  const res = await apiInstance.get('http://54.159.113.70:3050/funding')
  return res.data as getAllFundingListProps[]
}
//export const deleteFunding = (id: number) => {
//  return apiInstance.delete(`/funding/${id}`)
//}
