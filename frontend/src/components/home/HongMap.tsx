import React from 'react';
import * as H from '@components/home/style/HongMap.style';
import ArrowRight from '@assets/image/icon/arrowRight.svg?react';
import Check from '@assets/image/icon/check.svg?react';
import { Desktop } from '@assets/mediaQuery';
import theme from '@styles/theme';
import GradientButton from '@components/common/button/color/GradientButton';

function HongMap() {
  return (
    <H.Container>
      <H.GroupContainer>
        <H.Title>오시는 길</H.Title>
        <H.Box>
          <H.Picture />
          <H.BoxTitle>HONG MAP</H.BoxTitle>
          <H.BoxContents>HICC에서 개발한 우리학교 길찾기 서비스로 동아리방 위치를 볼 수 있어요</H.BoxContents>
          <H.GotoButton>
            <GradientButton
              type="button"
              onClick={() => window.open('https://hongikmap2023.pythonanywhere.com/')}
              style={{ padding: '1rem 1.2rem 1rem 2rem' }}
            >
              <p>홍맵 바로가기</p>
              <ArrowRight />
            </GradientButton>
          </H.GotoButton>
          <Desktop>
            <H.Group>
              <H.DescriptionGroup>
                <Check style={{ color: theme.colors.point1 }} />
                <H.Description>최적의 경로와 예상 소요 시간 검색</H.Description>
              </H.DescriptionGroup>
              <H.DescriptionGroup>
                <Check style={{ color: theme.colors.point1 }} />
                <H.Description>출발지, 도착지 입력 시 키워드 추천</H.Description>
              </H.DescriptionGroup>
              <H.DescriptionGroup>
                <Check style={{ color: theme.colors.point1 }} />
                <H.Description>엘리베이터 사용 여부에 따른 경로와 시간 비교</H.Description>
              </H.DescriptionGroup>
              <H.DescriptionGroup>
                <Check style={{ color: theme.colors.point1 }} />
                <H.Description>편의시설 아이콘을 클릭하여 위치 확인</H.Description>
              </H.DescriptionGroup>
            </H.Group>
          </Desktop>
        </H.Box>
      </H.GroupContainer>
    </H.Container>
  );
}

export default HongMap;
