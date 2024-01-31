import { DeviceProvider } from '@assets/mediaQuery';
import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;

  background-color: ${(props) => props.theme.colors.black};
`;

export const Oops = styled.header`
  margin-top: 16.1rem;

  ${(props) => props.theme.media.tablet`
    margin-top: 14.3rem;
  `};

  ${(props) => props.theme.media.desktop`
    margin-top: 24.3rem;
  `};

  ${(props) => props.theme.media.wide`
    margin-top: 24.3rem;
  `};

  color: ${(props) => props.theme.colors.white};
  text-align: center;

  ${(props) => props.theme.typography[DeviceProvider()].title};
`;

export const ErrorMessage = styled.div`
  margin-top: 0.8rem;

  ${(props) => props.theme.media.tablet`
    margin-top: 2rem;
  `};

  ${(props) => props.theme.media.desktop`
    margin-top: 2.4rem;
  `};

  ${(props) => props.theme.media.wide`
    margin-top: 2.4rem;
  `};

  color: ${(props) => props.theme.colors.grey004};
  text-align: center;

  background-color: transparent;
  ${(props) => props.theme.typography[DeviceProvider()].body};
  white-space: pre-line;

  &:nth-child(3) {
    margin-bottom: 4.3rem;

    ${(props) => props.theme.media.tablet`
      margin-bottom: 4.6rem;
    `};

    ${(props) => props.theme.media.desktop`
      margin-bottom: 6.3rem;
    `};

    ${(props) => props.theme.media.wide`
      margin-bottom: 6.3rem;
    `};
  }
`;
