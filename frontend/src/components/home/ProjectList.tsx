import React from 'react';
import Nagne from '@assets/image/nagne.png';
import Today from '@assets/image/today.png';
import HiccJoon from '@assets/image/hiccjoon.png';
import HIAC from '@assets/image/hiac.png';
import * as P from './style/ProjectList.style';

const PROJECT_ITEMS = [
  {
    title: '나그네',
    content: '경로기반 sns 나그네는 관심있는 여행경로를 북마크하고 여행지를 공유할수 있는 sns입니다',
    person: '최세호 외 4명',
    date: '23.07.08',
    image: Nagne,
  },
  {
    title: '오늘뭐해',
    content: "'오늘뭐해'는 HICC 내 식사, 스터디 등 모임을 매칭해주는 웹 서비스이다.",
    person: '김규민 외 6명',
    date: '23.07.08',
    image: Today,
  },
  {
    title: '힉준',
    content: '프로그래밍 대회를 개최하기 위해 제작한 프로그래밍 대회 플랫폼 HICCjoon입니다.',
    person: '김진호 외 3명',
    date: '23.02.01',
    image: HiccJoon,
  },
  {
    title: 'HIAC',
    content: '동아리 회계관리 프로그램입니다. 카카오뱅크 거래내역을 엑셀로 입력하면 작동할 수 있습니다.',
    person: '김진호 외 4명',
    date: '22.08.07',
    image: HIAC,
  },
];

function ProjectList() {
  return (
    <P.Container>
      <P.GroupContainer>
        <P.Title>프로젝트 리스트업</P.Title>
        <P.Content>더 많은 정보를 얻고싶다면 HICC에 가입해보세요</P.Content>
        <P.ListContainer>
          {PROJECT_ITEMS.map((item, index) => (
            <P.ListBox key={index}>
              <P.Picture $image={item.image} />
              <P.ListBoxTitle>{item.title}</P.ListBoxTitle>
              <P.ListBoxContent>{item.content}</P.ListBoxContent>
              <P.ListBoxPar>
                <P.Person>{item.person}</P.Person>
              </P.ListBoxPar>
              <P.ListBoxDate>{item.date}</P.ListBoxDate>
            </P.ListBox>
          ))}
        </P.ListContainer>
      </P.GroupContainer>
    </P.Container>
  );
}

export default ProjectList;
