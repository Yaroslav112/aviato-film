import { Link } from 'react-router-dom';
import LogoIcon from '../../../assets/logo';
import styled from 'styled-components';
import { Colors } from '../../constants/colors';

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0 30px 0 30px;
  background-color: ${Colors.black};
  position: sticky;
`

export const Container = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 0 auto;
`

export const StyledLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  color: ${Colors.white};
  font-size: 17px;
  transition: 0.1s;
  padding: 10px;
  border-radius: 5px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: ${Colors.red};
  }
`

export const Logo = styled(LogoIcon)`
  &:hover {
    cursor: pointer;
  }
`

export const StyledInput = styled.input`
  height: 30px;
  width: 250px;
  font-size: 20px;
  margin-left: 35px;
  border-radius: 5px;
  font-family: Lato,serif;
  border: 0;

  &:focus:not(:read-only) {
    outline: none;
  }
`;

export const LogoContainer = styled.div`
`
