import React from 'react';
import { NestedCommentType, ParentComment } from '@components/community/CommunityType';
import WriteInfo from '@components/community/common/WriteInfo';
import Buttons from '@components/community/common/Buttons';
import useNestedComment from '@hooks/useNestedComment';
import confirm from '@components/common/popup/confirm/Confirm';
import * as EA from './style/EachComment.style';
import NestedComment from '../nestedComment/NestedComment';
import useDeleteComment from '../../../../query/delete/useDeleteComment';

interface EachCommentProps {
  comment: ParentComment;
  nestedComments: NestedCommentType[];
}

function EachComment({ comment, nestedComments }: EachCommentProps) {
  const { selectedNested } = useNestedComment();

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
        dangerous={{ label: '삭제', onClick: deleteConfirm, show: comment.isMine, disabled: isPending }}
      />
      {nestedComments.length > 0 &&
        nestedComments.map((nestedComment) => (
          <NestedComment
            key={`${nestedComment.parentCommentId}-${nestedComment.commentId}`}
            nestedComment={nestedComment}
          />
        ))}
    </EA.Container>
  );
}

export default EachComment;
