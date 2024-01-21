import React from 'react';
import { ActionMeta } from 'react-select';
import OptionType from './OptionType';
import DropdownIndicator from './DropdownIndicator';
import DropdownStyle from './Dropdown.style';

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
      isSearchable={false}
      placeholder={placeholder}
      components={{ DropdownIndicator }}
      onChange={onChange}
      blurInputOnSelect={true}
    />
  );
}

export default DropDown;
