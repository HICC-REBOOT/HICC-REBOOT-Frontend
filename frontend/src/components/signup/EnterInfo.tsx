/* eslint-disable no-use-before-define */
import React, { useState } from 'react';
import styled from 'styled-components';
import Search from '@assets/image/icon/search.svg';
import { useNavigate } from 'react-router-dom';
import ROUTE from '@constants/route';
import InputMemberInfo from './InputMemberInfo';
import * as E from './style/EnterInfo.style';

export default function EnterInfo() {
  const [major, setMajor] = useState('');
  const navigate = useNavigate();

  return (
    <Container>
      <E.Wrapper>
        <E.Wrapper1>
          <InputMemberInfo label="이름(실명)" type="text" errorMessage="2글자 이상 작성해주세요" />
          <InputMemberInfo label="아이디(학번)" type="text" errorMessage="올바른 형식으로 기입해주세요" />
          <InputMemberInfo label="비밀번호" type="password" errorMessage="8글자 이상 입력해주세요" />
          <InputMemberInfo label="비밀번호 확인" type="password" errorMessage="8글자 이상 입력해주세요" />
        </E.Wrapper1>
        <E.Wrapper2>
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
          <E.InputWrapper>
            <E.Label>학과</E.Label>
            <E.DropDownWrapper>
              <E.DropDown>
                <E.DropDownItem>{major}</E.DropDownItem>
                <SearchButton src={Search} alt="search" />
              </E.DropDown>
              <E.ScrollContainer>
                <E.ScrollBox>
                  <E.ScrollItem onClick={() => setMajor('시각디자인과')}>
                    <E.ScrollDropDownItem>시각디자인과</E.ScrollDropDownItem>
                  </E.ScrollItem>
                  <E.ScrollItem onClick={() => setMajor('시각디자인과')}>
                    <E.ScrollDropDownItem>시각디자인과</E.ScrollDropDownItem>
                  </E.ScrollItem>
                  <E.ScrollItem onClick={() => setMajor('시각디자인과')}>
                    <E.ScrollDropDownItem>시각디자인과</E.ScrollDropDownItem>
                  </E.ScrollItem>
                  <E.ScrollItem onClick={() => setMajor('시각디자인과')}>
                    <E.ScrollDropDownItem>시각디자인과</E.ScrollDropDownItem>
                  </E.ScrollItem>
                  <E.ScrollItem onClick={() => setMajor('시각디자인과')}>
                    <E.ScrollDropDownItem>시각디자인과</E.ScrollDropDownItem>
                  </E.ScrollItem>
                </E.ScrollBox>
              </E.ScrollContainer>
            </E.DropDownWrapper>
          </E.InputWrapper>
        </E.Wrapper2>
      </E.Wrapper>
      <E.ContinueButton onClick={() => navigate(ROUTE.HOME)}>가입하기</E.ContinueButton>
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
const SearchButton = styled.img`
  width: 2.4rem;
  height: 2.4rem;
  flex-shrink: 0;
  margin-left: 3.1rem;
  &:active {
    opacity: 0.3;
  }
`;
