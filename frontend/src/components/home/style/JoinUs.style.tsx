import styled from 'styled-components';
import { DeviceProvider } from '@assets/mediaQuery';
import theme from '@styles/theme';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${(props) => props.theme.colors.black};
`;

export const GroupContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  ${(props) => props.theme.media.mobile`
    width: 24.3rem;
    height: 39.5rem;
  `}

  ${(props) => props.theme.media.tablet`
    width: 39.5rem;
    height: 64rem;
  `}

  ${(props) => props.theme.media.desktop`
    width: 66.4rem;
    height: 88.4rem;
  `}

  ${(props) => props.theme.media.wide`
    width: 66.4rem;
    height: 88.4rem;
  `}
`;

export const Title = styled.div`
  position: relative;
  color: var(--Point1, #5b4ef5);
  text-align: center;
  white-space: nowrap;

  background: var(--Gradient002, linear-gradient(96deg, #5b4ef5 0%, #53ffcb 100%));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  /* color: ${(props) => props.theme.colors.point1}; */

  ${(props) => props.theme.typography[DeviceProvider()].head};

  ${(props) => props.theme.media.mobile`
    top: 2.6rem;
    width: 18.8rem;
    height: 5.8rem;
  `}

  ${(props) => props.theme.media.tablet`
    top: 1.6rem;
    width: 24.7rem;
    height: 7.7rem;
  `}

  ${(props) => props.theme.media.desktop`
    top: -1.5rem;
    width: 54.7rem;
    height: 17.3rem;
  `}

  ${(props) => props.theme.media.wide`
    top: -1.5rem;
    width: 54.7rem;
    height: 17.3rem;
  `}
`;

export const Content = styled.div`
  position: relative;
  text-align: center;
  color: ${(props) => props.theme.colors.white};
  opacity: 0.7;
  ${(props) => props.theme.typography[DeviceProvider()].body};

  ${(props) => props.theme.media.mobile`
    width: 26.3rem;
    height: 2.4rem;
  `}

  ${(props) => props.theme.media.tablet`
    width: 30.4rem;
    height: 2.7rem;
  `}

  ${(props) => props.theme.media.desktop`
    width: 33.4rem;
    height: 2.9rem;
  `}

  ${(props) => props.theme.media.wide`
    width: 33.4rem;
    height: 2.9rem;
  `}
`;

export const BigStar = styled.div`
  position: absolute;
  width: 4.2rem;
  height: 4.2rem;
  flex-shrink: 0;

  ${(props) => props.theme.media.mobile`
    top: 3.3rem;
    left: 22rem;
  `}

  ${(props) => props.theme.media.tablet`
    top: 1rem;
    right: 0rem;
  `}

  ${(props) => props.theme.media.desktop`
    top: 0.4rem;
    left: 60.2rem;
  `}

  ${(props) => props.theme.media.wide`
    top: 0.4rem;
    left: 60.2rem;
  `}
`;

export const SmallStar = styled.div`
  position: absolute;
  width: 2.1rem;
  height: 2.1rem;
  flex-shrink: 0;

  ${(props) => props.theme.media.mobile`
    top: 9.3rem;
    left: 0rem;
  `}

  ${(props) => props.theme.media.tablet`
    top: 10.4rem;
    left: 0rem;
  `}

  ${(props) => props.theme.media.desktop`
    top: 15.8rem;
    left: 0rem;
  `}

  ${(props) => props.theme.media.wide`
    top: 15.8rem;
    left: 0rem;
  `}
`;

export const Button = styled.div`
  position: absolute;
  width: 15.3rem;
  height: 4.6rem;
  display: inline-flex;
  padding: 1rem 0.7rem 1rem 1.5rem;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
  flex-shrink: 0;

  border-radius: 1.2rem;
  background: linear-gradient(95deg, rgba(91, 78, 245, 0.3) 0%, rgba(91, 78, 245, 0) 100%),
    linear-gradient(275deg, rgba(83, 255, 203, 0.3) 0%, rgba(83, 255, 203, 0) 100%);
  ${(props) => props.theme.typography.common.button1};

  ${(props) => props.theme.media.mobile`
    top: 14.6rem;
  `}

  ${(props) => props.theme.media.tablet`
    top: 19rem;
  `}

  ${(props) => props.theme.media.desktop`
    top: 22.4rem;
  `}

  ${(props) => props.theme.media.wide`
    top: 22.4rem;
  `}
`;

export const ButtonTitle = styled.div`
  width: 8.9rem;
  height: 1.9rem;
  white-space: nowrap;
  color: #d9d9d9;
  ${(props) => props.theme.typography.common.button1};
`;

export const ButtonCircle = styled.div`
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 50%;
  background: ${(props) => props.theme.colors.black};
`;
