import React from 'react';
import ROUTE from '@constants/route';
import * as E from './RoutingError.style';

const routingError = {
  title: `Opps!`,
  message: `오류가 발생했습니다.
  메인 화면으로 돌아갑니다.`,
};

function RoutingError() {
  return (
    <E.Container>
      <E.Oops>{routingError.title}</E.Oops>
      <E.ErrorMessage>{routingError.message}</E.ErrorMessage>
      <E.Image />
      <E.GoHome to={ROUTE.HOME}>홈으로 가기</E.GoHome>
    </E.Container>
  );
}

export default RoutingError;
