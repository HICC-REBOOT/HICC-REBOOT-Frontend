import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '@components/community/header/Header';
import OptionType from '@components/common/dropdown/OptionType';
import * as C from './Community.style';

function Community() {
  const options: OptionType[] = [
    { value: 'FREE', label: '자유 게시판' },
    { value: 'ACTIVITY_PICTURE', label: '활동 사진' },
    { value: 'EMPLOYMENT_INFORMATION', label: '취업 게시판' },
    { value: 'HICCS_PICK', label: `힉's 픽` },
  ];

  const [currentBoard, setCurrentBoard] = useState<OptionType | null>(options[0]);

  return (
    <C.Container>
      <Header options={options} onChange={setCurrentBoard} />
      <Outlet
        context={{
          currentBoard,
        }}
      />
    </C.Container>
  );
}

export default Community;
