import RadioType from '@components/common/radio/RadioType';
import radioStore from '@libs/store/radioState';
import { useEffect } from 'react';
import { useRecoilState, useResetRecoilState } from 'recoil';

function useRadio(defaultOptions: RadioType | undefined) {
  const [currentOption, setCurrentOption] = useRecoilState<RadioType | undefined>(radioStore);
  const clearOptionState = useResetRecoilState(radioStore);

  // 디폴트 값 넣어주기
  useEffect(() => {
    setCurrentOption(defaultOptions);
  }, [defaultOptions, setCurrentOption]);

  // 옵션 선택
  const selectOption = (option: RadioType) => {
    if (!option.disabled) setCurrentOption(option);
  };

  useEffect(() => {
    return () => {
      clearOptionState();
    };
  }, [clearOptionState]);

  return {
    currentOption,
    selectOption,
  };
}

export default useRadio;
