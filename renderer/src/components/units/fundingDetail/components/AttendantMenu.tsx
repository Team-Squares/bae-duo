import React, { useEffect, useState } from 'react'
import * as Styled from '../FundingDetail.style'
import CloseIcon from '@mui/icons-material/Close'
import { Menu, InfoProps } from '../FundingDetail.types'

const ParticipantMenu: React.FC<InfoProps> = ({ item, setAttendData, attendData }) => {
  const removeMenu = (idx: number) => {
    if (item.menuInfo.length === 1) {
      console.log('LENGTH !')
      const _filtered = attendData.filter(data => item.userId !== data.userId)
      setAttendData(_filtered)
    } else {
      // TODO 여러 메뉴 있을때 하나만 삭제하기
    }
  }

  return (
    <Styled.MenuContainer>
      <div className="userInfo">
        <div className="img"></div>
        <span className="userName">{item.userId}</span>
      </div>
      <div className="menuGroup">
        {item.menuInfo.map((ele, idx) => (
          <div className="menuItem" key={idx}>
            <div className="menuItemInfo">
              <div className="menuName">{ele.menuName}</div>
              <div className="menuPrice">가격 : {ele.menuPrice}원</div>
            </div>
            <CloseIcon onClick={() => removeMenu(idx)} />
          </div>
        ))}
      </div>
    </Styled.MenuContainer>
  )
}

export default ParticipantMenu
