import React from 'react';
import { Desktop, Mobile, Tablet } from '@assets/mediaQuery';
import { ReactComponent as StarL } from '@assets/image/JoinusStarL.svg';
import { ReactComponent as StarR } from '@assets/image/JoinusStarR.svg';
import { ReactComponent as ArrowRight } from '@assets/image/icon/arrowRight.svg';
import { useNavigate } from 'react-router-dom';
import GradientButton from '@components/common/button/color/GradientButton';
import * as J from './style/JoinUs.style';

function JoinUs() {
  const navigate = useNavigate();

  const navigateToSignup = () => {
    navigate('/signup');
  };
  return (
    <J.Container>
      <J.Circle1 />
      <J.Circle2 />
      <J.BackGround />
      <J.GroupContainer>
        <J.Content>동아리 회장에게 연락 후 가입해주세요</J.Content>
        <J.Title> Join us!</J.Title>
        <J.Button>
          <GradientButton type="button" onClick={navigateToSignup} style={{ padding: '1rem 1.2rem 1rem 2rem' }}>
            <p>동아리원 등록</p>
            <ArrowRight />
          </GradientButton>
        </J.Button>
        <J.BigStar>
          <Mobile>
            <StarR width={'2.93rem'} height={'2.93rem'} />
          </Mobile>
          <Tablet>
            <StarR width={'4.4rem'} height={'4.4rem'} />
          </Tablet>
          <Desktop>
            <StarR width={'4.4rem'} height={'4.4rem'} />
          </Desktop>
        </J.BigStar>
        <J.SmallStar>
          <Mobile>
            <StarL width={'1.47em'} height={'1.47rem'} />
          </Mobile>
          <Tablet>
            <StarL width={'2.2rem'} height={'2.2rem'} />
          </Tablet>
          <Desktop>
            <StarL width={'2.2em'} height={'2.2rem'} />
          </Desktop>
        </J.SmallStar>
      </J.GroupContainer>
    </J.Container>
  );
}

export default JoinUs;
