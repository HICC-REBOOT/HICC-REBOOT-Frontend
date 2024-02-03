import { DeviceProvider } from '@assets/mediaQuery';
import STYLE from '@constants/style';
import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Box = styled.div`
  position: relative;
  border-radius: 1.6rem;
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
  background: ${(props) => props.theme.colors.black};
  z-index: ${STYLE.Z_INDEX.COMMON};
  border-radius: 1.6rem;
  overflow: hidden;
`;

export const BoxImage = styled(motion.img)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: ${STYLE.Z_INDEX.HIDE};
  border-radius: 1.6rem;
`;

export const BoxFilter = styled.div<{ filter: string }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: all 0.5s;
  background: ${(props) => {
    if (props.filter === 'active')
      return 'linear-gradient(105deg, rgba(105, 99, 255, 0.2) 27.65%, rgba(105, 99, 255, 0) 78.26%)';
    return {};
  }};
  opacity: ${(props) => (props.filter === 'active' ? 1 : 0)};
  transition: opacity 0.5s;
`;

export const BoxTitle = styled.div`
  position: relative;
  color: ${(props) => props.theme.colors.white};

  text-align: left;
  ${(props) => props.theme.typography[DeviceProvider()].subtitle};

  z-index: ${STYLE.Z_INDEX.COMMON};

  ${(props) => props.theme.media.mobile`
    margin: 4.4rem 0 1.6rem 2.8rem;
  `};

  ${(props) => props.theme.media.tablet`
    margin: 3.7rem 0 1.4rem 2.8rem;
  `};

  ${(props) => props.theme.media.desktop`
    margin: 3.7rem 0 1.4rem 2.8rem;
  `};

  ${(props) => props.theme.media.wide`
    margin: 3.7rem 0 1.4rem 2.8rem;
  `};
`;

export const BoxContent = styled.div`
  position: relative;
  margin-left: 2.8rem;
  color: ${(props) => props.theme.colors.white};
  ${(props) => props.theme.typography.common.caption1};

  z-index: ${STYLE.Z_INDEX.COMMON};
  white-space: pre-line;
  text-align: start;
`;

export const SmallBox = styled.div`
  position: relative;
  border-radius: 1.6rem;
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
  background: ${(props) => props.theme.colors.black};
  z-index: ${STYLE.Z_INDEX.COMMON};
  border-radius: 1.6rem;
  overflow: hidden;
`;

export const SmallBoxImage = styled(motion.img)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: ${STYLE.Z_INDEX.HIDE};
  border-radius: 1.6rem;
`;

export const SmallBoxTitle = styled.div`
  position: relative;
  color: ${(props) => props.theme.colors.white};

  text-align: left;
  ${(props) => props.theme.typography[DeviceProvider()].subtitle};

  z-index: ${STYLE.Z_INDEX.COMMON};

  ${(props) => props.theme.media.mobile`
    margin-top: 4rem;
    margin-left: 2.4rem;
    width: 11.6rem;
    height: 4.2.rem;
  `}

  ${(props) => props.theme.media.tablet`
    margin-top: 3.7rem;
    margin-left: 2.8rem;
    width: 18.1rem;
    height: 6rem;
  `}

  ${(props) => props.theme.media.desktop`
    margin-top: 3.5rem;
    margin-left: 2.8rem;
    width: 18rem;
    height: 7rem;
  `}

  ${(props) => props.theme.media.wide`
    margin-top: 3.5rem;
    margin-left: 2.8rem;
    width: 18rem;
    height: 7rem;
  `}
`;
