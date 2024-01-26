import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: 100%;

  min-width: 360px;
  overflow: hidden;
  background-color: ${(props) => props.theme.colors.black};
`;

export const D = styled.div;
