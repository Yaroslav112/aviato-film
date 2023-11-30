import { Container, HeaderWrapper, Logo, LogoContainer, NavList, StyledInput, StyledLink } from './styles';
import ImdbIcon from '../../../assets/imdb';
import { ROUTES } from '../../constants/routes';
import { useLocation, useNavigate } from 'react-router-dom';
import { NavigateFunction } from 'react-router';

const Header = () => {
  const navigate:NavigateFunction = useNavigate();
  const { pathname } = useLocation();

  return (
    <HeaderWrapper>
      <LogoContainer onClick={() => navigate(ROUTES.MOVIES)}>
        <Logo />
      </LogoContainer>
      <Container>
        <NavList>
          <StyledLink isActive={pathname ===`${ROUTES.MOVIES}`} to={ROUTES.MOVIES}>Movies</StyledLink>
          <StyledLink isActive={pathname ===`${ROUTES.SERIES}`} to={ROUTES.SERIES}>Series</StyledLink>
          {/*<StyledLink isActive={pathname ===`${ROUTES.CARTOONS}`} to={ROUTES.CARTOONS}>Cartoons</StyledLink>*/}
          <StyledLink isActive={pathname ===`${ROUTES.TOP_100}`} to={ROUTES.TOP_100}>
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
