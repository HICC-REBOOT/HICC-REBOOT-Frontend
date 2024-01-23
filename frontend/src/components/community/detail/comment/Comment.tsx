import React from 'react';
import { NestedCommentType, ParentComment } from '@components/community/CommunityType';
import * as C from './Comment.style';
import EachComment from './EachComment';

const data: ParentComment[] = [
  {
    articleId: 1,
    commentId: 1,
    name: '장윤영',
    grade: 'PRESIDENT',
    date: '2023-12-30T07:51:01.243',
    isMine: false,
    content: '안녕1',
  },
  {
    articleId: 1,
    commentId: 2,
    name: '장윤영',
    grade: 'EXECUTIVE',
    date: '2023-12-30T07:51:01.243',
    isMine: true,
    content: '안녕2',
  },
  {
    articleId: 1,
    commentId: 3,
    name: '장윤영',
    grade: 'NORMAL',
    date: '2023-12-30T07:51:01.243',
    isMine: false,
    content: '안녕3',
  },
];

const nested: NestedCommentType[] = [
  {
    articleId: 1,
    commentId: 1,
    parentCommentId: 1,
    name: '장윤영',
    grade: 'PRESIDENT',
    isMine: false,
    date: '2023-12-30T07:51:01.243',
    content: '안녕1',
  },
];

interface CommentProps {
  id: number;
}

function Comment({ id }: CommentProps) {
  return (
    <>
      <C.Count>댓글 {data.length}</C.Count>
      {data.map((comment) => (
        <EachComment key={comment.commentId} comment={comment} nestedComments={nested} />
      ))}
    </>
  );
}

export default Comment;
