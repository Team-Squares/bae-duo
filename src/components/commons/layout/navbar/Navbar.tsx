import useRoutePage from '../../../../commons/hooks/useRoutePage'
import * as Styled from './Navbar.styles'
import Image from 'next/image'
import tempProfileImg from './tempProfileImg.svg'

const Navbar = () => {
  const { routePage } = useRoutePage()
  return (
    <Styled.Navbar>
      <Styled.Logo>BAEDUE</Styled.Logo>
      <Styled.RightSection>
        <Styled.MenuBox>
          <Styled.Menu onClick={() => routePage('/')}>Home</Styled.Menu>
          <Styled.Menu onClick={() => routePage('/sub')}>Sub</Styled.Menu>
        </Styled.MenuBox>
        <Styled.Profile>
          <Image src={tempProfileImg} alt="none"></Image>
        </Styled.Profile>
      </Styled.RightSection>
    </Styled.Navbar>
  )
}

export default Navbar
