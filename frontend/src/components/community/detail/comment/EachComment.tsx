import React from 'react';
import { ParentComment } from '@components/community/CommunityType';
import WriteInfo from '@components/community/common/WriteInfo';
import Buttons from '@components/community/common/Buttons';
import * as EA from './EachComment.style';

interface EachCommentProps {
  comment: ParentComment;
}

function EachComment({ comment }: EachCommentProps) {
  const enrollNestedComment = (commentId: number) => {};
  const deleteComment = (commentId: number) => {};

  return (
    <EA.Container>
      <WriteInfo grade={comment.grade} name={comment.name} date={comment.date} />
      <EA.Content>{comment.content}</EA.Content>
      <Buttons
        normal={{ label: '답글 달기', onClick: () => enrollNestedComment(comment.comment_id) }}
        dangerous={{ label: '삭제', onClick: () => deleteComment(comment.comment_id) }}
      />
    </EA.Container>
  );
}

export default EachComment;
