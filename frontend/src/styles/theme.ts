import { DefaultTheme } from 'styled-components';

const colors = {};

// rem 10px: mobile font size
const fontStyle = {
  head1: ``,
  head2: ``,
  head3: ``,
  title1: ``,
  title2: ``,
  title3: ``,
  title4: `
    font-family: Source Sans Pro;
    font-weight: 700;
    font-size: 4.8rem;  
    letter-spacing: 0;
  `,
  title5: `
    font-family: Source Sans Pro;
    font-weight: 700;
    font-size: 3.2rem;  
    letter-spacing: 0;
  `,
  title6: `
    font-family: Source Sans Pro;
    font-weight: 700;
    font-size: 2.4rem;  
    letter-spacing: 0;
  `,
  title7: `
    font-family: Source Sans Pro;
    font-weight: 700;
    font-size: 2rem;  
    letter-spacing: 0;
  `,
  subtitle1: ``,
  subtitle2: ``,
  subtitle3: ``,
  body1: ``,
  body2: ``,
  body3: ``,
  button1: ``,
  caption1: ``,
};

const theme: DefaultTheme = {
  colors,
  fontStyle,
};

export default theme;
