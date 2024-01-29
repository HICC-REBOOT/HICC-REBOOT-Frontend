import React from 'react';
import useGetLatestNews from '@query/get/useGetLatestNews';
import { Grade, GRADE_ENUM } from '@components/type/CommonType';
import * as R from '@components/home/style/RecentNews.style';

interface News {
  articleId: number;
  grade: Grade;
  name: string;
  date: string;
  imageExistence: boolean;
  subject: string;
}

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
          {newsResponse &&
            Object.values(NEWS_ITEMS).map((item: News, index: number) => (
              <R.NewsBox key={index}>
                <R.NewsTitle>{item.subject}</R.NewsTitle>
                <R.NewsBottom>
                  <R.Label>{GRADE_ENUM[item.grade]}</R.Label>
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
