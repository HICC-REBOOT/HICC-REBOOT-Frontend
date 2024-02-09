import React, { useEffect, useState } from 'react';
import OptionType from '@components/common/dropdown/OptionType';
import Dropdown from '@components/mypage/Dropdown';
import useDropdown from '@hooks/useDropdown';
import useInput from '@hooks/useInput';
import withdrawal, { WithdrawalParameter } from '@components/common/popup/withdrawal/withdrawal';
import useGetProfile from '@query/get/useGetProfile';
import usePatchProfile from '@query/patch/usePatchProfile';
import useGetMajors from '@query/get/useGetMajors';
import { ReactComponent as Check } from '@assets/image/icon/check.svg';
import theme from '@styles/theme';
import { GRADE_ENUM } from '@components/type/CommonType';
import useDeleteProfile from '@query/delete/useDeleteProfile';

import * as M from './style/MyInfo.style';

interface MajorInfo {
  name: string;
}

function MyInfo() {
  const majorsData = useGetMajors().data;
  const majorsList: MajorInfo[] = Array.isArray(majorsData) ? majorsData : [];

  const mapToOptionsFormat = (majors: MajorInfo[] | undefined): OptionType[] => {
    if (!majors) {
      return [];
    }

    return majors.map((major, index) => ({
      value: `${index + 1}`,
      label: major.name,
    }));
  };

  const options: OptionType[] = mapToOptionsFormat(majorsList);

  const myInfo = useGetProfile();
  const defaultDepartmentOption = options.find((option) => option.label === myInfo.data.department);

  const { currentOption, onChange } = useDropdown({ defalutValue: defaultDepartmentOption });
  const [phoneNumber, phoneNChange] = useInput('');
  const [email, emailChange] = useInput('');
  const [password, passwordChange] = useInput('');
  const [passwordConfirm, passwordConfirmChange] = useInput('');
  const [buttonState, setButton] = useState(true);
  const [numberState, setNumberState] = useState(true);
  const [emailState, setEmailState] = useState(true);
  const [majorState, setMajorState] = useState(true);
  const [passwordState, setPasswordState] = useState(true);
  const [passwordConfirmState, setPasswordConfirmState] = useState(true);

  const { patchProfile, isPending } = usePatchProfile();

  const { deleteProfile } = useDeleteProfile();

  useEffect(() => {
    phoneNChange(myInfo.data.phoneNumber ?? '');
    emailChange(myInfo.data.email ?? '');
  }, [myInfo.data]);

  const handleWithdrawal = () => {
    const withdrawalConfirmParams: WithdrawalParameter = {
      title: '탈퇴하시겠습니까?',
      content: '회원 정보가 모두 삭제되며,\n 기존에 작성한 글은 유지됩니다',
      okText: '탈퇴',
      cancelText: '취소',
      isDangerous: true,
      onOk: () => {
        deleteProfile();
      },
    };

    withdrawal(withdrawalConfirmParams);
  };

  useEffect(() => {
    const phoneRE = /^010-\d{4}-\d{4}$/;
    const emailRE =
      /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    const passwordRE = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/;
    if (phoneRE.test(phoneNumber)) {
      setNumberState(false);
    } else {
      setNumberState(true);
    }
    if (currentOption !== null) {
      setMajorState(false);
    } else {
      setMajorState(true);
    }
    if (emailRE.test(email)) {
      setEmailState(false);
    } else {
      setEmailState(true);
    }
    if (passwordRE.test(password) || !password) {
      setPasswordState(false);
    } else {
      setPasswordState(true);
    }
    if (password === passwordConfirm) {
      setPasswordConfirmState(false);
    } else {
      setPasswordConfirmState(true);
    }
  }, [phoneNumber, email, currentOption, password, passwordConfirm]);

  useEffect(() => {
    if (numberState === false && emailState === false && passwordState === false && passwordConfirmState === false) {
      setButton(false);
    } else {
      setButton(true);
    }
  }, [numberState, emailState, passwordState, passwordConfirmState]);

  const handleSubmit = () => {
    const submitParam = {
      phoneNumber,
      email,
      department: currentOption ? currentOption.label : '',
      password,
    };
    patchProfile(submitParam);
  };

  const formatPhoneNumber = (input: string) => {
    const numericInput = input.replace(/\D/g, '');
    const formattedNumber = numericInput.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');

    return formattedNumber;
  };

  const handlePhoneInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const formattedNumber = formatPhoneNumber(event.target.value);
    const limitedNumber = formattedNumber.slice(0, 13);
    phoneNChange(limitedNumber);
  };

  return (
    <M.Container>
      <M.GroupContainer>
        <M.Title>
          <M.Name>{myInfo.data.name}</M.Name>
          <M.Label>{GRADE_ENUM[myInfo.data.grade]}</M.Label>
        </M.Title>
        <M.BoxArea style={{ left: '0rem', top: '7.7rem' }}>
          <M.BoxTitle>전화번호</M.BoxTitle>
          {numberState === false && (
            <M.CheckDiv>
              <Check color={theme.colors.point2} />
            </M.CheckDiv>
          )}
          <M.Input
            onChange={handlePhoneInputChange}
            value={phoneNumber}
            defaultValue={myInfo.data.phoneNumber}
          ></M.Input>
          {numberState === true && <M.BoxAlert>올바른 형식으로 기입해주세요</M.BoxAlert>}
        </M.BoxArea>
        <M.BoxArea style={{ right: '0rem', top: '7.7rem' }}>
          <M.BoxTitle>이메일</M.BoxTitle>
          {emailState === false && (
            <M.CheckDiv>
              <Check color={theme.colors.point2} />
            </M.CheckDiv>
          )}
          <M.Input onChange={emailChange} value={email}></M.Input>
          {emailState === true && <M.BoxAlert>올바른 형식으로 기입해주세요</M.BoxAlert>}
        </M.BoxArea>
        <M.BigBoxArea>
          <M.BoxTitle>비밀번호 변경</M.BoxTitle>
          <M.BigBox
            type="password"
            onChange={passwordChange}
            value={password}
            placeholder="비밀번호를 입력하세요"
          ></M.BigBox>
          {passwordState === true && <M.BoxAlert>영문 숫자 특수기호 조합 8자리 이상 기입해주세요</M.BoxAlert>}
        </M.BigBoxArea>
        <M.BigBoxArea>
          <M.BoxTitle>비밀번호 확인</M.BoxTitle>
          <M.BigBox
            type="password"
            onChange={passwordConfirmChange}
            value={passwordConfirm}
            placeholder="비밀번호를 입력하세요"
          ></M.BigBox>
          {passwordConfirmState === true && <M.BoxAlert>비밀번호가 다릅니다.</M.BoxAlert>}
        </M.BigBoxArea>
        <M.BigBoxArea>
          <M.BoxTitle>학과</M.BoxTitle>
          <Dropdown placeholder="전공" options={options} onChange={onChange} defaultValue={defaultDepartmentOption} />
          {!defaultDepartmentOption && majorState === true && <M.BoxAlert>전공을 선택해주세요</M.BoxAlert>}
        </M.BigBoxArea>
        <M.Button onClick={handleSubmit} disabled={buttonState || isPending}>
          프로필 수정
        </M.Button>
      </M.GroupContainer>
      <M.ExitArea>
        <M.ExitContent onClick={handleWithdrawal}>회원 탈퇴</M.ExitContent>
      </M.ExitArea>
      <M.BottomDiv />
    </M.Container>
  );
}

export default MyInfo;
