import React from 'react';
import * as T from './style/Terms.style';

export default function Terms() {
  return (
    <>
      <T.Title>약관동의</T.Title>
      <T.TermBox>
        <T.TextArea>약관동의 내용</T.TextArea>
        <T.ScrollBal>scroll</T.ScrollBal>
      </T.TermBox>
      <T.Title>안내사항</T.Title>
      <T.TermBox>
        <T.TextArea>안내사항 내용</T.TextArea>
        <T.ScrollBal>scroll</T.ScrollBal>
      </T.TermBox>
      <T.CheckerWrapper>
        <T.Essential>
          <T.EssentialText>필수</T.EssentialText>
        </T.Essential>
        <T.CheckText>이용약관에 동의합니다.</T.CheckText>
        <T.CheckBox>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M19 5V19H5V5H19ZM19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3Z"
              fill="#C6C7CA"
            />
          </svg>
        </T.CheckBox>
      </T.CheckerWrapper>
      <T.CheckerWrapper>
        <T.Essential>
          <T.EssentialText>필수</T.EssentialText>
        </T.Essential>
        <T.CheckText>이용약관에 동의합니다.</T.CheckText>
        <T.CheckBox>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M19 5V19H5V5H19ZM19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3Z"
              fill="#C6C7CA"
            />
          </svg>
        </T.CheckBox>
      </T.CheckerWrapper>
      <T.CheckerWrapper>
        <T.Essential>
          <T.EssentialText>필수</T.EssentialText>
        </T.Essential>
        <T.CheckText>이용약관에 동의합니다.</T.CheckText>
        <T.CheckBox>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M19 5V19H5V5H19ZM19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3Z"
              fill="#C6C7CA"
            />
          </svg>
        </T.CheckBox>
      </T.CheckerWrapper>
      <T.CountinueButton>가입 진행하기</T.CountinueButton>
    </>
  );
}
