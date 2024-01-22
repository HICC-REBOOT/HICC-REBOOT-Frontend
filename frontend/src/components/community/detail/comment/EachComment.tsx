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
      (nestedComment) => nestedComment.parent_comment_id === comment.comment_id,
    );

    if (nestedCommentByParent.length === 0) {
      return null;
    }

    return nestedCommentByParent.map((nested) => (
      <NestedComment key={`${nested.parent_comment_id}-${nested.comment_id}`} nestedComment={nested} />
    ));
  };

  return (
    <EA.Container>
      <WriteInfo grade={comment.grade} name={comment.name} date={comment.date} />
      <EA.Content>{comment.content}</EA.Content>
      <Buttons
        normal={{ label: '답글 달기', onClick: () => enrollNestedComment(comment.comment_id) }}
        dangerous={{ label: '삭제', onClick: () => deleteComment(comment.comment_id) }}
      />
      {getNestedCommentByParent()}
    </EA.Container>
  );
}

export default EachComment;
