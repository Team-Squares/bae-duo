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

export const SearchBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f7f8f8;
  height: 45px;
  border-radius: 20px;
  padding: 0 10px;
`

export const SearchInput = styled.input`
  width: 220px;
  height: 100%;
  background-color: transparent;
  border: none;
  padding: 0 10px;
  &:focus {
    outline: none;
  }
`

export const SearchButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 100%;
  cursor: pointer;
`

export const Menu = styled.div`
  padding: 5px;
  margin: 0 3px;
  cursor: pointer;
`

export const Profile = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;

  > img:nth-child(2) {
    margin: 0 5px;
  }
`

export const Dialog = styled.div`
  position: absolute;
  width: 150px;
  height: 200px;
  top: 50px;
  right: 0;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 4px 10px 13px rgba(0, 0, 0, 0.25);
  z-index: 999;
`
