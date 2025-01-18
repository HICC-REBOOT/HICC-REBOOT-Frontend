import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '@assets/image/logo.svg';
import STYLE from '@constants/style';
import hexToRGBA from '@utils/hexToRgba';

export const Container = styled.div`
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
  backdrop-filter: blur(0.6rem);
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 4.8rem;
  height: 4rem;
  margin-right: 0.8rem;

  border-radius: 1.2rem;
  background: ${(props) => hexToRGBA(props.theme.colors.grey002, 0.3)};

  cursor: pointer;
`;

export const Logo = styled(Link)`
  display: inline-block;
  width: 3.04rem;
  height: 2.6rem;
  background-image: url(${logo});

  background-repeat: no-repeat;
  background-size: contain;
`;

export const LogoImage = styled.img`
  display: inline-block;
  width: 3.04rem;
  height: 2.6rem;
  object-fit: contain;
`;

export const Tab = styled(Link)<{ $active: boolean }>`
  margin-right: 0.8rem;
  padding: 1rem 0.5rem;

  color: ${(props) => (props.$active ? props.theme.colors.point2 : props.theme.colors.white)};
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

export const User = styled.img`
  position: fixed;
  top: 3.7rem;
  right: 2%;
  z-index: ${STYLE.Z_INDEX.TOP_PRIORITY};

  width: 4rem;
  height: 4rem;

  cursor: pointer;
`;
