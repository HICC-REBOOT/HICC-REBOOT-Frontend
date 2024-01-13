import styled from 'styled-components';
import { DeviceProvider } from '@assets/mediaQuery';

export const Text = styled.div`
  color: ${(props) => props.theme.colors.grey001};
  ${(props) => props.theme.typography[DeviceProvider()].head}
`;

export const Temp = styled.div;
