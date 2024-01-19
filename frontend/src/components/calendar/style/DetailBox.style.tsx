import styled from 'styled-components';
import { DeviceProvider } from '@assets/mediaQuery';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const Date = styled.div`
  color: ${(props) => props.theme.colors.white};
  ${(props) => props.theme.typography[DeviceProvider()].subtitle};
`;
