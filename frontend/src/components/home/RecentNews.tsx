import React from 'react';
import * as R from '@components/home/style/RecentNews.style';

const NEWS_ITEMS = [
  {
    title: '저희 엠티 안 가나요?',
    label: '운영진',
    writer: '장윤영3',
    date: '2024-01-09 16:49',
  },
  {
    title: '저희 엠티 안 가나요?',
    label: '운영진',
    writer: '장윤영3',
    date: '2024-01-09 16:49',
  },
  {
    title: '저희 엠티 안 가나요?',
    label: '운영진',
    writer: '장윤영3',
    date: '2024-01-09 16:49',
  },
];

function RecentNews() {
  return (
    <R.Container>
      <R.GroupContainer>
        <R.Title>최근 소식</R.Title>
        <R.Content>더 많은 정보를 얻고싶다면 HICC에 가입해보세요</R.Content>
        <R.NewsList>
          {NEWS_ITEMS.map((items, index) => (
            <R.NewsBox key={index}>
              <R.NewsTitle>{items.title}</R.NewsTitle>
              <R.NewsBottom>
                <R.Label>{items.label}</R.Label>
                <R.Writer>{items.writer}</R.Writer>
                <R.Date>{items.date}</R.Date>
              </R.NewsBottom>
            </R.NewsBox>
          ))}
        </R.NewsList>
      </R.GroupContainer>
    </R.Container>
  );
}

export default RecentNews;
