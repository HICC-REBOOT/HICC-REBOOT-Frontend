import React from 'react';
import * as A from '@components/home/style/Activity.style';
import { ReactComponent as Arrow } from '@assets/image/icon/arrow2.svg';
import seminar from '@assets/image/seminar.png';
import project from '@assets/image/project.png';
import mission from '@assets/image/mission.png';
import meeting from '@assets/image/meeting.png';
import mt from '@assets/image/mt.png';
import useMoveScroll from '@hooks/useMoveScroll';
import ActivityBox from './activityBox/ActivityBox';
import SmallActivityBox from './activityBox/SmallActivityBox';

const seminarInfo = {
  img: seminar,
  title: '코딩 학습 세미나',
  content: `매 주 자율적으로 진행되는 세미나를 통해
기초 코딩 지식을 학습합니다  
  `,
};

const projcetInfo = {
  img: project,
  title: '프로젝트 발표대회',
  content: `매 주 자율적으로 진행되는 세미나를 통해
기초 코딩 지식을 학습합니다  
  `,
};

const missionInfo = {
  img: mission,
  title: '프로젝트 발표대회',
  content: `매 주 자율적으로 진행되는 세미나를 통해
기초 코딩 지식을 학습합니다  
  `,
};

const meetingInfo = {
  img: meeting,
  title: 'HICC 정규모임',
};

const mtInfo = {
  img: mt,
  title: '분기별 MT',
};

function Activity() {
  const { element, onMoveToElement } = useMoveScroll();

  return (
    <A.Container>
      <A.BackCircle />
      <A.GrouopContainer>
        <A.Title>활동 소개</A.Title>
        <A.Content>더 많은 정보를 얻고싶다면 HICC에 가입해보세요</A.Content>
        <A.ActivityContainer>
          <ActivityBox {...seminarInfo} />
          <ActivityBox {...projcetInfo} />
        </A.ActivityContainer>
        <A.BoxContainer className={'scroll'}>
          <A.SmallBox $img={''} style={{ border: '0.1rem solid rgba(255, 255, 255, 0.5)' }}>
            <A.SmallBoxTitle>{'활발한\n친목도모활동'}</A.SmallBoxTitle>
            <A.SmallBoxContent>
              정규모임, MT, 조별미션
              <br /> 등 친목도모 활동이
              <br />
              있습니다.
            </A.SmallBoxContent>
            <A.Logo onClick={onMoveToElement} style={{ cursor: 'pointer' }}>
              <Arrow />
            </A.Logo>
          </A.SmallBox>
          <SmallActivityBox {...meetingInfo} />
          <ActivityBox {...missionInfo} />
          <SmallActivityBox {...mtInfo} />
          {/* 오른쪽으로 이동하는 기능인데 마지막에 gap이 추가되는게 별로 좋지 않아서 빼는 방법 좀 */}
          <div ref={element} />
        </A.BoxContainer>
      </A.GrouopContainer>
    </A.Container>
  );
}

export default Activity;
