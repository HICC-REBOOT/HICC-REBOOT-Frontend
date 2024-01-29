import BREAKPOINT from '@constants/breakpoint';
import { CSSProp, css } from 'styled-components';

export type MediaQueryProps = {
  mobile: number;
  tablet: number;
  desktop: number;
  wide: number;
};

const device: MediaQueryProps = {
  mobile: BREAKPOINT.MOBILE,
  tablet: BREAKPOINT.TABLET,
  desktop: BREAKPOINT.DESKTOP,
  wide: BREAKPOINT.WIDE,
};

export type BackQuoteArgs = string[];

const media = {
  mobile: (literals: TemplateStringsArray, ...args: BackQuoteArgs): CSSProp => css`
    @media only screen and (max-width: ${device.tablet - 0.1}px) {
      ${css(literals, ...args)}
    }
  `,
  tablet: (literals: TemplateStringsArray, ...args: BackQuoteArgs): CSSProp => css`
    @media only screen and (min-width: ${device.tablet}px) and (max-width: ${device.desktop - 0.1}px) {
      ${css(literals, ...args)}
    }
  `,
  desktop: (literals: TemplateStringsArray, ...args: BackQuoteArgs): CSSProp => css`
    @media only screen and (min-width: ${device.desktop}px) and (max-width: ${device.wide - 0.1}px) {
      ${css(literals, ...args)}
    }
  `,
  wide: (literals: TemplateStringsArray, ...args: BackQuoteArgs): CSSProp => css`
    @media only screen and (min-width: ${device.wide}px) {
      ${css(literals, ...args)}
    }
  `,
} as Record<keyof typeof device, (l: TemplateStringsArray, ...p: BackQuoteArgs) => CSSProp>;

export default media;
