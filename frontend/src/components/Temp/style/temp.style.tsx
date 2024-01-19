import styled from 'styled-components';
import { DeviceProvider } from '@assets/mediaQuery';

export const Text = styled.div`
  ${(props) => props.theme.typography[DeviceProvider()].head};

  ${(props) => props.theme.media.mobile`
    color: blue;
  `}

  ${(props) => props.theme.media.tablet`
    color: grey;
  `}

  ${(props) => props.theme.media.desktop`
    color: yellow;
  `}

  ${(props) => props.theme.media.wide`
    color: green;
  `}
`;

export const Temp = styled.div;
