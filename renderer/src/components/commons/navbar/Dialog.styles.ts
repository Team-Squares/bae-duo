import { color } from '@/src/commons/styles/styles'
import styled from '@emotion/styled'

export const DialogLayer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: transparent;
  z-index: 999;
  cursor: auto;
  transition: 1s;
`

export const Dialog = styled.div`
  position: absolute;
  width: 170px;
  // height: 200px;
  padding: 10px;
  top: 65px;
  right: calc(50% - 520px);
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 4px 10px 13px rgba(0, 0, 0, 0.25);
`

export const Profile = styled.div`
  display: flex;
  align-items: center;
  // justify-content: space-evenly;
  padding: 10px;
  > img {
    margin-right: 10px;
  }
`
export const Info = styled.div`
  display: flex;
  flex-direction: column;
`

export const Title = styled.span`
  font-size: 14px;
  font-weight: 700;
`

export const Mail = styled.span`
  font-size: 12px;
  color: #949494;
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 5px;
  border-radius: 5px;
  cursor: pointer;

  :hover {
    background-color: #e9e9e9;
  }
`

export const MenuIcon = styled.div`
  transform: scale(1.2);
  margin-right: 12px;
`
export const MenuTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 85%;
  color: #5f666d;
  font-size: 14px;
`

export const Line = styled.div`
  height: 1px;
  width: 100%;
  background-color: #eee;
`

export const Text = styled.span``
export const Toggle = styled.span``
