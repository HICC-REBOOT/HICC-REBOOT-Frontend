import React from 'react';
import { ActionMeta } from 'react-select';
import OptionType from './OptionType';
import DropdownIndicator from './DropdownIndicator';
import DropdownStyle from './style/Dropdown.style';

interface DropDownProps {
  placeholder: string;
  options: OptionType[];
  onChange: (selectedOption: OptionType | null, actionMeta: ActionMeta<OptionType>) => void;
  defaultValue?: OptionType;
}

function DropDown({ placeholder, options, onChange, defaultValue }: DropDownProps) {
  return (
    <DropdownStyle
      options={options}
      classNamePrefix={'Dropdown'}
      defaultValue={defaultValue}
      isSearchable={true}
      placeholder={placeholder}
      components={{ DropdownIndicator }}
      onChange={onChange}
      blurInputOnSelect={true}
      noOptionsMessage={() => '해당 옵션은 존재하지 않습니다.'}
    />
  );
}

export default DropDown;
