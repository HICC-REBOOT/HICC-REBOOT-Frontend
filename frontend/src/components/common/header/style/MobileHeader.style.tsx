import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '@assets/image/logo.svg';
import STYLE from '@constants/style';

export const Container = styled.nav<{ $home: boolean }>`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 4.8rem;

  padding: 1.6rem 1.2rem;
  z-index: ${STYLE.Z_INDEX.TOP_PRIORITY};

  border: none;
  background-color: ${(props) => (props.$home ? props.theme.colors.grey001 : props.theme.colors.black)};
`;

export const Logo = styled(Link)`
  background-image: url(${logo});
  width: 3.04rem;
  height: 2.6rem;

  background-repeat: no-repeat;
  background-size: contain;
`;

export const Hamburger = styled.img`
  width: 2.4rem;
  height: 2.4rem;
  cursor: pointer;
`;

export const PreviousButton = styled.img`
  width: 2.4rem;
  height: 2.4rem;
  cursor: pointer;
`;

export const RightSide = styled.aside`
  display: flex;
  align-items: center;

  & > img {
    margin-left: 1.6rem;
  }
`;

export const User = styled.img`
  width: 2.4rem;
  height: 2.4rem;
  cursor: pointer;
`;

export const HeaderTopMargin = styled.div`
  width: 100%;
  height: 4.8rem;
`;
