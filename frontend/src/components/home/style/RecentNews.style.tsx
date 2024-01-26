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
  flex-shrink: 0;
  ${(props) => props.theme.media.mobile`
    width: 32.9rem;
    height: 58.3rem;
    flex-shrink: 0;
  `}

  ${(props) => props.theme.media.tablet`
    width: 72rem;
    height: 63.6rem;
    flex-shrink: 0;
  `}

  ${(props) => props.theme.media.desktop`
    width: 124.8rem;
    height: 73.4rem;
    flex-shrink: 0;
  `}

  ${(props) => props.theme.media.wide`
    width: 124.8rem;
    height: 73.4rem;
    flex-shrink: 0;
  `}
`;

export const Title = styled.div`
  position: relative;
  text-align: center;
  ${(props) => props.theme.typography[DeviceProvider()].title};
  color: ${(props) => theme.colors.white};
  ${(props) => props.theme.media.mobile`
    width: 32.9rem;
    height: 2.5rem;
  `}

  ${(props) => props.theme.media.tablet`
    width: 51.7rem;
    height: 4rem;
  `}

  ${(props) => props.theme.media.desktop`
    width: 51.7em;
    height: 4.8rem;
  `}

  ${(props) => props.theme.media.wide`
    width: 51.7em;
    height: 4.8rem;
  `}
`;

export const Content = styled.div`
  position: relative;
  color: ${(props) => theme.colors.white};
  opacity: 0.7;
  text-align: center;
  ${(props) => props.theme.typography[DeviceProvider()].body};

  ${(props) => props.theme.media.mobile`
    top: 1.6rem;
    width: 19.1rem;
    height: 4.8rem;
  `}

  ${(props) => props.theme.media.tablet`
    top: 1.3rem;
    width: 46.7rem;
    height: 2.7rem;
  `}

  ${(props) => props.theme.media.desktop`
    top: 1.5rem;
    width: 46.7rem;
    height: 3rem;
  `}

  ${(props) => props.theme.media.wide`
    top: 1.5rem;
    width: 46.7rem;
    height: 3rem;
  `}
`;

export const NewsList = styled.div`
  position: relative;
  background: ${(props) => theme.colors.grey001};
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 1.6rem;
  background: rgba(20, 20, 21, 0.8);
  backdrop-filter: blur(15px);

  flex-shrink: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  ${(props) => props.theme.media.mobile`
    top: 4.8rem;
    width: 32.8rem;
  `}

  ${(props) => props.theme.media.tablet`
    top: 5rem;
    width: 72rem;
  `}

  ${(props) => props.theme.media.desktop`
    top: 6.5rem;
    width: 124.8rem;
  `}

  ${(props) => props.theme.media.wide`
    top: 6.5rem;
    width: 124.8rem;
  `}
`;

export const NewsBox = styled.div`
  ${(props) => props.theme.media.mobile`
    display: flex;
    width: 32.8rem;
    padding: 2rem;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 1.2rem;
  `}

  ${(props) => props.theme.media.tablet`
    display: flex;
    width: 53.4rem;
    padding: 2rem;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 1.2rem;
  `}

  ${(props) => props.theme.media.desktop`
    display: flex;
    width: 82.2rem;
    padding: 2rem;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: var(--Column, 1.2rem);
  `}

  ${(props) => props.theme.media.wide`
    display: flex;
    width: 82.2rem;
    padding: 2rem;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: var(--Column, 1.2rem);
  `}
`;

export const NewsTitle = styled.div`
  display: flex;
  height: 2.4rem;
  flex-direction: column;
  justify-content: center;
  align-self: stretch;

  overflow: hidden;
  color: ${(props) => theme.colors.white};
  text-overflow: ellipsis;
  white-space: nowrap;
  ${(props) => props.theme.typography[DeviceProvider()].body};

  ${(props) => props.theme.media.mobile`
    width: 28.8rem;
  `}

  ${(props) => props.theme.media.tablet`
    width: 49.4rem;
  `}

  ${(props) => props.theme.media.desktop`
    width: 78.2rem;
  `}

  ${(props) => props.theme.media.wide`
    width: 78.2rem;
  `}
`;

export const NewsBottom = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  align-self: stretch;
  ${(props) => props.theme.typography[DeviceProvider()].head};

  ${(props) => props.theme.media.mobile`
    width: 28.8rem;
    height: 2.6rem;
  `}

  ${(props) => props.theme.media.tablet`
    width: 49.4rem;
    height: 2.6rem;
  `}

  ${(props) => props.theme.media.desktop`
    width: 78.2rem;
    height: 2.6rem;
  `}

  ${(props) => props.theme.media.wide`
    width: 78.2rem;
    height: 2.6rem;
  `}
`;

export const Label = styled.div`
  width: 5.4rem;
  height: 2.6rem;
  display: flex;
  padding: 0.5rem 1.2rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  border-radius: 2rem;
  background: rgba(255, 255, 255, 0.1);

  color: ${(props) => theme.colors.white};
  font-family: Source Sans Pro;
  font-size: 0.9rem;
  font-style: normal;
  font-weight: 400;
  line-height: 160%; /* 16px */
  letter-spacing: 0.05rem;
`;

export const Writer = styled.div`
  width: 3.5rem;
  height: 1.6rem;
  color: ${(props) => theme.colors.grey002};
  font-family: Source Sans Pro;
  font-size: 0.9rem;
  font-style: normal;
  font-weight: 400;
  line-height: 160%; /* 16px */
  letter-spacing: 0.05rem;
`;

export const Date = styled.div`
  flex: 1 0 0;
  color: ${(props) => theme.colors.white};

  text-align: right;
  font-family: Source Sans Pro;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 160%; /* 16px */
  letter-spacing: 0.05rem;
  ${(props) => props.theme.media.mobile`
    width: 18rem;
    height: 1.6rem;
  `}

  ${(props) => props.theme.media.tablet`
    width: 38.6rem;
    height: 1.6rem;
  `}

  ${(props) => props.theme.media.desktop`
    width: 67.4rem;
    height: 1.6rem;
  `}

  ${(props) => props.theme.media.wide`
    width: 67.4rem;
    height: 1.6rem;
  `}
`;
