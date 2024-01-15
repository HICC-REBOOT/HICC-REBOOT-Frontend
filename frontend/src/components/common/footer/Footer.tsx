import React from 'react';
import Instagram from '@assets/image/Icon_large.svg';
import * as F from './Footer.style';

const footerText = {
  hicc: 'hicc',
  leaderFormat: '회장 ',
  location: `홍익대학교 중앙 컴퓨터 동아리 HICC / 
  Hongik Computer Club
  동아리실 G429`,
  copyright: `Copyrightⓒ2024.HICC. All rights reserved.`,
};

function Footer() {
  const openInstagram = () => {
    window.open('https://www.instagram.com/hongik_hicc/');
  };
  return (
    <F.Container>
      <F.LeftSide>
        <F.HICC>{footerText.hicc}</F.HICC>
        <F.Leader>
          {footerText.leaderFormat}
          {`윤찬호`}
        </F.Leader>
        <F.Location>{footerText.location}</F.Location>
        <F.Copyright>{footerText.copyright}</F.Copyright>
      </F.LeftSide>
      <F.RightSide>
        <F.Instagram src={Instagram} onClick={openInstagram} />
      </F.RightSide>
    </F.Container>
  );
}

export default Footer;
