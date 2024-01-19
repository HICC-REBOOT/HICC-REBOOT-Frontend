import React from 'react';
import * as P from './style/ProjectList.style';

const PROJECT_ITEMS = [
  {
    title: '프로젝트 명',
    content: '대통령이 궐위된 때 또는 대통령 당선자가 사망하거나 판결 기다릴',
    person: '홍길동 외 6 명',
  },
  {
    title: '프로젝트 명',
    content: '대통령이 궐위된 때 또는 대통령 당선자가 사망하거나 판결 기다릴',
    person: '홍길동 외 6 명',
  },
  {
    title: '프로젝트 명',
    content: '대통령이 궐위된 때 또는 대통령 당선자가 사망하거나 판결 기다릴',
    person: '홍길동 외 6 명',
  },
  {
    title: '프로젝트 명',
    content: '대통령이 궐위된 때 또는 대통령 당선자가 사망하거나 판결 기다릴',
    person: '홍길동 외 6 명',
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
              <P.Picture />
              <P.ListBoxTitle>{item.title}</P.ListBoxTitle>
              <P.ListBoxContent>{item.content}</P.ListBoxContent>
              <P.ListBoxPar>
                <P.Person>{item.person}</P.Person>
              </P.ListBoxPar>
            </P.ListBox>
          ))}
        </P.ListContainer>
      </P.GroupContainer>
    </P.Container>
  );
}

export default ProjectList;
