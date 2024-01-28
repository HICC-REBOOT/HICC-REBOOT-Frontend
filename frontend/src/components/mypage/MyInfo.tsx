import React, { useEffect, useState } from 'react';
import OptionType from '@components/common/dropdown/OptionType';
import Dropdown from '@components/mypage/Dropdown';
import useDropdown from '@hooks/useDropdown';
import useInput from '@hooks/useInput';
import withdrawal, { WithdrawalParameter } from '@components/common/popup/withdrawal/withdrawal';
import { ReactComponent as Check } from '@assets/image/icon/check.svg';
import * as M from './style/MyInfo.style';

function MyInfo() {
  const options: OptionType[] = [
    { value: '1', label: '기초과학과' },
    { value: '2', label: '건설환경공학과' },
    { value: '3', label: '전자전기공학부' },
    { value: '4', label: '컴퓨터공학부' },
    { value: '5', label: '산업·데이터공학과' },
    { value: '6', label: '신소재화공시스템공학부' },
    { value: '7', label: '기계·시스템디자인공학부' },
    { value: '8', label: '건축학부' },
    { value: '9', label: '도시공학과' },
    { value: '10', label: '경영학부' },
    { value: '11', label: '영어영문학과' },
    { value: '12', label: '독어독문학과' },
    { value: '13', label: '독어독문학과' },
    { value: '14', label: '불어불문학과' },
    { value: '15', label: '국어국문학과' },
    { value: '16', label: '법학부' },
    { value: '17', label: '수학교육과' },
    { value: '18', label: '국어교육과' },
    { value: '19', label: '영어교육과' },
    { value: '20', label: '역사교육과' },
    { value: '21', label: '교육학과' },
    { value: '22', label: '동양화과' },
    { value: '23', label: '회화과' },
    { value: '24', label: '판화과' },
    { value: '25', label: '조소과' },
    { value: '26', label: '목조형가구학과' },
    { value: '27', label: '예술학과' },
    { value: '28', label: '금속조형디자인과' },
    { value: '29', label: '도예유리과' },
    { value: '30', label: '섬유미술패션디자인과' },
    { value: '31', label: '자율전공' },
    { value: '32', label: '디자인학부' },
    { value: '33', label: '경제학부' },
    { value: '34', label: '공연예술학부' },
    { value: '35', label: '디자인경영융합학부' },
    { value: '36', label: '캠퍼스자율전공(서울)' },
    { value: '37', label: '교양교육원' },
  ];

  const { currentOption, onChange } = useDropdown({});
  const { 0: phoneNumber, 1: phoneNChange } = useInput('');
  const { 0: email, 1: scholNChange } = useInput('');
  const { 0: password, 1: passwordChange } = useInput('');
  const { 0: passwordConfirm, 1: passwordConfirmChange } = useInput('');
  const [buttonState, setButton] = useState(true);
  const [numberState, setNumberState] = useState(true);
  const [emailState, setEmailState] = useState(true);
  const [majorState, setMajorState] = useState(true);
  const [passwordState, setPasswordState] = useState(true);
  const [passwordConfirmState, setPasswordConfirmState] = useState(true);

  const handleWithdrawal = () => {
    const withdrawalConfirmParams: WithdrawalParameter = {
      title: '탈퇴하시겠습니까?',
      content: '회원 정보가 모두 삭제되며,\n 기존에 작성한 글은 유지됩니다',
      okText: '탈퇴',
      cancelText: '취소',
      isDangerous: true,
      onOk: () => {
        // Perform the withdrawal action here
        console.log('Withdrawal confirmed');
      },
      // onCancel: () => {
      //   // Handle cancellation
      //   console.log('Withdrawal canceled');
      // },
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
    if (passwordRE.test(password)) {
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
    if (
      numberState === false &&
      majorState === false &&
      emailState === false &&
      passwordState === false &&
      passwordConfirmState === false
    ) {
      setButton(false);
    } else {
      setButton(true);
    }
  }, [numberState, majorState, emailState, passwordState, passwordConfirmState]);

  const handleSubmit = () => {
    const submitParam = {
      phoneNumber: { phoneNumber },
      schoolNumber: { schoolNumber: email },
      major: { currentOption },
    };
    console.log(submitParam);
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
          <M.Name>홍길동</M.Name>
          <M.Label>운영진</M.Label>
        </M.Title>
        <M.BoxArea style={{ left: '0rem', top: '7.7rem' }}>
          <M.BoxTitle>전화번호</M.BoxTitle>
          {numberState === false && (
            <M.CheckDiv>
              <Check />
            </M.CheckDiv>
          )}
          <M.Input onChange={handlePhoneInputChange} value={phoneNumber}></M.Input>
          {numberState === true && <M.BoxAlert>올바른 형식으로 기입해주세요</M.BoxAlert>}
        </M.BoxArea>
        <M.BoxArea style={{ right: '0rem', top: '7.7rem' }}>
          <M.BoxTitle>이메일</M.BoxTitle>
          {emailState === false && (
            <M.CheckDiv>
              <Check />
            </M.CheckDiv>
          )}
          <M.Input onChange={scholNChange}></M.Input>
          {emailState === true && <M.BoxAlert>올바른 형식으로 기입해주세요</M.BoxAlert>}
        </M.BoxArea>
        <M.BigBoxArea>
          <M.BoxTitle>비밀번호</M.BoxTitle>
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
          <Dropdown placeholder="전공" options={options} onChange={onChange} />
          {majorState === true && <M.BoxAlert>전공을 선택해주세요</M.BoxAlert>}
        </M.BigBoxArea>
        <M.Button onClick={handleSubmit} disabled={buttonState}>
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
