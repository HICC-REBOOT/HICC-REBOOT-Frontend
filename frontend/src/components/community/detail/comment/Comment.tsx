import React from 'react';
import useGetParentComment from '@query/get/useGetParentComment';
import useGetNestedComment from '@query/get/useGetNestedComment';
import * as C from './Comment.style';
import EachComment from './EachComment';

interface CommentProps {
  id: number;
}

function Comment({ id }: CommentProps) {
  const { comments } = useGetParentComment({ articleId: id });
  const { nestedComments } = useGetNestedComment({ articleId: id });
  return (
    <>
      <C.Count>댓글 {comments.length + nestedComments.length}</C.Count>
      {comments.map((comment) => (
        <EachComment key={comment.commentId} comment={comment} nestedComments={nestedComments} />
      ))}
    </>
  );
}

export default Comment;
