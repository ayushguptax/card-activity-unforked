import { createGlobalStyle } from 'styled-components';

import KanitLight from '../assets/fonts/Kanit-Light.ttf';
import KanitRegular from '../assets/fonts/Kanit-Regular.ttf';
import KanitMedium from '../assets/fonts/Kanit-Medium.ttf';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Kanit";
    src: url(${KanitLight}) format('ttf');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: "Kanit";
    src: url(${KanitRegular}) format('ttf');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: "Kanit";
    src: url(${KanitMedium}) format('ttf');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }
  *, *:before, *:after {
    box-sizing: border-box;
  }
  body, html {
    margin: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, #171717 1.77%, #2a2a2a 100%);
    font-family: '"Kanit", sans-serif';
    font-size: 14px;
    color: #d1d1d1;
    overscroll-behavior-y: none;
    overflow: hidden;
  }
`;
