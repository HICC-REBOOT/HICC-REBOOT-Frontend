import styled from 'styled-components';
import { DeviceProvider } from '@assets/mediaQuery';
import theme from '@styles/theme';

export const Container = styled.div`
  width: 100%;
  flex-shrink: 0;
  background: ${(props) => theme.colors.black};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  ${(props) => props.theme.typography[DeviceProvider()].head};

  ${(props) => props.theme.media.mobile`
    height: 105.7rem;
  `}
  ${(props) => props.theme.media.tablet`
    height: 90.1rem;
  `}

  ${(props) => props.theme.media.desktop`
    height: 99.7rem;
  `}

  ${(props) => props.theme.media.wide`
    height: 99.7rem;
  `}
`;

export const GrouopContainer = styled.div`
  flex-shrink: 0;
  background: ${(props) => theme.colors.black};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  ${(props) => props.theme.typography[DeviceProvider()].head};

  ${(props) => props.theme.media.mobile`
    width: 33rem;
    height: 87.3rem;
  `}
  ${(props) => props.theme.media.tablet`
    width: 72rem;
    height: 71.7rem;
  `}

  ${(props) => props.theme.media.desktop`
    width: 124.8rem;
    height: 81.3rem;
  `}

  ${(props) => props.theme.media.wide`
    width: 124.8rem;
    height: 81.3rem;
  `}
`;

export const Title = styled.div`
  position: relative;
  white-space: nowrap;
  color: ${(props) => theme.colors.white};

  text-align: center;
  ${(props) => props.theme.typography[DeviceProvider()].title1};

  ${(props) => props.theme.media.mobile`
      width: 32.9rem;
      height: 2.5rem;
  `}

  ${(props) => props.theme.media.tablet`
      width: 51.7rem;
      height: 4rem;
  `}
  
  ${(props) => props.theme.media.desktop`
      width: 21rem;
      height: 4.8rem;
  `}

  ${(props) => props.theme.media.wide`
      width: 21rem;
      height: 4.8rem;
  `}
`;

export const Content = styled.div`
  position: relative;
  color: ${(props) => theme.colors.white};

  text-align: center;
  ${(props) => props.theme.typography[DeviceProvider()].body};

  ${(props) => props.theme.media.mobile`
    margin-top: 1.5rem;
    width: 19rem;
    height: 4.8rem;
  `}

  ${(props) => props.theme.media.tablet`
    margin-top: 1.5rem;
    width: 46.7rem;
    height: 2.7rem;
  `}

  ${(props) => props.theme.media.desktop`
    margin-top: 1.5rem;
    width: 46.7rem;
    height: 2.9rem;
  `}

  ${(props) => props.theme.media.wide`
    margin-top: 1.5rem;
    width: 46.7rem;
    height: 2.9rem;
  `}
`;

export const ActivityContainer = styled.div`
  position: relative;
  ${(props) => props.theme.typography[DeviceProvider()].head};

  ${(props) => props.theme.media.mobile`
    top: 3.2rem;
    display: flex;
    width: 33.2rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.6rem;
  `}

  ${(props) => props.theme.media.tablet`
    top: 3.7rem;
    display: inline-flex;
    align-items: flex-start;
    gap: 1.6rem;
  `}

  ${(props) => props.theme.media.desktop`
    top: 6rem;
    display: inline-flex;
    align-items: flex-start;
    gap: 2.4rem;
  `}

  ${(props) => props.theme.media.wide`
    top: 6rem;
    display: inline-flex;
    align-items: flex-start;
    gap: 2.4rem;
  `}
`;

export const Box = styled.div`
  border-radius: 1.6rem;
  background: ${(props) => theme.colors.grey001};
  ${(props) => props.theme.typography[DeviceProvider()].head};

  ${(props) => props.theme.media.mobile`
    width: 32.8rem;
    height: 24rem;
    flex-shrink: 0;
  `}

  ${(props) => props.theme.media.tablet`
    width: 35.2rem;
    height: 28.8rem;
    flex-shrink: 0;
  `}
  ${(props) => props.theme.media.desktop`
    width: 61.2rem;
    height: 31.6rem;
    flex-shrink: 0;
  `}

  ${(props) => props.theme.media.wide`
    width: 61.2rem;
    height: 31.6rem;
    flex-shrink: 0;
  `}
`;

export const BoxTitle = styled.div`
  position: relative;
  color: ${(props) => theme.colors.white};

  text-align: left;
  ${(props) => props.theme.typography[DeviceProvider()].subtitle};

  ${(props) => props.theme.media.mobile`
    top: 4.4rem;
    left: 2.8rem;
    width: 16rem;
  `}

  ${(props) => props.theme.media.tablet`
    top: 3.7rem;
    left: 2.8rem;
    width: 30rem;
  `}

  ${(props) => props.theme.media.desktop`
    top: 3.5rem;
    left: 2.8rem;
    width: 35rem;
  `}

  ${(props) => props.theme.media.wide`
    top: 3.5rem;
    left: 2.8rem;
    width: 35rem;
  `}
`;

