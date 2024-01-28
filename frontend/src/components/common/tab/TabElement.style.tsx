import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled(motion.div)`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  flex: 1;

  color: ${(props) => props.theme.colors.white};
  ${(props) => props.theme.typography.common.button1};
`;

export const Indicator = styled(motion.div)`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 0.1rem;
  background-color: ${(props) => props.theme.colors.point1};
`;
