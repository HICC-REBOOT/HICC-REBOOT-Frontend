import { DeviceProvider } from '@assets/mediaQuery';
import STYLE from '@constants/style';
import hexToRGBA from '@utils/hexToRgba';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Backdrop = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: ${STYLE.Z_INDEX.COMMON};

  background-color: rgba(0, 0, 0, 0.6);
`;

export const Container = styled(motion.aside)`
  position: absolute;
  width: 100%;
  z-index: ${STYLE.Z_INDEX.TOP_PRIORITY};

  border-radius: 0rem 0rem 1.6rem 1.6rem;
  background: ${(props) => props.theme.colors.grey001};
`;

export const Inner = styled(motion.nav)`
  display: flex;
  flex-direction: column;
`;

export const CloseButton = styled.img`
  width: 2.4rem;
  height: 2.4rem;
  flex-shrink: 0;
  cursor: pointer;
`;

export const Tab = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 5.4rem;

  background-color: ${(props) => props.theme.colors.grey001};

  &:first-child {
    justify-content: flex-end;
    padding: 1.6rem;
  }
`;

export const LinkButton = styled(Link)<{ active: boolean }>`
  margin: 1.5rem 3.1rem;

  color: ${(props) => (props.active ? props.theme.colors.point2 : props.theme.colors.white)};
  ${(props) => props.theme.typography[DeviceProvider()].body};
  text-transform: capitalize;
  text-align: center;
  cursor: pointer;
`;

export const Auth = styled(Link)`
  --border-width: 0.1rem;
  --border-radius: 1.2rem;
  --gradient: linear-gradient(180deg, #ffffff77, #ffffff11);

  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 4.6rem;
  margin: 0.4rem 1.6rem;

  background: var(--gradient);

  border-radius: var(--border-radius);
  background-color: ${(props) => hexToRGBA(props.theme.colors.grey002, 0.3)};

  color: ${(props) => props.theme.colors.white};
  ${(props) => props.theme.typography.common.button1};

  white-space: nowrap;
  cursor: pointer;
  z-index: ${STYLE.Z_INDEX.COMMON};

  &::before {
    content: '';
    display: block;
    width: calc(100% - calc(var(--border-width) * 2.5));
    height: calc(100% - calc(var(--border-width) * 2.5));

    background-color: #353538;
    position: absolute;

    top: var(--border-width);
    left: var(--border-width);

    border-radius: calc(var(--border-radius) - var(--border-width));
    z-index: ${STYLE.Z_INDEX.HIDE};
  }
`;

export const JoinHICC = styled.button`
  --border-width: 0.1rem;
  --border-radius: 1.2rem;
  --gradient: linear-gradient(225deg, #53ffcb, #5b4ef5);

  position: relative;
  width: 100%;
  height: 4.6rem;
  margin: 0.4rem 1.6rem;

  background: var(--gradient);

  border-radius: var(--border-radius);
  background-color: ${(props) => hexToRGBA(props.theme.colors.grey002, 0.3)};

  color: ${(props) => props.theme.colors.white};
  ${(props) => props.theme.typography.common.button1};

  text-align: center;
  white-space: nowrap;
  cursor: pointer;
  z-index: ${STYLE.Z_INDEX.COMMON};

  &::before {
    content: '';
    display: block;
    width: calc(100% - calc(var(--border-width) * 2.5));
    height: calc(100% - calc(var(--border-width) * 2.5));

    background-color: ${(props) => props.theme.colors.black};
    position: absolute;

    top: var(--border-width);
    left: var(--border-width);

    border-radius: calc(var(--border-radius) - var(--border-width));
    z-index: ${STYLE.Z_INDEX.HIDE};
  }
`;
