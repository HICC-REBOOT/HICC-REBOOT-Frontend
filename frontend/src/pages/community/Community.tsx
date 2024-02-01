import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '@components/community/header/Header';
import OptionType from '@components/common/dropdown/OptionType';
import { BOARD } from '@components/community/CommunityType';
import { ErrorBoundary } from 'react-error-boundary';
import GlobalError from '@components/common/error/GlobalError';
import * as C from './Community.style';

function Community() {
  const options: OptionType[] = [
    { value: BOARD.FREE, label: '자유 게시판' },
    { value: BOARD.ACTIVITY_PICTURE, label: '활동 사진' },
    { value: BOARD.EMPLOYMENT_INFORMATION, label: '취업 게시판' },
    { value: BOARD.HICCS_PICK, label: `힉's 픽` },
  ];

  const [currentBoard, setCurrentBoard] = useState<OptionType | null>(options[0]);

  return (
    <C.Container>
      <ErrorBoundary FallbackComponent={GlobalError}>
        <Header options={options} onChange={setCurrentBoard} />
        <Outlet
          context={{
            currentBoard,
          }}
        />
      </ErrorBoundary>
    </C.Container>
  );
}

export default Community;
