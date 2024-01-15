import { Link } from 'react-router-dom';
import styled from 'styled-components';
import DemoLogo from '@assets/image/demologo.png';

// background color색 정해지면 수정 필요
export const Container = styled.nav`
  display: flex;
  align-items: center;
  position: fixed;
  top: 3.2rem;
  left: 50%;
  transform: translate3d(-50%, 0, 0);

  height: 5.6rem;
  padding: 0.5rem;
  padding-left: 1.2rem;

  border: none;
  border-radius: 1.6rem;
  background-color: #545454;
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
`;

export const Auth = styled.button`
  padding: 1rem 2rem;
  border: 0.1rem solid ${(props) => props.theme.colors.white};
  border-radius: 1.2rem;

  color: ${(props) => props.theme.colors.white};
  ${(props) => props.theme.typography.common.button1};

  text-align: center;
  white-space: nowrap;
  cursor: pointer;
`;
