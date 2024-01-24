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
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  ${(props) => props.theme.typography[DeviceProvider()].head};

  ${(props) => props.theme.media.mobile`
    width: 32.8rem;
    height: 79rem;
  `}

  ${(props) => props.theme.media.tablet`
    width: 53.4rem;
    height: 93.8rem;
  `}

  ${(props) => props.theme.media.desktop`
    width: 103.4rem;
    height: 111.7rem;
  `}

  ${(props) => props.theme.media.wide`
    width: 103.4rem;
    height: 111.7rem;
  `}
`;

export const Title = styled.div`
  color: ${(props) => props.theme.colors.white};
  text-align: center;
  ${(props) => props.theme.typography[DeviceProvider()].title};

  ${(props) => props.theme.media.mobile`
    width: 32rem;
    height: 3rem;
  `}

  ${(props) => props.theme.media.tablet`
    width: 51.7rem;
    height: 4rem;
  `}

  ${(props) => props.theme.media.desktop`
    width: 51.7rem;
    height: 4rem;
  `}

  ${(props) => props.theme.media.wide`
    width: 51.7rem;
    height: 4rem;
  `}
`;

export const Box = styled.div`
  position: relative;
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;

  border-radius: 2.4rem;
  background: ${(props) => props.theme.colors.grey001};

  ${(props) => props.theme.media.mobile`
    top: 2.4rem;
    width: 32.8rem;
    height: 55.4rem;
  `}

  ${(props) => props.theme.media.tablet`
    top: 3rem;
    width: 53.4rem;
    height: 65.1rem;
  `}

  ${(props) => props.theme.media.desktop`
    top: 3.9rem;
    width: 103.4rem;
    height: 51.1rem;
  `}

  ${(props) => props.theme.media.wide`
    top: 3.9rem;
    width: 103.4rem;
    height: 51.1rem;
  `}
`;

export const Picture = styled.div`
  flex-shrink: 0;
  position: absolute;
  border-radius: 1.6rem;
  background: ${(props) => props.theme.colors.black};
  ${(props) => props.theme.media.mobile`
    top: 1.2rem;
    left: 1.2rem;
    width: 30.4rem;
    height: 27.5rem;
  `}

  ${(props) => props.theme.media.tablet`
    top: 1.1rem;
    left: 1.2rem;
    width: 51rem;
    height: 34.8rem;
  `}

  ${(props) => props.theme.media.desktop`
    top: 1.3rem;
    left: 1.6rem;
    width: 48.5rem;
    height: 48.5rem;
  `}

  ${(props) => props.theme.media.wide`
    top: 1.3rem;
    left: 1.6rem;
    width: 48.5rem;
    height: 48.5rem;
  `}
`;

export const BoxTitle = styled.div`
  color: ${(props) => props.theme.colors.white};
  text-align: center;
  white-space: nowrap;
  ${(props) => props.theme.typography[DeviceProvider()].title};

  ${(props) => props.theme.media.mobile`
    position: absolute;
    top: 31.9rem;
    width: 15.7rem;
    height: 2.9rem;
  `}

  ${(props) => props.theme.media.tablet`
    position: absolute;
    top: 39.9rem;
    width: 20.2rem;
    height: 3.8rem;
  `}

  ${(props) => props.theme.media.desktop`
    position: absolute;
    top: 12.5rem;
    left: 51.7rem;
    width: 24.7rem;
    height: 4.8rem;
    text-align: left;
  `}

  ${(props) => props.theme.media.wide`
    position: absolute;
    top: 12.5rem;
    left: 51.7rem;
    width: 24.7rem;
    height: 4.8rem;
    text-align: left;
  `}
`;

export const BoxContents = styled.div`
  color: ${(props) => theme.colors.white};
  text-align: center;
  ${(props) => props.theme.typography[DeviceProvider()].body};

  ${(props) => props.theme.media.mobile`
    position: absolute;
    top: 37.2rem;
    width: 27.5rem;
    height: 4.8rem;
  `}

  ${(props) => props.theme.media.tablet`
    position: absolute;
    top: 46.1rem;
    width: 31rem;
    height: 5.4rem;
  `}

  ${(props) => props.theme.media.desktop`
    position: absolute;
    top: 18.7rem;
    left: 51.7rem;
    width: 36rem;
    height: 5.8rem;
    text-align: left;
  `}

  ${(props) => props.theme.media.wide`
    position: absolute;
    top: 18.7rem;
    left: 51.7rem;
    width: 36rem;
    height: 5.8rem;
    text-align: left;
  `}
`;

export const GotoButton = styled.div`
  position: absolute;
  width: 16.3rem;
  height: 4.6rem;
  padding: 1rem 1.2rem 1rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 1.2rem;
  border: 0.1rem solid ${(props) => theme.colors.white};
  ${(props) => props.theme.media.mobile`
    top: 45.2rem;
  `}

  ${(props) => props.theme.media.tablet`
    top: 55.2rem;
  `}

  ${(props) => props.theme.media.desktop`
    top: 2rem;
    right: 1.8rem;
  `}

  ${(props) => props.theme.media.wide`
    top: 2rem;
    right: 1.8rem;
  `}
`;

export const GotoButtonText = styled.div`
  width: 10rem;
  height: 1.9rem;
  color: ${(props) => theme.colors.white};
  text-align: center;
  ${(props) => props.theme.typography.common.button1};
`;

export const Group = styled.div`
  position: absolute;
  top: 35.5rem;
  left: 51.7rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const DescriptionGroup = styled.div`
  width: 31rem;
  height: 2.4rem;
  display: flex;
  flex-direction: row;
  flex-shrink: 0;
  gap: 0.8rem;
`;

export const Icon = styled.div`
  width: 2.4rem;
  height: 2.4rem;
  background: ${(props) => props.theme.colors.black};
`;

export const Description = styled.div`
  width: 30rem;
  height: 2.1rem;
  color: ${(props) => props.theme.colors.white};
  opacity: 0.7;
  ${(props) => props.theme.typography.common.caption1};
`;
