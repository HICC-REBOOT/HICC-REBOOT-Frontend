import React from 'react';
import { GRADE_ENUM, Grade } from '@components/type/CommonType';
import time from '@utils/time';
import Authorization from '@utils/Authorization';
import * as W from './style/WriteInfo.style';

interface WriteInfoProps {
  grade: Grade;
  name: string;
  date: string;
}

function WriteInfo({ grade, name, date }: WriteInfoProps) {
  const isLeaveUser = name === '';

  const showName = () => {
    if (isLeaveUser) {
      return '(알 수 없음)';
    }

    return name;
  };

  return (
    <W.Container>
      <W.WriterPart>
        <W.GradeTag $show={Authorization.isMoreThanExecutive(grade) && !isLeaveUser}>{GRADE_ENUM[grade]}</W.GradeTag>
        <W.Writer>{showName()}</W.Writer>
      </W.WriterPart>
      <W.WriteTime>{time(date)}</W.WriteTime>
    </W.Container>
  );
}

export default WriteInfo;
