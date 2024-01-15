import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 3.6rem 1.6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.8rem;
  background-color: ${(props) => props.theme.colors.black};
`;

export const DetailBox = styled.div`
  background-color: white;
  border-radius: 1.6rem;
  padding: 1.1rem;
`;
