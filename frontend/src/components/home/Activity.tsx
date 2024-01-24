import React from 'react';
import * as A from '@components/home/style/Activity.style';
import { ReactComponent as Arrow } from '@assets/image/icon/arrow2.svg';

function Activity() {
  return (
    <A.Container>
      <A.GrouopContainer>
        <A.Title>활동 소개</A.Title>
        <A.Content>더 많은 정보를 얻고싶다면 HICC에 가입해보세요</A.Content>
        <A.ActivityContainer>
          {/* <A.TestBox>ㅇㅇㅇ</A.TestBox> */}
          <A.Box img={'seminar'}>
            <A.BoxTitle>코딩 학습 세미나</A.BoxTitle>
            <A.BoxContent>매 주 자율적으로 진행되는 세미나를 통해 기초 코딩 지식을 학습합니다</A.BoxContent>
          </A.Box>
          <A.Box img={'project'}>
            <A.BoxTitle>프로젝트 발표대회</A.BoxTitle>
            <A.BoxContent>매 주 자율적으로 진행되는 세미나를 통해 기초 코딩 지식을 학습합니다</A.BoxContent>
          </A.Box>
        </A.ActivityContainer>
        <A.BoxContainer>
          <A.SmallBox img={''} style={{ border: '0.1rem solid rgba(255, 255, 255, 0.5)' }}>
            <A.SmallBoxTitle>{'활발한\n친목도모활동'}</A.SmallBoxTitle>
            <A.SmallBoxContent>매 주 자율적으로 진행되는 세미나를 통해 기초 코딩 지식을 학습합니다</A.SmallBoxContent>
            <A.Logo>
              <Arrow />
            </A.Logo>
          </A.SmallBox>
          <A.SmallBox img={'meeting'}>
            <A.SmallBoxTitle>HICC 정규모임</A.SmallBoxTitle>
          </A.SmallBox>
          <A.Box img={'mission'}>
            <A.BoxTitle>조별 미션 및 친목 활동</A.BoxTitle>
          </A.Box>
          <A.SmallBox img={'mt'}>
            <A.SmallBoxTitle>분기별 MT</A.SmallBoxTitle>
          </A.SmallBox>
        </A.BoxContainer>
      </A.GrouopContainer>
    </A.Container>
  );
}

export default Activity;
