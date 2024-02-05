import React from 'react';
import useGetParentComment from '@query/get/useGetParentComment';
import useGetNestedComment from '@query/get/useGetNestedComment';
import { ParentComment } from '@components/community/CommunityType';
import * as C from './Comment.style';
import EachComment from './EachComment';

interface CommentProps {
  id: number;
}

function Comment({ id }: CommentProps) {
  const { comments } = useGetParentComment({ articleId: id });
  const { nestedComments } = useGetNestedComment({ articleId: id });

  // 댓글 아이디로 댓글 불러오기
  const getCommentByCommentId = (commentId: number) => {
    return comments.find((comment) => comment.commentId === commentId) as ParentComment;
  };

  // 댓글로 대댓글 정보 불러오기
  const getNestedCommentByParent = (comment: ParentComment) => {
    const nestedCommentByParent = nestedComments.filter(
      (nestedComment) => nestedComment.parentCommentId === comment.commentId,
    );

    return nestedCommentByParent;
  };

  // 지워진 댓글의 대댓글 정보 불러오기
  const getNestedCommentByDeletedParentComment = (commentId: number) => {
    return nestedComments.filter((nestedComment) => nestedComment.parentCommentId === commentId);
  };

  // 삭제된 댓글의 폼
  const makeDeletedCommentForm = (commentId: number): ParentComment => {
    return {
      articleId: id,
      commentId,
      grade: 'APPLICANT',
      name: '알수없음',
      isMine: false,
      date: '',
      content: '삭제된 댓글입니다',
    };
  };

  // 대댓글의 부모 아이디를 모은 리스트
  const parentCommentIdFromNested = Array.from(
    new Set(nestedComments.map((nestedComment) => nestedComment.parentCommentId)),
  );

  // 댓글의 아이디를 모은 리스트
  const commentIds = comments.map((comment) => comment.commentId);

  // 댓글과 대댓글의 부모들의 정보의 합집합 (오름차순으로 정렬)
  const unionIds = Array.from(new Set([...parentCommentIdFromNested, ...commentIds])).sort();

  // 1. 댓글에 대댓글이 달리지 않음
  const makeCommentAndNonNestedComments = (unionId: number) => {
    return <EachComment key={unionId} comment={getCommentByCommentId(unionId)} nestedComments={[]} />;
  };

  // 2. 댓글에 대댓글이 달림
  const makeCommentAndNestedComments = (unionId: number) => {
    const comment = getCommentByCommentId(unionId);
    return <EachComment key={unionId} comment={comment} nestedComments={getNestedCommentByParent(comment)} />;
  };

  // 3. 삭제된 댓글에 대댓글 달림
  const makeDeletedCommentAndNestedComments = (unionId: number) => {
    return (
      <EachComment
        key={unionId}
        comment={makeDeletedCommentForm(unionId)}
        nestedComments={getNestedCommentByDeletedParentComment(unionId)}
      />
    );
  };

  return (
    <>
      <C.Count>댓글 {comments.length + nestedComments.length}</C.Count>
      {unionIds.map((unionId) => {
        if (commentIds.includes(unionId) && !parentCommentIdFromNested.includes(unionId)) {
          return makeCommentAndNonNestedComments(unionId);
        }
        if (commentIds.includes(unionId) && parentCommentIdFromNested.includes(unionId)) {
          return makeCommentAndNestedComments(unionId);
        }
        if (!commentIds.includes(unionId) && parentCommentIdFromNested.includes(unionId)) {
          return makeDeletedCommentAndNestedComments(unionId);
        }
        return undefined;
      })}
    </>
  );
}

export default Comment;
