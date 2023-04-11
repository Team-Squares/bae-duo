interface MenuInfo {
  [x: string]: string
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
