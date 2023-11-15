import styled from 'styled-components';
import { Colors } from '../../constants/colors';

export const BriefInformationContainer = styled.div`
  background-color: ${Colors.black1};
  position: absolute;
  z-index: 1;
  margin-left: 30px;
  border-radius: 5px;
  height: 300px;
  width: 385px;
  padding: 10px;
  line-height: 25px;
  font-family: Lato, serif;
  font-size: 17px;
  font-weight: 500;
  border: 1px solid ${Colors.red};
  color: ${Colors.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
`

export const RatingContainer = styled.div`
  display: flex;
  align-items: center;
`
