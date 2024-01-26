import styled from 'styled-components';
import { Button } from 'antd';

export const Container = styled.div`
  width: 100%;
  display: flex;
  gap: 0.4rem;
`;

export const Type = styled(Button)`
  ${(props) => props.theme.typography.common.caption1};
`;
