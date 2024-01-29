import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  padding: 2rem 1.6rem;
`;

export const WriteButton = styled(Link)<{ $hide: boolean }>`
  display: ${(props) => (props.$hide ? 'none' : 'flex')};
  height: 4.6rem;
  padding: 1rem 2rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  border-radius: 0.8rem;
  background: ${(props) => props.theme.colors.point1};

  color: ${(props) => props.theme.colors.white};
  ${(props) => props.theme.typography.common.button1};
  text-align: center;
  font-feature-settings:
    'clig' off,
    'liga' off;
`;
