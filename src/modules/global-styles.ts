import { createGlobalStyle } from 'styled-components';
import { Colors } from '../library/constants/colors';

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: Lato, sans-serif;
    font-size: 14px;
    overflow: auto;
    min-width: 526px;
    margin: 0;
    padding: 0;
    background-color: ${Colors.black1};
  }

  svg:hover {
    cursor: pointer;
  }
`

