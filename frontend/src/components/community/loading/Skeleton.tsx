import React from 'react';
import COMMON from '@constants/common';
import EachBox from './EachBox';

function Skeleton() {
  return (
    <>
      {Array.from({ length: COMMON.PAGINATION.SIZE }).map((_, index) => (
        <EachBox key={index} />
      ))}
    </>
  );
}

export default Skeleton;
