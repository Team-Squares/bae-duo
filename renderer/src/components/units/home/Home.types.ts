export interface FundingListType {
  starter: string
  brand: string
  total_price: number
  cur_price: number
  deadline: string
  min_member: number
  cur_member: number
  status: number
  createdAt: string
  menuImages: { id: number; url: string }[] | null | undefined
}
