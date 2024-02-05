import React from 'react';
import * as M from './style/MemberDetail';

export interface UserData {
  id: number;
  grade: string;
  name: string;
  studentNumber: string;
  department: string;
  phoneNumber: string;
  approvedDate: string | null;
}

interface MemberDetailProps {
  userData: UserData;
}

export default function MemberDetail({ userData }: MemberDetailProps) {
  return (
    <M.DetailBox>
      <M.Class>등급: {userData.grade}</M.Class>
      <M.Major>학과: {userData.department}</M.Major>
      <M.Grade>학번: {userData.studentNumber}</M.Grade>
      <M.Phone>연락처: {userData.phoneNumber}</M.Phone>
      <M.AcceptDate>회원 승인일: {userData.approvedDate}</M.AcceptDate>
    </M.DetailBox>
  );
}
