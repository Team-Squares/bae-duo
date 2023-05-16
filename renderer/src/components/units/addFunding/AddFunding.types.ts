import { Dispatch, SetStateAction } from 'react'

export interface FundingType {
  starter: string
  brand: string
  brandId: number
  minPrice: number
  minMember: number
  deadline: Date
  description: string
  images: string[]
}

export interface BrandType {
  id?: number
  createdUserId: number
  name: string
  orderType: number
  orderCnt?: number
  brandImage?: string
  defaultDeadLine: Date
  defaultMinPrice?: number | null
  defaultMinMember?: number | null
}

export interface SetCurStepProps {
  setCurStep: Dispatch<SetStateAction<number>>
}
