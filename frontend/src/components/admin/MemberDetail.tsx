import React from 'react';
import * as M from './style/MemberDetail';

const mClass = '회원';
const mMajor = '컴퓨터공학과';
const mGrade = 'B123456';
const mPhone = '010-1234-5678';
const mAcceptDate = '2024-01-08 16:49';

export default function MemberDetail() {
  return (
    <M.DetailBox>
      <M.Class>등급: {mClass}</M.Class>
      <M.Major>학과: {mMajor}</M.Major>
      <M.Grade>학번: {mGrade}</M.Grade>
      <M.Phone>연락처: {mPhone}</M.Phone>
      <M.AcceptDate>회원 승인일: {mAcceptDate}</M.AcceptDate>
    </M.DetailBox>
  );
}
