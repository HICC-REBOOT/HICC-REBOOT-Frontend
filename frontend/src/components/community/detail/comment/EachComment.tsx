import React from 'react';
import { NestedCommentType, ParentComment } from '@components/community/CommunityType';
import WriteInfo from '@components/community/common/WriteInfo';
import Buttons from '@components/common/buttons/Buttons';
import confirm from '@components/common/popup/confirm/Confirm';
import useChangeComment from '@hooks/useChangeComment';
import * as EA from './style/EachComment.style';
import NestedComment from '../nestedComment/NestedComment';
import useDeleteComment from '../../../../query/delete/useDeleteComment';

interface EachCommentProps {
  comment: ParentComment;
  nestedComments: NestedCommentType[];
  isAdmin: boolean;
}

function EachComment({ comment, nestedComments, isAdmin }: EachCommentProps) {
  const { selectedNested } = useChangeComment();

  const enrollNestedComment = (commentId: number) => {
    selectedNested(commentId);
  };

  const { deleteComment, isPending } = useDeleteComment({ articleId: comment.articleId, commentId: comment.commentId });

  const deleteConfirm = () => {
    confirm({
      content: '정말 이 댓글을\n 삭제하시겠습니까?',
      okText: '삭제',
      cancelText: '취소',
      isDangerous: true,
      onOk: deleteComment,
    });
  };

  const isButtonShow = () => {
    return comment.isMine || isAdmin;
  };

  return (
    <EA.Container>
      <WriteInfo grade={comment.grade} name={comment.name} date={comment.date} />
      <EA.Content>{comment.content}</EA.Content>
      <Buttons
        normal={{
          label: '답글 달기',
          onClick: () => enrollNestedComment(comment.commentId),
          show: true,
        }}
        dangerous={{ label: '삭제', onClick: deleteConfirm, show: isButtonShow(), disabled: isPending }}
      />
      {nestedComments.length > 0 &&
        nestedComments.map((nestedComment) => (
          <NestedComment
            key={`${nestedComment.parentCommentId}-${nestedComment.commentId}`}
            nestedComment={nestedComment}
            isAdmin={isAdmin}
          />
        ))}
    </EA.Container>
  );
}

export default EachComment;
