import React from 'react';
import { ParentComment } from '@components/community/CommunityType';
import * as C from './Comment.style';
import EachComment from './EachComment';

const data: ParentComment[] = [
  { article_id: 1, comment_id: 1, name: '장윤영', grade: 'PRESIDENT', date: '2023-12-23', content: '안녕1' },
  { article_id: 1, comment_id: 2, name: '장윤영', grade: 'EXECUTIVE', date: '2023-12-24', content: '안녕2' },
  { article_id: 1, comment_id: 3, name: '장윤영', grade: 'NORMAL', date: '2023-12-24', content: '안녕3' },
];

interface CommentProps {
  id: number;
}

function Comment({ id }: CommentProps) {
  return (
    <>
      <C.Count>댓글 {data.length}</C.Count>
      {data.map((comment) => (
        <EachComment key={comment.comment_id} comment={comment} />
      ))}
    </>
  );
}

export default Comment;
