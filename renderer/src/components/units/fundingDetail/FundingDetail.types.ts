export interface MenuInfo {
  menuName: string
  menuPrice: string
}

export interface Menu {
  userId: number
  menuInfo: MenuInfo[]
}

export interface InfoProps {
  item: Menu
  setAttendData: React.Dispatch<React.SetStateAction<Menu[]>>
  attendData: Menu[]
}
