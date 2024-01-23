import styled from 'styled-components';

export const Count = styled.div`
  width: 100%;
  padding: 2rem;

  border-left: 0.05rem solid ${(props) => props.theme.colors.grey001};
  border-right: 0.05rem solid ${(props) => props.theme.colors.grey001};

  color: ${(props) => props.theme.colors.white};
  ${(props) => props.theme.typography.common.button1};
`;

export const T = styled.div``;
