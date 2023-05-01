export interface Menu {
  id: number
  attendantId: number
  userId: number
  count: number
  description: string
  menuName: string
  menuPrice: number
}

export interface AttendantInfoType {
  description: string
  id: number
  userId: number
  userName: string
  fundingId: number
  createdAt: string
  hasPaid: boolean
  menuInfo: Menu[]
}

export interface InfoPropsType {
  item: AttendantInfoType
  attendData: AttendantInfoType[]
}
