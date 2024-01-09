import React from 'react';
import { Desktop, Mobile, Tablet } from '@assets/mediaQuery';
import * as T from './style/temp.style';

function Temp() {
  return (
    <>
      <Mobile>
        <T.Text>Mobile</T.Text>
      </Mobile>
      <Tablet>
        <T.Text>Tablet</T.Text>
      </Tablet>
      <Desktop>
        <T.Text>Desktop</T.Text>
      </Desktop>
    </>
  );
}

export default Temp;
