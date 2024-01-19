import React from 'react';

import RadioGroup from '@components/common/radio/RadioGroup';
import RadioType from '@components/common/radio/RadioType';

function Temp2() {
  const options: RadioType[] = [
    {
      tag: '필수',
      disabled: false,
      label: '1번입니다.',
      value: '1',
    },
    {
      tag: '필수',
      disabled: false,
      label: '2번입니다.',
      value: '2',
    },
    {
      tag: '필수',
      disabled: true,
      label: '3번입니다.',
      value: '3',
    },
  ];
  return (
    <div style={{ height: '30rem' }}>
      <RadioGroup options={options} />
    </div>
  );
}

export default Temp2;
