import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

import SourceSansProExtraLight from '@assets/font/source-sans-pro/SourceSansPro-ExtraLight.woff2';
import SourceSansProLight from '@assets/font/source-sans-pro/SourceSansPro-Light.woff2';
import SourceSansProRegular from '@assets/font/source-sans-pro/SourceSansPro-Regular.woff2';
import SourceSansProBold from '@assets/font/source-sans-pro/SourceSansPro-Bold.woff2';

import AreaBold from '@assets/font/area/Area-Bold.woff2';
import AreaExtraBold from '@assets/font/area/Area-Extrabold.woff2';

const GlobalStyle = createGlobalStyle`
  ${reset}
  
  @font-face {
    font-family: 'Source Sans Pro';
    src: url(${SourceSansProExtraLight}) format('font-woff2');
    font-weight: 200;
  }

  @font-face {
    font-family: 'Source Sans Pro';
    src: url(${SourceSansProLight}) format('font-woff2');
    font-weight: 300;
  }

  @font-face {
    font-family: 'Source Sans Pro';
    src: url(${SourceSansProRegular}) format('font-woff2');
    font-weight: 400;
  }

  @font-face {
    font-family: 'Source Sans Pro';
    src: url(${SourceSansProBold}) format('font-woff2');
    font-weight: 700;
  }

  @font-face {
    font-family: 'Area';
    src: url(${AreaBold}) format('font-woff2');
    font-weight: 700;
  }

  @font-face {
    font-family: 'Area';
    src: url(${AreaExtraBold}) format('font-woff2');
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
    font-size: 10px;
  }
`;

export default GlobalStyle;
