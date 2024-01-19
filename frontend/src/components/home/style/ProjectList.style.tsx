import styled from 'styled-components';
import { DeviceProvider } from '@assets/mediaQuery';
import theme from '@styles/theme';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${(props) => theme.colors.black};
`;

export const GroupContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${(props) => props.theme.media.mobile`
    width: 33rem;
    height: 72rem;
  `}

  ${(props) => props.theme.media.tablet`
    width: 72rem;
    height: 71.1rem;
  `}

  ${(props) => props.theme.media.desktop`
    width: 124.8rem;
    height: 90.3rem;
  `}

  ${(props) => props.theme.media.wide`
    width: 124.8rem;
    height: 90.3rem;
  `}
`;

export const Title = styled.div`
  position: relative;
  text-align: center;
  color: ${(props) => theme.colors.white};
  ${(props) => props.theme.typography[DeviceProvider()].title};

  ${(props) => props.theme.media.mobile`
    width: 32.9rem;
    height: 2.5rem;
  `}

  ${(props) => props.theme.media.tablet`
    width: 51.7rem;
    height: 4rem;
  `}

  ${(props) => props.theme.media.desktop`
    width: 40rem;
    height: 4.8rem;
  `}

  ${(props) => props.theme.media.wide`
    width: 40rem;
    height: 4.8rem;
  `}
`;

export const Content = styled.div`
  position: relative;
  text-align: center;
  color: ${(props) => theme.colors.white};
  opacity: 0.7;
  ${(props) => props.theme.typography[DeviceProvider()].body};

  ${(props) => props.theme.media.mobile`
    top: 1.6rem;
    width: 19rem;
    height: 4.8rem;
  `}

  ${(props) => props.theme.media.tablet`
    top: 1.3rem;
    width: 46.7rem;
    height: 2.7rem;
  `}

  ${(props) => props.theme.media.desktop`
    top: 1.6rem;
    width: 46.7rem;
    height: 2.9rem;
  `}

  ${(props) => props.theme.media.wide`
    top: 1.6rem;
    width: 46.7rem;
    height: 2.9rem;
  `}
`;

export const ListContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  /* align-items: flex-start; */
  gap: 2.4rem;

  ${(props) => props.theme.media.mobile`
    top: 6.4rem;
    height: 41.9rem;
  `}

  ${(props) => props.theme.media.tablet`
    top: 6.1rem;
    height: 41.4rem;
  `}

  ${(props) => props.theme.media.desktop`
    top: 6.4rem;
    height: 44.5rem;
  `}

  ${(props) => props.theme.media.wide`
    top: 6.4rem;
    height: 44.5rem;
  `}
`;

export const ListBox = styled.div`
  position: relative;
  justify-content: center;
  background: ${(props) => theme.colors.grey001};
  flex-shrink: 0;

  ${(props) => props.theme.media.mobile`
    display: flex;
    width: 25rem;
    height: 39.9rem;
    flex-shrink: 0;
    border-radius: 2.4rem;
  `}

  ${(props) => props.theme.media.tablet`
    display: flex;
    width: 25.6rem;
    height: 39.4rem;
    padding: var(--Column, 0.8rem);

    justify-content: center;
    gap: 1rem;
    flex-shrink: 0;
    border-radius: 1.6rem;
  `}

  ${(props) => props.theme.media.desktop`
    display: flex;
    width: 27.6rem;
    height: 42.5rem;
    padding: 0.8rem;
    justify-content: center;
    gap: 1rem;
    flex-shrink: 0;

    border-radius: 1.6rem;
  `}

  ${(props) => props.theme.media.wide`    
    display: flex;
    width: 27.6rem;
    height: 42.5rem;
    padding: 0.8rem;
    justify-content: center;
    gap: 1rem;
    flex-shrink: 0;

    border-radius: 1.6rem;
  `};
`;

export const Picture = styled.div`
  position: relative;
  background: ${(props) => theme.colors.black};
  ${(props) => props.theme.media.mobile`
    top: 0.8rem;
    width: 23.4rem;
    height: 22.2rem;
    flex-shrink: 0;

    border-radius: 2rem;
  `}

  ${(props) => props.theme.media.tablet`
    width: 23.4rem;
    height: 22.2rem;
    flex-shrink: 0;

    border-radius: 2rem;
  `}

  ${(props) => props.theme.media.desktop`
    width: 26rem;
    height: 24.7rem;
    flex-shrink: 0;

    border-radius: 2rem;
  `}

  ${(props) => props.theme.media.wide`
    width: 26rem;
    height: 24.7rem;
    flex-shrink: 0;

    border-radius: 2rem;
  `}
`;

export const ListBoxTitle = styled.div`
  position: absolute;
  text-align: left;
  color: ${(props) => theme.colors.white};
  ${(props) => props.theme.typography[DeviceProvider()].subtitle};

  ${(props) => props.theme.media.mobile`
    top: 24.6rem;
    width: 23rem;
    height: 2.1rem;
  `}

  ${(props) => props.theme.media.tablet`
    top: 23.9rem;
    width: 23.4rem;
    height: 3rem;
  `}

  ${(props) => props.theme.media.desktop`
    top: 27.1rem; 
    width: 26rem;
    height: 3.5rem;
    line-height: unset;
    // figma와 오차가 있어서 line-height를 위와 같이 바꾸자 figma와 같아짐
  `}

  ${(props) => props.theme.media.wide`
    top: 27.1rem; 
    width: 26rem;
    height: 3.5rem;
    line-height: unset;
  `}
`;

export const ListBoxContent = styled.div`
  position: absolute;
  overflow: hidden;
  color: ${(props) => theme.colors.white};
  opacity: 0.7;
  ${(props) => props.theme.typography[DeviceProvider()].body};

  ${(props) => props.theme.media.mobile`
    top: 29.3rem;
    width: 23rem;
    height: 5.2rem;
  `}

  ${(props) => props.theme.media.tablet`
    top: 29.4rem;
    width: 23.4rem;
    height: 5.4rem;
  `}

  ${(props) => props.theme.media.desktop`
    top: 32.2rem;
    width: 26rem;
    height: 5.8rem;
  `}

  ${(props) => props.theme.media.wide`
    top: 32.2rem;
    width: 26rem;
    height: 5.8rem;
  `}
`;

export const ListBoxPar = styled.div`
  position: absolute;
  ${(props) => props.theme.typography.common.caption1};
  right: 0.8rem;
  display: inline-flex;
  padding: 0.5rem 1.2rem;
  justify-content: center;
  align-items: center;

  border-radius: 10rem;
  background: rgba(105, 99, 255, 0.15);
  ${(props) => props.theme.media.mobile`
    top: 24.6rem;
    width: 8.5rem;
    height: 2.4rem;
  `}

  ${(props) => props.theme.media.tablet`
    top: 24.6rem;
    width: 7.4rem;
    height: 2.1rem;
  `}
  ${(props) => props.theme.media.desktop`
    top: 27.2rem;
    width: 7.4rem;
    height: 2.1rem;
  `}

  ${(props) => props.theme.media.wide`
    top: 27.2rem;
    width: 7.4rem;
    height: 2.1rem;
  `}
`;

export const Person = styled.div`
  width: 8.5rem;
  height: 2.1rem;
  flex-shrink: 0;
  text-align: center;
  color: ${(props) => theme.colors.point1};
  ${(props) => props.theme.typography.common.caption1};
`;
