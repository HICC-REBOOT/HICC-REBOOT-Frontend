import styled from 'styled-components';
import { DeviceProvider } from '@assets/mediaQuery';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  width: 100%;

  ${(props) => props.theme.media.desktop`
    padding-top: 7.9rem;
    width: 32.8rem;
  `};

  ${(props) => props.theme.media.wide`
    padding-top: 7.9rem;
    width: 32.8rem;
  `};
`;

export const Date = styled.div`
  color: ${(props) => props.theme.colors.white};
  ${(props) => props.theme.typography.mobile.subtitle};

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    ${(props) => props.theme.typography.desktop.subtitle}
  }
`;

export const AddContainer = styled.button`
  width: 100%;
  padding: 1.2rem;
  display: flex;
  gap: 0.8rem;
  align-items: center;
  background-color: ${(props) => props.theme.colors.grey001};
  border-radius: 1.6rem;
`;

export const AddText = styled.div`
  color: ${(props) => props.theme.colors.white};
  ${(props) => props.theme.typography[DeviceProvider()].body};
`;

export const NoSchedule = styled.div`
  width: 100%;
  color: ${(props) => props.theme.colors.grey004};
  ${(props) => props.theme.typography.common.caption1};
  text-align: center;
  padding: 2.4rem;

  ${(props) => props.theme.media.desktop`
    padding: 4rem;
  `};
  ${(props) => props.theme.media.wide`
    padding: 4rem;
  `};
`;
