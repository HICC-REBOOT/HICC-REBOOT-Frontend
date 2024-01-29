import React, { useState } from 'react';
import { ConfigProvider } from 'antd';
import hexToRGBA from '@utils/hexToRgba';
import theme from '@styles/theme';
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
            colorPrimary: theme.colors.tag_academy,
            colorText: theme.colors.tag_academy,
            colorBgContainer: hexToRGBA(theme.colors.tag_academy, 0.1),
            colorBorder: hexToRGBA(theme.colors.tag_academy, 0.1),
          },
        }}
      >
        <T.Type onClick={() => setSelectedIdx(0)}>• 학술</T.Type>
      </ConfigProvider>
      <ConfigProvider
        theme={{
          token: {
            borderRadius: 100,
            colorPrimary: theme.colors.point1,
            colorText: theme.colors.point1,
            colorBgContainer: hexToRGBA(theme.colors.point1, 0.1),
            colorBorder: hexToRGBA(theme.colors.point1, 0.1),
          },
        }}
      >
        <T.Type onClick={() => setSelectedIdx(1)}>• 친목</T.Type>
      </ConfigProvider>
      <ConfigProvider
        theme={{
          token: {
            borderRadius: 100,
            colorPrimary: theme.colors.tag_event,
            colorText: theme.colors.tag_event,
            colorBgContainer: hexToRGBA(theme.colors.tag_event, 0.1),
            colorBorder: hexToRGBA(theme.colors.tag_event, 0.1),
          },
        }}
      >
        <T.Type onClick={() => setSelectedIdx(2)}>• 학교행사</T.Type>
      </ConfigProvider>
    </T.Container>
  );
}
