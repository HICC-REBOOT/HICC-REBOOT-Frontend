import React from 'react';
import { ReactComponent as KeyboardReturn } from '@assets/image/icon/keyboardReturn.svg';
import WriteInfo from '@components/community/common/WriteInfo';
import { NestedCommentType } from '@components/community/CommunityType';
import * as N from './NestedComment.style';

interface NestedCommentProps {
  nestedComment: NestedCommentType;
}

function NestedComment({ nestedComment }: NestedCommentProps) {
  const deleteNestedComment = (commentId: number) => {};

  return (
    <N.Container>
      <KeyboardReturn />
      <N.Content>
        <WriteInfo name={nestedComment.name} grade={nestedComment.grade} date={nestedComment.date} />
        <N.P>{nestedComment.content}</N.P>
        <N.DeleteButton isMine={true} onClick={() => deleteNestedComment(nestedComment.commentId)}>
          삭제
        </N.DeleteButton>
      </N.Content>
    </N.Container>
  );
}

export default NestedComment;
