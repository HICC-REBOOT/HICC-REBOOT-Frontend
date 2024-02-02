import React from 'react';
import * as F from '@components/home/style/FirstScreen.style';
import Matter from '@components/home/firstScreen/Matter';
import useComponentSize from '@hooks/useCompoenentSize';

function FirstScreen() {
  const [componentRef, size] = useComponentSize();
  return (
    <F.Container ref={componentRef}>
      <F.Title>HICC</F.Title>
      <F.Content>코딩부터 프로그래밍 세미나까지, HICC에서!</F.Content>
      <Matter width={size.width} height={size.height} />
    </F.Container>
  );
}

export default FirstScreen;
