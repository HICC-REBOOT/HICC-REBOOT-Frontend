import React, { useState } from 'react';
import * as M from './style/Mywrittings.style';

function MyWritings() {
  const FIGURE_ITEMS = [
    {
      title: '일이삼사오육칠팔구십일이삼사오육칠팔구',
      content:
        '내용이다 내용 내용이야 내용 내용입니다 내용이에요내용 내용을 출력해보아요 내용 내용내용 내용 용띠의 해  용띠의 해  용띠의 해 ',
    },
    {
      title: '일이삼사오육칠팔구십일이삼사오육칠팔구',
      content:
        '내용이다 내용 내용이야 내용 내용입니다 내용이에요내용 내용을 출력해보아요 내용 내용내용 내용 용띠의 해  용띠의 해  용띠의 해 ',
    },
    {
      title: '일이삼사오육칠팔구십일이삼사오육칠팔구',
      content:
        '내용이다 내용 내용이야 내용 내용입니다 내용이에요내용 내용을 출력해보아요 내용 내용내용 내용 용띠의 해  용띠의 해  용띠의 해 ',
    },
    {
      title: '일이삼사오육칠팔구십일이삼사오육칠팔구',
      content:
        '내용이다 내용 내용이야 내용 내용입니다 내용이에요내용 내용을 출력해보아요 내용 내용내용 내용 용띠의 해  용띠의 해  용띠의 해 ',
    },
  ];
  const [writtingState, setWrittingState] = useState(true);
  return (
    <M.Container>
      <M.GroupContainer>
        <M.TitleArea>
          <M.TitleTextArea onClick={() => setWrittingState(true)}>
            내가 쓴 글
            <M.TitleBar selected={writtingState} />
          </M.TitleTextArea>
          <M.TitleTextArea onClick={() => setWrittingState(false)}>
            내 댓글
            <M.TitleBar selected={!writtingState} />
          </M.TitleTextArea>
        </M.TitleArea>
        <M.ContentsContainer>
          {FIGURE_ITEMS.map((item, index) => (
            <M.ContentsArea key={item.title}>
              <M.ContentsTitle>{item.title}</M.ContentsTitle>
              <M.Contents>{item.content}</M.Contents>
              <M.ModifyButton>수정</M.ModifyButton>
              <M.DeleteButton>삭제</M.DeleteButton>
            </M.ContentsArea>
          ))}
        </M.ContentsContainer>
      </M.GroupContainer>
    </M.Container>
  );
}

export default MyWritings;
