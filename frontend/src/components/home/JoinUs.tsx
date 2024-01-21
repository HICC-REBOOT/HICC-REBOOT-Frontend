import React from 'react';
import { Desktop, Mobile, Tablet } from '@assets/mediaQuery';
import { ReactComponent as LargeStar1 } from '@assets/image/joinus_large.svg';
import { ReactComponent as TinyStar1 } from '@assets/image/joinus_small.svg';
import { ReactComponent as LargeStar2 } from '@assets/image/joinus_large_mobile.svg';
import { ReactComponent as TinyStar2 } from '@assets/image/joinus_small_mobile.svg';
import * as J from './style/JoinUs.style';

function JoinUs() {
  return (
    <J.Container>
      <J.GroupContainer>
        <J.Content>동아리 회장에게 연락 후 가입해주세요</J.Content>
        <J.Title> Join us!</J.Title>
        <J.Button>
          <J.ButtonTitle>동아리원 등록</J.ButtonTitle>
          <J.ButtonCircle />
        </J.Button>
        <J.BigStar>
          <Mobile>
            <LargeStar2 />
          </Mobile>
          <Tablet>
            <LargeStar1 />
          </Tablet>
          <Desktop>
            <LargeStar1 />
          </Desktop>
        </J.BigStar>
        <J.SmallStar>
          <Mobile>
            <TinyStar2 />
          </Mobile>
          <Tablet>
            <TinyStar1 />
          </Tablet>
          <Desktop>
            <TinyStar1 />
          </Desktop>
        </J.SmallStar>
      </J.GroupContainer>
    </J.Container>
  );
}

export default JoinUs;
