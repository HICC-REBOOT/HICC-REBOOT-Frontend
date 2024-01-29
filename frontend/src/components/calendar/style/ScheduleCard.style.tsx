import styled, { css } from 'styled-components';
import { DeviceProvider } from '@assets/mediaQuery';
import { motion } from 'framer-motion';

export const Container = styled.div`
  border-radius: 1.6rem;
  background-color: #141415;
  display: flex;
  justify-content: space-between;
  padding: 0.8rem 1.2rem;
  width: 100%;
  position: relative;
`;

export const Left = styled.div`
  display: flex;
  align-items: flex-start;
  padding-right: 4.8rem;
  width: 100%;
`;

export const TimeContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  padding-right: 0.8rem;
  margin-right: 0.8rem;
  border-right: 0.2rem solid ${(props) => props.theme.colors.white};
`;

export const Time1 = styled.div`
  ${(props) => props.theme.typography[DeviceProvider()].body};
  color: ${(props) => props.theme.colors.white};
`;

export const Time2 = styled.span`
  ${(props) => props.theme.typography.common.caption2};
  color: ${(props) => props.theme.colors.white};
  opacity: 0.7;
`;

export const InfoContainer = styled.div`
  width: 100%;
`;

export const Title = styled.div`
  ${(props) => props.theme.typography[DeviceProvider()].body}
  color: ${(props) => props.theme.colors.white};
  white-space: nowrap;
`;

export const Detail = styled.div<{ isDetailOpen: boolean }>`
  ${(props) => props.theme.typography.common.caption2};
  color: ${(props) => props.theme.colors.white};
  opacity: 0.7;
  text-align: justify;

  ${(props) =>
    !props.isDetailOpen &&
    css`
      width: calc(100% - 6.4rem);
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    `}

  ${(props) => props.theme.media.desktop`
    width: 30rem;
    padding-right: 1.2rem;
  `};

  ${(props) => props.theme.media.wide`
    width: 30rem;
    padding-right: 1.2rem;
  `};
`;

export const Btn = styled.div`
  width: 2.4rem;
  height: 2.4rem;
  flex-shrink: 0;
  position: absolute;
  right: 1.6rem;
  top: 2rem;
`;

export const ArrowIcon = styled(motion.img)`
  width: 2.4rem;
  height: 2.4rem;
  flex-shrink: 0;
  margin-left: 1.2rem;
  position: absolute;
  right: 1.6rem;
  top: 2rem;
  cursor: pointer;
`;
