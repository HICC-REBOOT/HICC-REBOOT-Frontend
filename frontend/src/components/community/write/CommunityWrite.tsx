import React from 'react';
import COMMON from '@constants/common';
import TuiEditor from '@components/community/markdown/Editor';
import * as W from './style/CommunityWrite.style';
import useCommunityWrite from '../hooks/useCommunityWrite';

function CommunityWrite() {
  const { register, disabled, setValue, onSubmit, handleNewImages } = useCommunityWrite();

  const setContent = (content: string) => {
    setValue('content', content);
  };

  return (
    <W.Container onSubmit={onSubmit}>
      <W.InputTitle
        type="text"
        maxLength={COMMON.COMMUNITY.TITLE_LIMIT}
        placeholder="제목을 입력하세요"
        {...register('title', { required: true, maxLength: COMMON.COMMUNITY.TITLE_LIMIT })}
      />
      <TuiEditor handleNewImage={handleNewImages} setContent={setContent} />
      <W.UploadButton type="submit" disabled={disabled}>
        업로드 하기
      </W.UploadButton>
    </W.Container>
  );
}

export default CommunityWrite;
