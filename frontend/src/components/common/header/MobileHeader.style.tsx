import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '@assets/image/logo.svg';

export const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 4.8rem;

  padding: 1.6rem 1.2rem;

  border: none;
  background-color: ${(props) => props.theme.colors.black};
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
