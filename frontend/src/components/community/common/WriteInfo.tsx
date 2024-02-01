import React from 'react';
import { GRADE_ENUM, Grade } from '@components/type/CommonType';
import isMoreThanExecutive from '@utils/isMoreThanExecutive';
import time from '@utils/time';
import * as W from './WriteInfo.style';

interface WriteInfoProps {
  grade: Grade;
  name: string;
  date: string;
}

function WriteInfo({ grade, name, date }: WriteInfoProps) {
  return (
    <W.Container>
      <W.WriterPart>
        <W.GradeTag $show={isMoreThanExecutive(grade)}>{GRADE_ENUM[grade]}</W.GradeTag>
        <W.Writer>{name}</W.Writer>
      </W.WriterPart>
      <W.WriteTime>{time(date)}</W.WriteTime>
    </W.Container>
  );
}

export default WriteInfo;
