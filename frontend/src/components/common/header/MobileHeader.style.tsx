import { Link } from 'react-router-dom';
import styled from 'styled-components';
import DemoLogo from '@assets/image/demologo.png';

// background color색 정해지면 수정 필요
export const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 4.8rem;

  padding: 0.9rem 1.2rem;

  border: none;
  background-color: ${(props) => props.theme.colors.grey001};
`;

export const Logo = styled(Link)`
  background-image: url(${DemoLogo});
  width: 7.8rem;
  height: 3rem;
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
