import React from 'react';
import AutoHeightTextarea from '@components/common/textarea/AutoHeightTextarea';
import useInput from '@hooks/useInput';
import useTextarea from '@hooks/useTextarea';
import { ReactComponent as ImageUpload } from '@assets/image/icon/ImageUpload.svg';
import * as W from './CommunityWrite.style';

function CommunityWrite() {
  const [title, setTitle] = useInput<string>('');
  const [content, setContent] = useTextarea<string>('');

  return (
    <W.Container>
      <W.InputTitle type="text" placeholder="제목을 입력하세요" value={title} onChange={setTitle} />
      <AutoHeightTextarea value={content} placeholder="내용을 입력하세요" onChange={setContent} />
      <W.ImageContainer>
        <W.Label>사진 업로드</W.Label>
        <W.ImageUploads>
          <W.ImageUploadButton>
            <ImageUpload style={{ cursor: 'pointer' }} />
          </W.ImageUploadButton>
        </W.ImageUploads>
      </W.ImageContainer>
    </W.Container>
  );
}

export default CommunityWrite;
