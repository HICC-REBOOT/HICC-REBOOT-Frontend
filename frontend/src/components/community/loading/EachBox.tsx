import React from 'react';
import * as S from './Skeleton.style';

function EachBox() {
  return (
    <S.Container>
      <S.SubjectPart>
        <S.Subject />
      </S.SubjectPart>
      <S.RestContainer>
        <S.WriterPart>
          <S.GradeTag />
          <S.Writer />
        </S.WriterPart>
        <S.WriteTime />
      </S.RestContainer>
    </S.Container>
  );
}

export default EachBox;
