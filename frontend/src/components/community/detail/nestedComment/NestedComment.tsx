import React from 'react';
import KeyboardReturn from '@assets/image/icon/keyboardReturn.svg';
import WriteInfo from '@components/community/common/WriteInfo';
import { NestedCommentType } from '@components/community/CommunityType';
import useDeleteNestedComment from '@query/delete/useDeleteNestedComment';
import confirm from '@components/common/popup/confirm/Confirm';
import * as N from './NestedComment.style';

interface NestedCommentProps {
  nestedComment: NestedCommentType;
  isAdmin: boolean;
}

function NestedComment({ nestedComment, isAdmin }: NestedCommentProps) {
  const { deleteNestedComment, isPending } = useDeleteNestedComment({
    articleId: nestedComment.articleId,
    commentId: nestedComment.commentId,
  });

  const deleteNestedConfirm = () => {
    confirm({
      content: '정말 이 대댓글을\n 삭제하시겠습니까?',
      okText: '삭제',
      cancelText: '취소',
      isDangerous: true,
      onOk: deleteNestedComment,
    });
  };

  const isButtonShow = () => {
    return nestedComment.isMine || isAdmin;
  };

  return (
    <N.Container>
      <img src={KeyboardReturn} alt="" />
      <N.Content>
        <WriteInfo name={nestedComment.name} grade={nestedComment.grade} date={nestedComment.date} />
        <N.P>{nestedComment.content}</N.P>
        <N.DeleteButton $isMine={isButtonShow()} onClick={deleteNestedConfirm} disabled={isPending}>
          삭제
        </N.DeleteButton>
      </N.Content>
    </N.Container>
  );
}

export default NestedComment;
