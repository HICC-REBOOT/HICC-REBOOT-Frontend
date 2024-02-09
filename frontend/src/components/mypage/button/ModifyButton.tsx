import React, { useEffect } from 'react';
import ROUTE from '@constants/route';
import { useNavigate } from 'react-router-dom';
import useGetArticleDetail from '@query/get/useGetArticleDetail';
import { UseGetArticleDetailProps } from '@query/get/useGetArticleDetail';

import * as M from '../style/MyWritings.style';

function ModifyButton({ articleId }: UseGetArticleDetailProps) {
  const navigate = useNavigate();
  const detailData = useGetArticleDetail({ articleId }).data || null;

  const handleModifyButtonClick = () => {
    navigate(`${ROUTE.COMMUNITY.BASE}/${ROUTE.COMMUNITY.UPDATE}`, { state: detailData });
  };

  return <M.ModifyButton onClick={handleModifyButtonClick}>수정</M.ModifyButton>;
}

export default ModifyButton;
