import { color } from '@/src/commons/styles/styles'
import styled from '@emotion/styled'

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 80px;
  border-bottom: 1px solid ${color.$default};
`

export const Logo = styled.div`
  font-family: 'Noto Sans', sans-serif;
  font-size: 22px;
`

export const RightSection = styled.div`
  display: flex;
  gap: 20px;
`

export const MenuBox = styled.div`
  display: flex;
  align-items: center;
`

export const Menu = styled.div`
  padding: 10px;
  border-radius: 5px;
  color: ${color.$default};
  font-weight: 600;
  cursor: pointer;

  :hover {
    background-color: ${color.$main};
    color: white;
  }
`

export const Profile = styled.div``
