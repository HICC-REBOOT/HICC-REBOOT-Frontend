import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '@components/community/header/Header';
import OptionType from '@components/common/dropdown/OptionType';
import { ErrorBoundary } from 'react-error-boundary';
import GlobalError from '@components/common/error/GlobalError';
import useGetBoardList from '@query/get/useGetBoardList';
import * as C from './Community.style';

function Community() {
  const { boardList } = useGetBoardList();
  const options: OptionType[] = boardList.map((board) => ({
    value: board.boardTypeId.toString(),
    label: board.boardType,
  }));

  const [currentBoard, setCurrentBoard] = useState<OptionType | null>(options[0]);

  return (
    <C.Container>
      <ErrorBoundary FallbackComponent={GlobalError}>
        <Header options={options} onChange={setCurrentBoard} />
        <Outlet
          context={{
            currentBoard,
            boardList,
          }}
        />
      </ErrorBoundary>
    </C.Container>
  );
}

export default Community;
