import React from 'react';
import useGetParentComment from '@query/get/useGetParentComment';
import useGetNestedComment from '@query/get/useGetNestedComment';
import { ParentComment } from '@components/community/CommunityType';
import * as C from './style/Comment.style';
import EachComment from './EachComment';

interface CommentProps {
  id: number;
  isAdmin: boolean;
}

function Comment({ id, isAdmin }: CommentProps) {
  const { comments } = useGetParentComment({ articleId: id });
  const { nestedComments } = useGetNestedComment({ articleId: id });

  // 댓글로 대댓글 정보 불러오기
  const getNestedCommentByParent = (comment: ParentComment) => {
    const nestedCommentByParent = nestedComments.filter(
      (nestedComment) => nestedComment.parentCommentId === comment.commentId,
    );

    return nestedCommentByParent;
  };

  const getCommentLength = () => {
    const notDeletedComments = comments.filter((comment) => !comment.isDeleted);
    const notDeletedNestedComments = nestedComments.filter((nestedComment) => !nestedComment.isDeleted);

    return notDeletedComments.length + notDeletedNestedComments.length;
  };

  return (
    <>
      <C.Count>댓글 {getCommentLength()}</C.Count>
      {comments.map((comment) => (
        <EachComment
          key={comment.commentId}
          comment={comment}
          nestedComments={getNestedCommentByParent(comment)}
          isAdmin={isAdmin}
        />
      ))}
    </>
  );
}

export default Comment;
