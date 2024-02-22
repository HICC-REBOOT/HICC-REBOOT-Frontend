import React, { FormEventHandler } from 'react';
import { UseFormRegister } from 'react-hook-form';
import COMMON from '@constants/common';
import Textarea from './style/TextareaInForm.style';
import { CommunityWriteForm } from '../CommunityType';

interface TextareaInFormProps {
  register: UseFormRegister<CommunityWriteForm>;
}

function TextareaInForm({ register }: TextareaInFormProps) {
  const textareaAutosize: FormEventHandler<HTMLTextAreaElement> = (e) => {
    const element = e.target as HTMLTextAreaElement;
    element.style.height = 'auto';
    element.style.height = `${element.scrollHeight / 10}rem`;
  };

  return (
    <Textarea
      placeholder="내용을 입력하세요"
      {...register('content', {
        required: true,
        onChange: textareaAutosize,
      })}
      maxLength={COMMON.COMMUNITY.CONTENT_LIMIT}
    />
  );
}

export default TextareaInForm;
