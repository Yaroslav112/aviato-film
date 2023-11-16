import styled from 'styled-components';
import { Colors } from '../../constants/colors';

export const Container = styled.span`
  position: relative;
  top: 100px;
  background-color: ${Colors.red};
  display: inline-block;
  padding: 4px;
  border-top: 2px solid ${Colors.black};
  border-right: 2px solid ${Colors.black};
  border-bottom: 2px solid ${Colors.black};
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;
`

export const Wrapper = styled.span`
  position: absolute;
`
