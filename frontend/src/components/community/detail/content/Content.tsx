import React from 'react';
import WriteInfo from '@components/community/common/WriteInfo';
import { ArticleDetailType } from '@components/community/CommunityType';
import Buttons from '@components/community/common/Buttons';
import { useNavigate } from 'react-router-dom';
import ROUTE from '@constants/route';
import useDeleteArticle from '@query/delete/useDeleteArticle';
import confirm from '@components/common/popup/confirm/Confirm';
import * as C from './Content.style';

interface ContentProps {
  id: number;
  data: ArticleDetailType;
  isAdmin: boolean;
}

function Content({ id, data, isAdmin }: ContentProps) {
  const navigate = useNavigate();
  const { deleteArticle, isPending } = useDeleteArticle({ articleId: id });

  const updateArticle = () => {
    navigate(`${ROUTE.COMMUNITY.BASE}/${ROUTE.COMMUNITY.UPDATE}`, { state: data });
  };

  const deleteConfirm = () => {
    confirm({
      content: '정말 이 게시글을\n 삭제하시겠습니까?',
      okText: '삭제',
      cancelText: '취소',
      isDangerous: true,
      onOk: deleteArticle,
    });
  };

  // 운영진과 내가 쓴 글일 때 수정, 삭제버튼 활성화
  const isButtonShow = () => {
    return data.isMine || isAdmin;
  };

  return (
    <>
      <C.Subject>{data.subject}</C.Subject>
      <WriteInfo grade={data.grade} name={data.name} date={data.date} />
      {data.images.map((image) => (
        <C.Image src={image.url} key={image.key} alt="image" />
      ))}
      <C.Content>{data.content}</C.Content>
      <Buttons
        normal={{ label: '수정', onClick: updateArticle, show: isButtonShow(), disabled: isPending }}
        dangerous={{ label: '삭제', onClick: deleteConfirm, show: isButtonShow(), disabled: isPending }}
      />
    </>
  );
}

export default Content;
