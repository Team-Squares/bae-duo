import { color } from '@/src/commons/styles/styles'
import styled from '@emotion/styled'

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 80px;
  border-bottom: 1px solid ${color.$default};
`
export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
  width: 100%;
  max-width: 1040px;
  margin: 0 auto;
  @media (max-width: 768px) {
    max-width: 768px;
    padding: 0 32px;
  }
  @media (max-width: 360px) {
    max-width: 360px;
    padding: 0 16px;
  }
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
