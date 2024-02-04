import React from 'react';
import { AxiosError, AxiosResponse } from 'axios';
import { FallbackProps } from 'react-error-boundary';
import { IError } from '@utils/axios';
import { useNavigate } from 'react-router-dom';
import * as E from './GlobalError.style';
import GradientButton from '../button/color/GradientButton';

const errorTemplate = Object.freeze({
  title: `Oops!`,
  message: `페이지를 새로고침해주세요`,
  button: `페이지 새로고침`,
});

const getAxiosError = (error: AxiosError): IError => {
  const serverError = error as AxiosError<IError>;
  return (serverError.response as AxiosResponse<IError, any>).data;
};

function GlobalError({ error }: FallbackProps) {
  const errorMessage = getAxiosError(error as AxiosError);
  const navigate = useNavigate();

  return (
    <E.Container>
      <E.Oops>{errorTemplate.title}</E.Oops>
      <E.ErrorMessage>{errorMessage.reason}</E.ErrorMessage>
      <E.ErrorMessage>{errorTemplate.message}</E.ErrorMessage>
      <GradientButton type="button" onClick={() => navigate(-1)}>
        <p>페이지 새로고침</p>
      </GradientButton>
    </E.Container>
  );
}

export default GlobalError;
