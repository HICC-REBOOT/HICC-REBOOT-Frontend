import styled from 'styled-components';
import { DeviceProvider } from '@assets/mediaQuery';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme.colors.grey001};
  ${(props) => props.theme.typography[DeviceProvider()].head};
  ${(props) => props.theme.media.mobile`
    width: 100%;
    height: 60rem;
    flex-shrink: 0;
  `}

  ${(props) => props.theme.media.tablet`
    width: 100%;
    height: 54.6133rem;
    flex-shrink: 0;
  `}

  ${(props) => props.theme.media.desktop`
    width: 100%;
    height: 102.4rem;
    flex-shrink: 0;
  `}

  ${(props) => props.theme.media.wide`
    width: 100%;
    height: 102.4rem;
    flex-shrink: 0;
  `}
`;

export const Title = styled.div`
  ${(props) => props.theme.typography[DeviceProvider()].head};
  position: relative;
  color: ${(props) => props.theme.colors.white};

  ${(props) => props.theme.media.mobile`
    top: 27.3rem;
    text-align: center;
  `}

  ${(props) => props.theme.media.tablet`
    top: 23.2rem;
    text-align: center;
  `}

  ${(props) => props.theme.media.desktop`
    top: 37.9rem;
    text-align: center;
  `}

  ${(props) => props.theme.media.wide`  
    top: 37.9rem;
    text-align: center;
  `}
`;

export const Content = styled.div`
  position: relative;
  color: ${(props) => props.theme.colors.white};
  ${(props) => props.theme.typography[DeviceProvider()].body};

  ${(props) => props.theme.media.mobile`
    top: 29rem;
    text-align: center;
  `}

  ${(props) => props.theme.media.tablet`
    top: 24.8rem;
    text-align: center;
  `}

  ${(props) => props.theme.media.desktop`
    top: 39.5rem;
    text-align: center;
  `}

  ${(props) => props.theme.media.wide`
    top: 39.5rem;

    text-align: center;
  `}
`;
