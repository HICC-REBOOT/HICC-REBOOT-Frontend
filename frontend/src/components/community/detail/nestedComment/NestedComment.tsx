import React from 'react';
import { ReactComponent as KeyboardReturn } from '@assets/image/icon/keyboardReturn.svg';
import WriteInfo from '@components/community/common/WriteInfo';
import { NestedCommentType } from '@components/community/CommunityType';
import useDeleteNestedComment from '@query/delete/useDeleteNestedComment';
import * as N from './NestedComment.style';

interface NestedCommentProps {
  nestedComment: NestedCommentType;
}

function NestedComment({ nestedComment }: NestedCommentProps) {
  const { deleteNestedComment, isPending } = useDeleteNestedComment({
    articleId: nestedComment.articleId,
    commentId: nestedComment.commentId,
  });

  const deleteThisNestedComment = () => {
    if (window.confirm('정말 이 대댓글을 삭제하시겠습니까?')) {
      deleteNestedComment();
    }
  };

  return (
    <N.Container>
      <KeyboardReturn />
      <N.Content>
        <WriteInfo name={nestedComment.name} grade={nestedComment.grade} date={nestedComment.date} />
        <N.P>{nestedComment.content}</N.P>
        <N.DeleteButton isMine={nestedComment.isMine} onClick={deleteThisNestedComment} disabled={isPending}>
          삭제
        </N.DeleteButton>
      </N.Content>
    </N.Container>
  );
}

export default NestedComment;
