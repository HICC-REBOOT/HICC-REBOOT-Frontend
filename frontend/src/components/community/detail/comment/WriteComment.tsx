import React, { useRef } from 'react';
import useInput from '@hooks/useInput';
import { ReactComponent as Send } from '@assets/image/icon/send.svg';
import useNestedComment from '@hooks/useNestedComment';
import useOutsideClick from '@hooks/useOutsideClick';
import * as WC from './WriteComment.style';

function WriteComment() {
  const [comment, setComment] = useInput<string>('');

  const onSubmit = () => {
    if (comment.trim() === '') return null;

    // 백엔드 연결
    return 'hello';
  };

  const writeCommentRef = useRef(null);
  const { nestedId, outsideClick } = useNestedComment();

  useOutsideClick(writeCommentRef, outsideClick);

  const makePlaceholder = () => {
    if (nestedId !== null) {
      return '대댓글 입력';
    }
    return '댓글 입력';
  };

  return (
    <WC.Container ref={writeCommentRef}>
      <WC.InputContainer>
        <WC.Input type="text" placeholder={makePlaceholder()} value={comment} onChange={setComment} />
        <Send onClick={onSubmit} />
      </WC.InputContainer>
    </WC.Container>
  );
}

export default WriteComment;
