import React from 'react';
import * as M from './style/MemberDetail';

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
