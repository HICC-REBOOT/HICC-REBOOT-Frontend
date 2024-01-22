import React, { FormEventHandler } from 'react';
import { ReactComponent as ImageUpload } from '@assets/image/icon/ImageUpload.svg';
import { useForm } from 'react-hook-form';
import * as W from './CommunityWrite.style';

// 새로 등록은 file, 이미 있는 이미지면 src (수정을 위해)
interface Image {
  File?: File;
  src: string;
}

interface WriteForm {
  title: string;
  content: string;
  image: Image[];
}

function CommunityWrite() {
  const { handleSubmit, register } = useForm<WriteForm>();

  const textareaAutosize: FormEventHandler<HTMLTextAreaElement> = (e) => {
    const element = e.target as HTMLTextAreaElement;
    element.style.height = 'auto';
    element.style.height = `${element.scrollHeight / 10}rem`;
  };

  const onSubmit = async (data: WriteForm) => {
    console.log(data);
  };

  return (
    <W.Container onSubmit={handleSubmit(onSubmit)}>
      <W.InputTitle type="text" placeholder="제목을 입력하세요" {...register('title')} />
      <W.Textarea
        placeholder="내용을 입력하세요"
        {...register('content', {
          onChange: textareaAutosize,
        })}
      />
      <W.ImageContainer>
        <W.Label>사진 업로드</W.Label>
        <W.ImageUploads>
          <W.ImageUploadButton>
            <ImageUpload style={{ cursor: 'pointer' }} />
          </W.ImageUploadButton>
        </W.ImageUploads>
        <W.UploadButton type="submit">업로드 하기</W.UploadButton>
      </W.ImageContainer>
    </W.Container>
  );
}

export default CommunityWrite;
