import { useState } from 'react';
import OptionType from '@components/common/dropdown/OptionType';

interface UseDropdownProps {
  defalutValue?: OptionType;
}

/**
 * useDropdown
 * @param {OptionType} defalutValue: 디폴트로 넣어줄 값
 * @returns 현재 옵션, onChange function
 */

function useDropdown({ defalutValue }: UseDropdownProps) {
  const [option, setOption] = useState<OptionType | null>(defalutValue || null);

  const onChange = (selectedOption: OptionType | null) => {
    setOption(selectedOption);
  };

  return {
    currentOption: option,
    onChange,
  };
}

export default useDropdown;
