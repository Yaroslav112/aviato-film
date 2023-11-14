import { Container, HeaderWrapper, Logo, NavList, StyledInput, StyledLink } from './styles';
import ImdbIcon from '../../../assets/imdb';
import { ROUTES } from '../../constants/routes';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <HeaderWrapper>
      <div onClick={() => navigate(ROUTES.MOVIES)}>
        <Logo />
      </div>
      <Container>
        <NavList>
          <StyledLink to={ROUTES.MOVIES}>Movies</StyledLink>
          <StyledLink to={ROUTES.SERIES}>Series</StyledLink>
          <StyledLink to={ROUTES.CARTOONS}>Cartoons</StyledLink>
          <StyledLink to={ROUTES.TOP_100}>
              TOP 100
            <ImdbIcon />
          </StyledLink>
        </NavList>
      </Container>
      <StyledInput />
    </HeaderWrapper>
  )
}

export default Header;