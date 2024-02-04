import ExpandableList from '@components/admin/CollapseTest';
import React from 'react';
import GradientButton from '@components/common/button/color/GradientButton';
import { ReactComponent as ArrowRight } from '@assets/image/icon/arrowRight.svg';

function Temp2() {
  return (
    <div style={{ height: '30rem', margin: 'auto', paddingTop: 60 }}>
      <GradientButton type="button" style={{ padding: '1rem 1.2rem 1rem 2rem' }}>
        <p>홍맵 바로가기</p>
        <ArrowRight style={{ marginLeft: '0.8rem' }} />
      </GradientButton>
    </div>
  );
}

export default Temp2;
