import React, { useEffect, useState } from 'react'
import * as Styled from '../../FundingDetail.style'
import CloseIcon from '@mui/icons-material/Close'
import { InfoPropsType, Menu } from '../../FundingDetail.types'
import { deleteAttendant } from '@/src/commons/api/progressFundingApi'

const AttendantMenu: React.FC<InfoPropsType> = ({ item, attendData }) => {
  const [OriginUserId, setOriginUserId] = useState(53) // 임시 사용자 정보

  const removeMenu = (ele: Menu) => {
    // 사용자 메뉴 수에 따라 (1개 : 전체 삭제, 2개 이상: 해당 아이디의 menu info만 삭제)
    const _menuNum = attendData.filter(data => data.id === ele.attendantId).length
    switch (_menuNum) {
      case 1: {
        deleteAttendant(ele.attendantId)
          .then(res => console.log(res.data))
          .catch(e => console.log(e))
        break
      }
      default: {
        console.log('menu info delete 하는 api')
        break
      }
    }
  }

  return (
    <Styled.MenuContainer>
      <div className="userInfo">
        <div className="img"></div>
        <span className="userName">{item.userName}</span>
      </div>
      <div className="menuGroup">
        {item.menuInfo.map((ele, idx) => (
          <div className="menuItem" key={idx}>
            <div className="menuItemInfo">
              <div className="menuName">
                {ele.menuName}- id: {ele.id}
              </div>
              <div className="menuDesc">{ele.description}</div>
              <div className="menuPrice">가격 : {ele.menuPrice}원</div>
            </div>
            {item.userId === OriginUserId && <CloseIcon onClick={() => removeMenu(ele)} />}
          </div>
        ))}
      </div>
    </Styled.MenuContainer>
  )
}

export default AttendantMenu
