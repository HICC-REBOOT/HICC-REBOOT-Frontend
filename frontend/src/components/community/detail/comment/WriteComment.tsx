import React, { useRef } from 'react';
import useInput from '@hooks/useInput';
import { ReactComponent as Send } from '@assets/image/icon/send.svg';
import useNestedComment from '@hooks/useNestedComment';
import useOutsideClick from '@hooks/useOutsideClick';
import usePostComment from '@query/post/usePostComment';
import usePostNestedComment from '@query/post/usePostNestedComment';
import KeyboardUtils from '@utils/keyboard';
import * as WC from './style/WriteComment.style';

interface WriteCommentProps {
  id: number;
}

function WriteComment({ id }: WriteCommentProps) {
  const [comment, setComment] = useInput<string>('');

  const writeCommentRef = useRef(null);

  const { nestedId, outsideClick } = useNestedComment();
  const { writeComment, isPending: isCommentPending } = usePostComment({ articleId: id });
  const { writeNestedComment, isPending: isNestedPending } = usePostNestedComment({ articleId: id });

  useOutsideClick(writeCommentRef, outsideClick);

  const onSubmit = () => {
    // pending 상태라면 요청하지 않기
    if (isCommentPending || isNestedPending) return null;

    if (comment.trim() === '') return null;

    // 댓글 작성일 때는 댓글 작성
    if (nestedId === null) {
      writeComment(comment);
      setComment('');
      return null;
    }

    writeNestedComment({ parentCommentId: nestedId, content: comment });
    setComment('');
    return null;
  };

  const makePlaceholder = () => {
    if (nestedId !== null) {
      return '대댓글 입력';
    }
    return '댓글 입력';
  };

  return (
    <WC.Container ref={writeCommentRef}>
      <WC.InputContainer>
        <WC.Input
          type="text"
          placeholder={makePlaceholder()}
          value={comment}
          onChange={setComment}
          onKeyDown={(event) => KeyboardUtils.onPressEnterByInput(event, onSubmit)}
        />
        <Send onClick={onSubmit} />
      </WC.InputContainer>
    </WC.Container>
  );
}

export default WriteComment;
