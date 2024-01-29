import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

import SourceSansProRegular from '@assets/font/source-sans-pro/SourceSansPro-Regular.otf';
import SourceSansProSemibold from '@assets/font/source-sans-pro/SourceSansPro-Semibold.otf';
import SourceSansProBold from '@assets/font/source-sans-pro/SourceSansPro-Bold.otf';

import AreaBold from '@assets/font/area/Area-Bold.otf';
import AreaExtraBold from '@assets/font/area/Area-Extrabold.otf';

const GlobalStyle = createGlobalStyle`
  ${reset}

  @font-face {
    font-family: 'Source Sans Pro';
    src: url(${SourceSansProRegular}) format('opentype');
    font-style: normal;
    font-weight: 400;
  }
  
  @font-face {
    font-family: 'Source Sans Pro';
    src: url(${SourceSansProSemibold}) format('opentype');
    font-style: normal;
    font-weight: 600;
  }
  
  @font-face {
    font-family: 'Source Sans Pro';
    src: url(${SourceSansProBold}) format('opentype');
    font-style: normal;
    font-weight: 700;
  }

  @font-face {
    font-family: 'Area';
    src: url(${AreaBold}) format('opentype');
    font-style: normal;
    font-weight: 700;
  }

  @font-face {
    font-family: 'Area';
    src: url(${AreaExtraBold}) format('opentype');
    font-style: normal;
    font-weight: 800;
  }

  a{
    text-decoration: none;
    color: inherit;
  }
  *{
    box-sizing: border-box;
  }
  html, body, div, span, h1, h2, h3, h4, h5, h6, p, 
  a, dl, dt, dd, ol, ul, li, form, label, table{
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 10px;
    vertical-align: baseline;
  }
  body{
    line-height: 1;
    font-family: sans-serif;
    background-color: #FFFFFF;
  }
  ol, ul{
    list-style: none;
  }
  button {
    border: 0;
    background: transparent;
    cursor: pointer;
  }

  html {
    /* default font size */
    font-size: 62.5%;
  }
`;

export default GlobalStyle;
