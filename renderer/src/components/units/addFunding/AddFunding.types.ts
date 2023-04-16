import { Dispatch, SetStateAction } from 'react'

export interface AddFundingProps {
  starter: string
  brand: string
  minPrice: number
  minMember: number
  deadline: Date
  description: string
  images: string[]
}

export interface SetCurStepProps {
  setCurStep: Dispatch<SetStateAction<number>>
}
