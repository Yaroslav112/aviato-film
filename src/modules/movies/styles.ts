import styled from 'styled-components';
import { Colors } from '../../library/constants/colors';

export const NavContainer = styled.div`
  background-color: ${Colors.black};
  position: sticky;
  top: 0;
`

export const MovieContainer = styled.span`
  display: flex;
  flex-wrap: wrap;
  justify-content: center; 
  align-content: center;
  flex-direction: row; 
  margin: 90px auto 0; 
  padding: 20px;
  width: 1400px;
  max-width: 100%;
  box-sizing: border-box;

  *:not(p, img, span, svg):hover {
    box-shadow: 0 0 0 1.5px ${Colors.red};
    transition: box-shadow 0.2s;
  }
`

export const Image = styled.img`
  width: 250px;
  height: 400px;
`

export const MovieTitle = styled.p`
  color: ${Colors.white};
  font-size: 18px;
  font-family: Lato, serif;
  text-align: center;
  max-width: 220px;
  margin: 10px auto;
  white-space: break-spaces;
`

export const ImgContainer = styled.div`
  margin-bottom: 50px;
  margin-right: 50px;
  cursor: pointer;
  transition: border-color 0.3s;
  background: ${Colors.posterGradient};
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`

export const LoadMoreButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  text-align: center;
`

export const LoadMoreButton = styled.button`
  padding: 10px;
  width: 200px;
  border-radius: 5px;
  background: ${Colors.buttonGradient};
  color: ${Colors.white};
  border: none;
  cursor: pointer;
  font-size: 20px;
  margin-bottom: 100px;
`





