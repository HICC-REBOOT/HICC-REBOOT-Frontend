import styled from 'styled-components';
import { DeviceProvider } from '@assets/mediaQuery';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  ${(props) => props.theme.typography[DeviceProvider()].head};
  ${(props) => props.theme.media.mobile`
    width: 100%;
    height: 60rem;
    flex-shrink: 0;

    background: var(--grey001, #141415);
  `}

  ${(props) => props.theme.media.tablet`
    width: 100%;
    height: 54.6133rem;
    flex-shrink: 0;

    background: var(--grey001, #141415);
  `}

  ${(props) => props.theme.media.desktop`
    width: 100%;
    height: 102.4rem;
    flex-shrink: 0;

    border: 1px solid #000;
    background: var(--grey001, #141415);

    box-shadow: 0rem 0.4rem 0.4rem 0rem rgba(0, 0, 0, 0.25);
  `}

  ${(props) => props.theme.media.wide`
    width: 100%;
    height: 102.4rem;
    flex-shrink: 0;

    border: 1px solid #000;
    background: var(--grey001, #141415);
    
    box-shadow: 0rem 0.4rem 0.4rem 0rem rgba(0, 0, 0, 0.25);
  `}
`;

export const Title = styled.div`
  ${(props) => props.theme.typography[DeviceProvider()].head};
  position: relative;

  ${(props) => props.theme.media.mobile`
    top: 27.3rem;
    color: var(--white, var(--Greyscale-light-white, #FFF));
    text-align: center;
    font-feature-settings: 'clig' off, 'liga' off;
  `}

  ${(props) => props.theme.media.tablet`
    top: 23.2rem;
    color: var(--white, var(--Greyscale-light-white, #FFF));
    text-align: center;
    font-feature-settings: 'clig' off, 'liga' off;
  `}

  ${(props) => props.theme.media.desktop`
    top: 37.9rem;
    color: var(--white, var(--Greyscale-light-white, #FFF));
    text-align: center;
    font-feature-settings: 'clig' off, 'liga' off;
  `}

  ${(props) => props.theme.media.wide`  
    top: 37.9rem;
    color: var(--white, var(--Greyscale-light-white, #FFF));
    text-align: center;
    font-feature-settings: 'clig' off, 'liga' off;
  `}
`;

export const Content = styled.div`
  position: relative;
  ${(props) => props.theme.typography[DeviceProvider()].body};

  ${(props) => props.theme.media.mobile`
    top: 29rem;
    color: var(--white, var(--Greyscale-light-white, #FFF));
    text-align: center;
    font-feature-settings: 'clig' off, 'liga' off;
  `}

  ${(props) => props.theme.media.tablet`
    top: 24.8rem;
    color: var(--white, var(--Greyscale-light-white, #FFF));
    text-align: center;
    font-feature-settings: 'clig' off, 'liga' off;
  `}

  ${(props) => props.theme.media.desktop`
    top: 39.5rem;
    color: var(--white, var(--Greyscale-light-white, #FFF));
    text-align: center;
    font-feature-settings: 'clig' off, 'liga' off;
  `}

  ${(props) => props.theme.media.wide`
    top: 39.5rem;
    color: var(--white, var(--Greyscale-light-white, #FFF));
    text-align: center;
    font-feature-settings: 'clig' off, 'liga' off;
  `}
`;
