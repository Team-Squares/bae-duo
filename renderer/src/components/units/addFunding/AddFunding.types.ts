import { Dispatch, SetStateAction } from 'react'

export interface FundingType {
  starter: string
  brand: string
  minPrice: number
  minMember: number
  deadline: Date
  description: string
  images: string[]
}

export interface BrandType {
  id: number
  createdId: number
  name: string
  orderType: number
  orderCnt: number
  menuImage: string
  defaultDeadLine: string | null
  defaultMinPrice: number | null
}

export interface SetCurStepProps {
  setCurStep: Dispatch<SetStateAction<number>>
}
