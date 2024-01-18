import { Link } from 'react-router-dom';
import styled from 'styled-components';
import DemoLogo from '@assets/image/demologo.png';
import STYLE from '@constants/style';
import hexToRGBA from '@utils/hexToRgba';

export const Container = styled.nav`
  display: flex;
  align-items: center;
  position: fixed;
  top: 3.2rem;
  left: 50%;
  transform: translate3d(-50%, 0, 0);
  z-index: ${STYLE.Z_INDEX.TOP_PRIORITY};

  height: 5.6rem;
  padding: 0.5rem;
  padding-left: 1.2rem;

  border: none;
  border-radius: 1.6rem;
  background-color: ${(props) => hexToRGBA(props.theme.colors.grey002, 0.3)};
`;

export const Logo = styled(Link)`
  background-image: url(${DemoLogo});
  width: 7.8rem;
  height: 3rem;

  margin-right: 2rem;
`;

export const Tab = styled(Link)`
  margin-right: 0.8rem;
  padding: 1rem 0.5rem;

  color: ${(props) => props.theme.colors.white};
  ${(props) => props.theme.typography.common.button1};

  text-transform: capitalize;
  text-align: center;
  cursor: pointer;

  &:hover {
    padding: 1.3rem 0.5rem;
    border-radius: 1.2rem;
    background-color: ${(props) => props.theme.colors.black};
  }
`;

// border gradient 나중에 구현
export const Auth = styled.button`
  position: relative;
  width: 8.2rem;
  height: 4.6rem;

  padding: 0;
  border: 0.1rem solid transparent;
  border-radius: 1.2rem;

  background-color: ${(props) => hexToRGBA(props.theme.colors.grey002, 0.3)};

  color: ${(props) => props.theme.colors.white};
  ${(props) => props.theme.typography.common.button1};

  text-align: center;
  white-space: nowrap;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors.black};
  }

  /* &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 1.2rem;
    padding: 0rem;
    background: linear-gradient(180deg, #fff, #ffffff33);

    -webkit-mask:
      linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  } */
`;
