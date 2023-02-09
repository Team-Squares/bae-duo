import useRoutePage from '../../../../commons/hooks/useRoutePage'
import * as Styled from './Navbar.styles'

const Navbar = () => {
  const { routePage } = useRoutePage()
  return (
    <Styled.Navbar>
      <Styled.Menu onClick={() => routePage('/')}>Home</Styled.Menu>
      <Styled.Menu onClick={() => routePage('/sub')}>Sub</Styled.Menu>
    </Styled.Navbar>
  )
}

export default Navbar
