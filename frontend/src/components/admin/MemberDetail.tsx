import React from 'react';
import * as M from './style/MemberDetail';

const mClass = '회원';
const mMajor = '컴퓨터공학과';
const mGrade = 'B123456';
const mPhone = '010-1234-5678';
const mAcceptDate = '2024-01-08 16:49';

interface UserData {
  grade: string;
  name: string;
  id: string;
  major: string;
  phone_number: string;
  acceptDate: string;
}

interface MemberDetailProps {
  userData: UserData;
}

export default function MemberDetail({ userData }: MemberDetailProps) {
  return (
    <M.DetailBox>
      <M.Class>등급: {userData.grade}</M.Class>
      <M.Major>학과: {userData.major}</M.Major>
      <M.Grade>학번: {userData.id}</M.Grade>
      <M.Phone>연락처: {userData.phone_number}</M.Phone>
      <M.AcceptDate>회원 승인일: {userData.acceptDate}</M.AcceptDate>
    </M.DetailBox>
  );
}
