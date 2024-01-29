import React from 'react';
import useGetLatestNews from '@query/get/useGetLatestNews';
import * as R from '@components/home/style/RecentNews.style';

// const NEWS_ITEMS = [
//   {
//     title: '저희 엠티 안 가나요?',
//     label: '운영진',
//     writer: '장윤영3',
//     date: '2024-01-09 16:49',
//   },
//   {
//     title: '저희 엠티 안 가나요?',
//     label: '운영진',
//     writer: '장윤영3',
//     date: '2024-01-09 16:49',
//   },
//   {
//     title: '저희 엠티 안 가나요?',
//     label: '운영진',
//     writer: '장윤영3',
//     date: '2024-01-09 16:49',
//   },
// ];

function RecentNews() {
  const newsResponse = useGetLatestNews(); // Retrieve the entire response object
  const NEWS_ITEMS = newsResponse.data;

  return (
    <R.Container>
      <R.Circle />
      <R.GroupContainer>
        <R.Title>최근 소식</R.Title>
        <R.Content>더 많은 정보를 얻고싶다면 HICC에 가입해보세요</R.Content>
        <R.NewsList>
          {NEWS_ITEMS &&
            Object.values(NEWS_ITEMS).map((item: any, index: number) => (
              <R.NewsBox key={index}>
                <R.NewsTitle>{item.subject}</R.NewsTitle>
                <R.NewsBottom>
                  <R.Label>{item.grade}</R.Label>
                  <R.Writer>{item.name}</R.Writer>
                  <R.Date>{item.date}</R.Date>
                </R.NewsBottom>
              </R.NewsBox>
            ))}
        </R.NewsList>
      </R.GroupContainer>
    </R.Container>
  );
}

export default RecentNews;
