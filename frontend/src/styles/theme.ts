import { DefaultTheme } from 'styled-components';
import media from './media';

const colors = {
  black: '#0A0A0A',
  grey001: '#141415',
  grey002: '#828288',
  grey003: '#A3A4A9',
  grey004: '#C6C7CA',
  point1: '#6963FF',
  point2: '#53FFCB',
  red: '#FF5D5D',
  white: '#FFFFFF',
};

// rem 10px: mobile font size
const typography = {
  mobile: {
    head: `
      font-family: Area;
      font-size: 4.8rem;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      letter-spacing: 0.075rem;
    `,
    title: `
      font-family: Area;
      font-size: 2.4rem;
      font-style: normal;
      font-weight: 800;
      line-height: normal;
      letter-spacing: 0.15rem;
    `,
    title1: `
      font-family: Source Sans Pro;
      font-size: 2rem;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      letter-spacing: 0;
    `,
    subtitle: `
      font-family: Source Sans Pro;
      font-size: 1.7rem;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      letter-spacing: 0.1rem;
    `,
    body: `
      font-family: Source Sans Pro;
      font-size: 1.5rem;
      font-style: normal;
      font-weight: 400;
      line-height: 160%;
      letter-spacing: 0.05rem;
    `,
  },
  tablet: {
    head: `
      font-family: Area;
      font-size: 6.4rem;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      letter-spacing: 0.05rem;
    `,
    title: `
      font-family: Area;
      font-size: 3.2rem;
      font-style: normal;
      font-weight: 800;
      line-height: normal;
      letter-spacing: 0.1rem;
    `,
    title1: `
      font-family: Source Sans Pro;
      font-size: 3.2rem;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      letter-spacing: 0;
    `,
    subtitle: `
      font-family: Source Sans Pro;
      font-size: 2.4rem;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      letter-spacing: 0.05rem;
    `,
    body: `
      font-family: Source Sans Pro;
      font-size: 1.7rem;
      font-style: normal;
      font-weight: 400;
      line-height: 160%;
      letter-spacing: 0.05rem;
    `,
  },
  desktop: {
    head: `
      font-family: Area;
      font-size: 14.4rem;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      letter-spacing: 0;
    `,
    title: `
      font-family: Area;
      font-size: 4rem;
      font-style: normal;
      font-weight: 800;
      line-height: normal;
      letter-spacing: 0.05rem;
    `,
    title1: `
      font-family: Source Sans Pro;
      font-size: 4.8rem;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      letter-spacing: 0;
    `,
    subtitle: `
      font-family: Source Sans Pro;
      font-size: 2.8rem;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      letter-spacing: 0.05rem;
    `,
    body: `
      font-family: Source Sans Pro;
      font-size: 1.8rem;
      font-style: normal;
      font-weight: 400;
      line-height: 160%;
      letter-spacing: 0.125rem;
    `,
  },
  common: {
    button1: `
      font-family: Source Sans Pro;
      font-size: 1.5rem;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      letter-spacing: 0.05rem;
    `,
    caption1: `
      font-family: Source Sans Pro;
      font-size: 1.3rem;
      font-style: normal;
      font-weight: 400;
      line-height: 160%;
      letter-spacing: 0.05rem;
    `,
    caption2: `
      font-family: Source Sans Pro;
      font-size: 1rem;
      font-style: normal;
      font-weight: 400;
      line-height: 160%;
      letter-spacing: 0.05rem;
    `,
  },
};

const theme: DefaultTheme = {
  colors,
  typography,
  media,
};

export default theme;
