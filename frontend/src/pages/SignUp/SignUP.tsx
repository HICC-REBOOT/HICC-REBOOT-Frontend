/* eslint-disable no-use-before-define */
import Terms from '@components/signup/Terms';
import React from 'react';
import styled from 'styled-components';

export default function SignUp() {
  return (
    <Container>
      <Terms />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 3.6rem 1.6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.8rem;
  color: white;
  background-color: ${(props) => props.theme.colors.black};
  ${(props) => props.theme.media.desktop`
    margin-top: 18.8rem;
  `};

  ${(props) => props.theme.media.wide`
    margin-top: 18.8rem;
  `};
`;
