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
  position: fixed;
  top: 0;
  width: 100%;
  z-index: ${STYLE.Z_INDEX.TOP_PRIORITY + 1};

  border-radius: 0rem 0rem 1.6rem 1.6rem;
  background: ${(props) => props.theme.colors.grey001};
`;

export const Inner = styled.nav`
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
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
  color: ${(props) => (props.active ? props.theme.colors.point2 : props.theme.colors.white)};
  ${(props) => props.theme.typography[DeviceProvider()].body};
  text-transform: capitalize;
  text-align: center;
  cursor: pointer;
`;
