import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      black: string;
      grey001: string;
      point1: string;
      point2: string;
      white: string;
    };
    fontStyle: {
      head1: string;
      head2: string;
      head3: string;
      title1: string;
      title2: string;
      title3: string;
      title4: string;
      title5: string;
      title6: string;
      title7: string;
      subtitle1: string;
      subtitle2: string;
      subtitle3: string;
      body1: string;
      body2: string;
      body3: string;
      button1: string;
      caption1: string;
    };
  }
}
