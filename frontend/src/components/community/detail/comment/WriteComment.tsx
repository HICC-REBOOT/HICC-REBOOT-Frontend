import React from 'react';
import useInput from '@hooks/useInput';
import { ReactComponent as Send } from '@assets/image/icon/send.svg';
import * as WC from './WriteComment.style';

function WriteComment() {
  const [comment, setComment] = useInput<string>('');

  const onSubmit = () => {
    if (comment.trim() === '') return null;

    // 백엔드 연결
    return 'hello';
  };

  return (
    <WC.Container>
      <WC.InputContainer>
        <WC.Input type="text" placeholder="댓글 입력" value={comment} onChange={setComment} />
        <Send onClick={onSubmit} />
      </WC.InputContainer>
    </WC.Container>
  );
}

export default WriteComment;
