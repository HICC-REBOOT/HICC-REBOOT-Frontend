import React, { useEffect, useState } from 'react';
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
  const [grade, setGrade] = useState('');
  useEffect(() => {
    if (userData.grade === 'PRESIDENT') {
      setGrade('회장');
    } else if (userData.grade === 'EXECUTIVE') {
      setGrade('운영진');
    } else if (userData.grade === 'NORMAL') {
      setGrade('회원');
    } else {
      setGrade('승인대기자');
    }
  }, [userData.grade]);
  return (
    <M.DetailBox>
      <M.Class>등급: {grade}</M.Class>
      <M.Major>학과: {userData.department}</M.Major>
      <M.Grade>학번: {userData.studentNumber}</M.Grade>
      <M.Phone>연락처: {userData.phoneNumber}</M.Phone>
      <M.AcceptDate>회원 승인일: {userData.approvedDate}</M.AcceptDate>
    </M.DetailBox>
  );
}
