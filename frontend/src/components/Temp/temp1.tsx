import React, { useEffect, useState } from 'react';
import Dropdown from '@components/common/dropdown/Dropdown';
import OptionType from '@components/common/dropdown/OptionType';

function Temp1() {
  const [option, setOption] = useState<OptionType | null>(null);

  const options: OptionType[] = [
    { value: '1', label: '등급 순' },
    { value: '2', label: 'ho' },
    { value: '3', label: 'yo' },
    { value: '4', label: 'so' },
  ];

  const onChange = (selectedOption: OptionType | null) => {
    setOption(selectedOption);
  };

  useEffect(() => {
    console.log(option);
  }, [option]);

  return (
    <div style={{ height: '30rem' }}>
      <Dropdown placeholder="hello" options={options} onChange={onChange} />
    </div>
  );
}

export default Temp1;
