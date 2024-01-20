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
        <T.Essential>필수</T.Essential>
        <T.CheckText>이용약관에 동의합니다.</T.CheckText>
        <T.CheckBox>체크박스</T.CheckBox>
      </T.CheckerWrapper>
      <T.CheckerWrapper>
        <T.Essential>필수</T.Essential>
        <T.CheckText>이용약관에 동의합니다.</T.CheckText>
        <T.CheckBox>체크박스</T.CheckBox>
      </T.CheckerWrapper>
      <T.CheckerWrapper>
        <T.Essential>필수</T.Essential>
        <T.CheckText>이용약관에 동의합니다.</T.CheckText>
        <T.CheckBox>체크박스</T.CheckBox>
      </T.CheckerWrapper>
    </>
  );
}
