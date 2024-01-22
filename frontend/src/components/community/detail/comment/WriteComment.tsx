import React from 'react';
import useInput from '@hooks/useInput';
import { ReactComponent as Send } from '@assets/image/icon/send.svg';
import * as WC from './WriteComment.style';

function WriteComment() {
  const [comment, setComment] = useInput<string>('');

  return (
    <WC.Container>
      <WC.InputContainer>
        <WC.Input type="text" value={comment} onChange={setComment} />
        <Send />
      </WC.InputContainer>
    </WC.Container>
  );
}

export default WriteComment;
