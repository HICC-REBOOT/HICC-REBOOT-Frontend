import STYLE from '@constants/style';
import { motion } from 'framer-motion';
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
  height: 100%;
  z-index: ${STYLE.Z_INDEX.TOP_PRIORITY};

  background-color: ${(props) => props.theme.colors.white};
`;

export const Inner = styled(motion.div)``;