export const BoxContent = styled.div`
  position: relative;
  color: ${(props) => theme.colors.white};
  ${(props) => props.theme.typography.common.caption1};

  ${(props) => props.theme.media.mobile`
    top: 8.1rem;
    left: 2.8rem;
    width: 22.7rem;
    height: 4.2rem;
  `}

  ${(props) => props.theme.media.tablet`
    top: 8.1rem;
    left: 2.8rem;
    width: 22.7rem;
    height: 4.2rem;
  `}

  ${(props) => props.theme.media.desktop`
    top: 8.1rem;
    left: 2.8rem;
    width: 22.7rem;
    height: 4.2rem;
  `}

  ${(props) => props.theme.media.wide`
    top: 8.1rem;
    left: 2.8rem;
    width: 22.7rem;
    height: 4.2rem;
  `}
`;

export const BoxContainer = styled.div`
  overflow-x: scroll;
  overflow-y: hidden;
  ${(props) => props.theme.typography[DeviceProvider()].head};

  ${(props) => props.theme.media.mobile`
    position: relative;
    left: 0rem;
    top: 4.8rem;
    width: 100%;
    height: 27rem;
    display: inline-flex;
    align-items: flex-start;
    gap: 2.4rem;
  `}

  ${(props) => props.theme.media.tablet`
    position: relative;
    top: 6.1rem;
    left: 0rem;
    width: 72rem;
    height: 29.8rem;
    display: inline-flex;
    align-items: flex-start;
    gap: 1.6rem;
  `}

  ${(props) => props.theme.media.desktop`
    position: relative;
    top: 8.9rem;
    width: 124.8rem;
    display: inline-flex;
    align-items: flex-start;
    gap: 2.4rem;
  `}

  ${(props) => props.theme.media.wide`
    position: relative;
    top: 8.9rem;
    width: 124.8rem;
    display: inline-flex;
    align-items: flex-start;
    gap: 2.4rem;
  `}
`;

export const SmallBox = styled.div`
  border-radius: 1.6rem;
  border: 0.1rem, solid;
  background: ${(props) => theme.colors.grey001};
  ${(props) => props.theme.typography[DeviceProvider()].head};

  ${(props) => props.theme.media.mobile`
    position: relative;
    width: 20.0rem;
    height: 24rem;
    flex-shrink: 0;
  `}

  ${(props) => props.theme.media.tablet`
    width: 25.6rem;
    height: 28.8rem;
    flex-shrink: 0;
  `}
  ${(props) => props.theme.media.desktop`
    width: 25.6rem;
    height: 31.6rem;
    flex-shrink: 0;
  `}

  ${(props) => props.theme.media.wide`
    width: 25.6rem;
    height: 31.6rem;
    flex-shrink: 0;
  `}
`;

export const SmallBoxTitle = styled.div`
  white-space: pre-wrap;
  position: relative;
  color: ${(props) => props.theme.colors.white};

  text-align: left;
  ${(props) => props.theme.typography[DeviceProvider()].subtitle};

  ${(props) => props.theme.media.mobile`
    top: 4rem;
    left: 2.4rem;
    width: 11.6rem;
    height: 4.2.rem;
  `}

  ${(props) => props.theme.media.tablet`
    top: 3.7rem;
    left: 2.8rem;
    width: 18.1rem;
    height: 6rem;
  `}

  ${(props) => props.theme.media.desktop`
    top: 3.5rem;
    left: 2.8rem;
    width: 18rem;
    height: 7rem;
  `}

  ${(props) => props.theme.media.wide`
    top: 3.5rem;
    left: 2.8rem;
    width: 16.4rem;
    height: 7rem;
  `}
`;

export const SmallBoxContent = styled.div`
  position: relative;
  color: ${(props) => theme.colors.white};
  ${(props) => props.theme.typography.common.caption1};

  ${(props) => props.theme.media.mobile`
    top: 5.8rem;
    left: 2.8rem;
    width: 13.1rem;
  `}

  ${(props) => props.theme.media.tablet`
    top: 11.6rem;
    left: 2.8rem;
    width: 15.8rem;
  `}

  ${(props) => props.theme.media.desktop`
    top: 8.1rem;
    left: 2.8rem;
    width: 20.7rem;
  `}

  ${(props) => props.theme.media.wide`
    top: 8.1rem;
    left: 2.8rem;
    width: 20.7rem;
  `}
`;

export const Logo = styled.div`
  position: absolute;
  width: 4.6rem;
  height: 4.6rem;
  color: ${(props) => theme.colors.white};
  background: rgba(119, 119, 119, 0.47);
  border-radius: 1.2rem;
  ${(props) => props.theme.media.mobile`
    top: 17.4rem;
    left: 13.4rem;
  `}

  ${(props) => props.theme.media.tablet`
    top: 22.2rem;
    left: 19rem;
  `}

  ${(props) => props.theme.media.desktop`
    top: 25rem;
    left: 19rem;
  `}

  ${(props) => props.theme.media.wide`
    top: 25rem;
    left: 19rem;
  `}
`;
