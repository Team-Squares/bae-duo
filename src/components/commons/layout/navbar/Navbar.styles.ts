import { color } from '@/src/commons/styles/styles'
import styled from '@emotion/styled'

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  width: 100%;
  height: 100px;
  border: 5px solid ${color.$main};
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
