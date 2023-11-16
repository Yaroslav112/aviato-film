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

  ::-webkit-scrollbar {
    width: 9px;
  }

  ::-webkit-scrollbar-track {
    background: ${Colors.white1};
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${Colors.red};
    border-radius: 4px;

    &:hover {
      background-color: ${Colors.red1};
    }
  }
`

