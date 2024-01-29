import React from 'react';
import OptionType from '@components/common/dropdown/OptionType';
import Dropdown from '@components/common/dropdown/Dropdown';
import useDropdown from '@hooks/useDropdown';

function Temp1() {
  const options: OptionType[] = [
    { value: '1', label: '등급 순' },
    { value: '2', label: 'ho' },
    { value: '3', label: 'yo' },
    { value: '4', label: 'so' },
  ];

  const { currentOption, onChange } = useDropdown({});

  return (
    <div style={{ height: '30rem' }}>
      <Dropdown placeholder="hello" options={options} onChange={onChange} />
    </div>
  );
}

export default Temp1;
