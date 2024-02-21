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
  dropdownWidth: string;
  isDisabled?: boolean;
}

// width을 추가해서 넘겨주고 싶지만 그게 안 돼서
// 가장 안 쓸 것 같은 props 중에 하나 골라서 넘겨주는 방식으로 구현했습니다....
function DropDown({ placeholder, options, onChange, defaultValue, dropdownWidth, isDisabled }: DropDownProps) {
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
      name={dropdownWidth}
      isDisabled={isDisabled}
    />
  );
}

export default DropDown;
