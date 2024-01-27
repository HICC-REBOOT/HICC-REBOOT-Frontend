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
