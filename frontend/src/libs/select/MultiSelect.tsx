import React, { useState } from 'react';
import Select, { ActionMeta, components } from 'react-select';
import { ReactComponent as Arrow } from '@assets/image/arrow.svg';
import categoryOptions, { CategoryOptionType, ValueOptionType } from '@constants/CollegeData';
import * as MS from './MultiSelect.style';

type MultiSelectProps = {
  onChange: (selectedOption: ValueOptionType | null, actionMeta: ActionMeta<ValueOptionType>) => void;
};

function MultiSelect({ onChange }: MultiSelectProps) {
  const [curCollege, setCurCollege] = useState<CategoryOptionType>();

  function DropdownIndicator(props: any) {
    return (
      <components.DropdownIndicator {...props}>
        <Arrow
          style={{
            transform: props.selectProps.menuIsOpen ? 'rotate(0deg)' : 'rotate(180deg)',
          }}
        ></Arrow>
      </components.DropdownIndicator>
    );
  }

  function MenuList(props: any) {
    return (
      <MS.CustomMenu>
        <MS.CustomLeftMenuList>
          {categoryOptions.map((college) => (
            <MS.CustomOption
              onClick={() => setCurCollege(college)}
              key={college.id}
              style={{
                backgroundColor: college.id === curCollege?.id ? 'var(--grey-300, #EAECEE)' : '',
              }}
            >
              {college.label}
            </MS.CustomOption>
          ))}
        </MS.CustomLeftMenuList>
        <MS.Border />
        <components.MenuList {...props} />
      </MS.CustomMenu>
    );
  }

  return (
    <Select
      options={curCollege?.values}
      styles={MS.multiSelectStyle}
      isSearchable={false}
      placeholder="선택"
      components={{ DropdownIndicator, MenuList }}
      maxMenuHeight={180}
      onChange={onChange}
      blurInputOnSelect={true}
    />
  );
}

export default MultiSelect;
