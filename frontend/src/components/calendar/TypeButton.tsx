import React, { useState } from 'react';
import { ConfigProvider } from 'antd';
import * as T from './style/TypeButton.style';

export default function TypeButton() {
  const types = ['학술', '친목', '학교행사'];

  const [selectedIdx, setSelectedIdx] = useState<number>();
  const onClickBtn = (i: number) => {
    setSelectedIdx(i);
  };

  return (
    <T.Container>
      <ConfigProvider
        theme={{
          token: {
            borderRadius: 100,
            colorPrimary: '#FFBF18',
            colorText: '#FFBF18',
            colorBgContainer: 'rgba(255, 191, 24, 0.10)',
            colorBorder: 'rgba(255, 191, 24, 0.10)',
          },
        }}
      >
        <T.Type onClick={() => setSelectedIdx(0)}>• 학술</T.Type>
      </ConfigProvider>
      <ConfigProvider
        theme={{
          token: {
            borderRadius: 100,
            colorPrimary: '#5B4EF5',
            colorText: '#5B4EF5',
            colorBgContainer: 'rgba(105, 99, 255, 0.10)',
            colorBorder: 'rgba(105, 99, 255, 0.10)',
          },
        }}
      >
        <T.Type onClick={() => setSelectedIdx(1)}>• 친목</T.Type>
      </ConfigProvider>
      <ConfigProvider
        theme={{
          token: {
            borderRadius: 100,
            colorPrimary: '#FFBDF2',
            colorText: '#FFBDF2',
            colorBgContainer: 'rgba(255, 189, 242, 0.10)',
            colorBorder: 'rgba(255, 189, 242, 0.10)',
          },
        }}
      >
        <T.Type onClick={() => setSelectedIdx(2)}>• 학교행사</T.Type>
      </ConfigProvider>
    </T.Container>
  );
}
