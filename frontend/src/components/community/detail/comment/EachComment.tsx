import React from 'react';
import { NestedCommentType, ParentComment } from '@components/community/CommunityType';
import WriteInfo from '@components/community/common/WriteInfo';
import Buttons from '@components/community/common/Buttons';
import useNestedComment from '@hooks/useNestedComment';
import * as EA from './EachComment.style';
import NestedComment from '../nestedComment/NestedComment';

interface EachCommentProps {
  comment: ParentComment;
  nestedComments: NestedCommentType[];
}

function EachComment({ comment, nestedComments }: EachCommentProps) {
  const { selectedNested } = useNestedComment();

  const enrollNestedComment = (commentId: number) => {
    selectedNested(commentId);
  };

  const deleteComment = (commentId: number) => {};

  const getNestedCommentByParent = () => {
    const nestedCommentByParent = nestedComments.filter(
      (nestedComment) => nestedComment.parentCommentId === comment.commentId,
    );

    if (nestedCommentByParent.length === 0) {
      return null;
    }

    return nestedCommentByParent.map((nested) => (
      <NestedComment key={`${nested.parentCommentId}-${nested.commentId}`} nestedComment={nested} />
    ));
  };

  return (
    <EA.Container>
      <WriteInfo grade={comment.grade} name={comment.name} date={comment.date} />
      <EA.Content>{comment.content}</EA.Content>
      <Buttons
        normal={{ label: '답글 달기', onClick: () => enrollNestedComment(comment.commentId), show: true }}
        dangerous={{ label: '삭제', onClick: () => deleteComment(comment.commentId), show: comment.isMine }}
      />
      {getNestedCommentByParent()}
    </EA.Container>
  );
}

export default EachComment;
