import React from 'react'
import * as Styled from './Detail.style'
import CloseIcon from '@mui/icons-material/Close'

interface InfoProps {
  item: { menuName: string; menuPrice: string }
}

const ParticipantMenu: React.FC<InfoProps> = ({ item }) => {
  return (
    <Styled.MenuContainer>
      <div className="userInfo">
        <div className="img"></div>
        <span className="userName">문동은</span>
      </div>
      <div className="menuGroup">
        <div className="menuName">{item.menuName}</div>
        <div className="menuPrice">가격 : {item.menuPrice}</div>
        <CloseIcon />
      </div>
    </Styled.MenuContainer>
  )
}

export default ParticipantMenu
