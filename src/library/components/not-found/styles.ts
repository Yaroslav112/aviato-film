import styled from 'styled-components';
import { Colors } from '../../constants/colors';

export const NotFoundContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
`

export const Text = styled.p`
  text-align: center;
  font-size: 25px;
  color: ${Colors.red};
`
