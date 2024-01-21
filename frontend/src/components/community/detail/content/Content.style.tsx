import { DeviceProvider } from '@assets/mediaQuery';
import styled from 'styled-components';

export const Subject = styled.header`
  width: 100%;
  margin-bottom: 2rem;
  color: ${(props) => props.theme.colors.white};
  ${(props) => props.theme.typography[DeviceProvider()].subtitle};
  font-feature-settings:
    'clig' off,
    'liga' off;
`;

export const Content = styled.article`
  width: 100%;
  margin-top: 2rem;
  margin-bottom: 4rem;
  white-space: pre-line;

  color: ${(props) => props.theme.colors.grey004};
  ${(props) => props.theme.typography.common.caption1};
`;
