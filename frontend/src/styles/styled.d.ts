import { CSSProp } from 'styled-components';
import { BackQuoteArgs, MediaQueryProps } from './media';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      black: string;
      grey001: string;
      grey002: string;
      grey003: string;
      grey004: string;
      point1: string;
      point2: string;
      red: string;
      white: string;
    };
    typography: {
      mobile: {
        head: string;
        title: string;
        title1: string;
        subtitle: string;
        body: string;
      };
      tablet: {
        head: string;
        title: string;
        title1: string;
        subtitle: string;
        body: string;
      };
      desktop: {
        head: string;
        title: string;
        title1: string;
        subtitle: string;
        body: string;
      };
      common: {
        button1: string;
        caption1: string;
        caption2: string;
      };
    };
    media: Record<keyof MediaQueryProps, (l: TemplateStringsArray, ...p: BackQuoteArgs) => CSSProp>;
  }
}
