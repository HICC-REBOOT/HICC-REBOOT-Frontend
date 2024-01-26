/* eslint-disable no-use-before-define */
import React from 'react';
import styled from 'styled-components';
import * as E from './style/EnterInfo.style';

export default function EnterInfo() {
  return (
    <Container>
      <E.Wrapper>
        <E.InputWrapper>
          <E.Label>이름(실명)</E.Label>
          <E.InputField>
            <E.InputFieldInput placeholder="홍길동" />
          </E.InputField>
          <E.ErrorMessage>에러메시지</E.ErrorMessage>
        </E.InputWrapper>
        <E.InputWrapper>
          <E.Label>전화번호</E.Label>
          <E.PhoneNumWrapper>
            <E.PhoneNumField>
              <E.PhoneNumFieldInput placeholder="010" />
            </E.PhoneNumField>
            <E.PhoneNumField>
              <E.PhoneNumFieldInput placeholder="1234" />
            </E.PhoneNumField>
            <E.PhoneNumField>
              <E.PhoneNumFieldInput placeholder="5678" />
            </E.PhoneNumField>
          </E.PhoneNumWrapper>
        </E.InputWrapper>
      </E.Wrapper>
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
`;
