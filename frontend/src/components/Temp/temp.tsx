import React from 'react';
import { Desktop, Mobile, Tablet } from '@assets/mediaQuery';
import useInput from '@hooks/useInput';
import * as T from './style/temp.style';

function Temp() {
  const [value, onChange] = useInput<string>('');
  return (
    <>
      <input type="text" value={value} onChange={onChange} />

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
