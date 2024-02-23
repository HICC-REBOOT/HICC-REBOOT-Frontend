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
  title: '웹 세미나',
  content: `매 주 정기적으로 진행되는 세미나를 통해
  프론트엔드와 백엔드에 대한 지식을 학습합니다.
  `,
};

const projcetInfo = {
  img: project,
  title: '프로젝트 발표대회',
  content: `한 학기동안 배운 지식을 토대로, 
  방학 때 프로젝트를 개발하는 기회를 갖습니다.
  `,
};

const missionInfo = {
  img: mission,
  title: '조별미션',
  content: `처음 들어온 동아리원들과 
  기존 동아리원들이 조를 
  이루어 미션을 통해 친목을 
  도모하는 활동입니다.
  `,
};

const studyInfo = {
  img: meeting,
  title: '자율 스터디',
  content: `자율적인 스터디를 도모하기 위하여, 
  스터디활동을 훌륭히 진행한 팀에게 
  5만원을 지원해드립니다.
  (정확한 기준은 게시판을 확인해주세요)
  `,
};

const mtInfo = {
  img: mt,
  title: '분기별 MT',
  content: `한 학기에 두 번씩, 
  동아리 mt를 통해
  동아리 회원들간의 
  친목을 도모합니다.
  `,
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
              정규모임, MT, 조별미션 등
              <br />
              친목도모 활동이
              <br />
              있습니다.
            </A.SmallBoxContent>
            <A.Logo onClick={onMoveToElement} style={{ cursor: 'pointer' }}>
              <Arrow />
            </A.Logo>
          </A.SmallBox>
          <SmallActivityBox {...missionInfo} />
          <ActivityBox {...studyInfo} />
          <SmallActivityBox {...mtInfo} />
          {/* 오른쪽으로 이동하는 기능인데 마지막에 gap이 추가되는게 별로 좋지 않아서 빼는 방법 좀 */}
          <div ref={element} />
        </A.BoxContainer>
      </A.GrouopContainer>
    </A.Container>
  );
}

export default Activity;
