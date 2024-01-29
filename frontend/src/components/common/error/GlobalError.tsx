import React from 'react';
import { AxiosError, AxiosResponse } from 'axios';
import { FallbackProps } from 'react-error-boundary';
import { IError } from '@utils/axios';
import ROUTE from '@constants/route';
import * as E from './GlobalError.style';

const getAxiosError = (error: AxiosError): IError => {
  const serverError = error as AxiosError<IError>;
  return (serverError.response as AxiosResponse<IError, any>).data;
};

function GlobalError({ error, resetErrorBoundary }: FallbackProps) {
  const errorMessage = getAxiosError(error as AxiosError);
  return (
    <E.Container>
      <E.Oops>{errorMessage.status}</E.Oops>
      <E.ErrorMessage>{errorMessage.reason}</E.ErrorMessage>
      <E.Image />
      <E.Buttons>
        <E.GoHome to={ROUTE.HOME}>홈으로 가기</E.GoHome>
        <E.RetryButton onClick={resetErrorBoundary}>재시도</E.RetryButton>
      </E.Buttons>
    </E.Container>
  );
}

export default GlobalError;
