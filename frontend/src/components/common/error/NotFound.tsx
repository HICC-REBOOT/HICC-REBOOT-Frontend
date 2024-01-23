import React from 'react';
import ROUTE from '@constants/route';
import * as E from './NotFound.style';

const notFound = {
  title: `Opps!`,
  message: `오류가 발생했습니다.
  메인 화면으로 돌아갑니다.`,
};

function NotFound() {
  return (
    <E.Container>
      <E.Oops>{notFound.title}</E.Oops>
      <E.ErrorMessage>{notFound.message}</E.ErrorMessage>
      <E.Image />
      <E.GoHome to={ROUTE.HOME}>홈으로 가기</E.GoHome>
    </E.Container>
  );
}

export default NotFound;
