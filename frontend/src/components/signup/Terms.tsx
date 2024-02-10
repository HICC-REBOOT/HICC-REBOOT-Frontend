import React, { useEffect, useState } from 'react';
import CheckBoxBlank from '@assets/image/checkbox_blank.svg';
import CheckBox from '@assets/image/checkbox.svg';
import theme from '@styles/theme';
import { useNavigate } from 'react-router-dom';
import ROUTE from '@constants/route';
import * as T from './style/Terms.style';

const AgreeTermsContent = `회원가입 시점에 hicc가 이용자로부터 수집하는 개인정보는 아래와 같습니다.

회원 가입 시 필수항목으로 아이디, 비밀번호, 이름, 닉네임, 학과, 휴대전화번호를 필수항목으로 수집합니다.
서비스 이용 과정에서 이용자로부터 수집하는 개인정보는 아래와 같습니다.
회원정보 또는 개별 서비스에서 프로필 정보(닉네임)를 설정할 수 있습니다.
이용자 동의 후 개인정보를 추가 수집하는 경우회원가입 및 서비스 이용 과정에서 이용자가 개인정보 수집에 대해 동의를 하고 직접 정보를 입력하는 경우, 해당 개인정보를 수집합니다.
기기정보와 같은 생성정보는 PC웹, 모바일 웹/앱 이용 과정에서 자동으로 생성되어 수집될 수 있습니다.
수집한 개인정보의 이용'hicc'(모바일 웹/앱 포함)의 회원관리, 서비스 개발·제공 및 향상, 안전한 인터넷 이용환경 구축 등 아래의 목적으로만 개인정보를 이용합니다.
회원 가입 의사의 확인, 이용자 및 법정대리인의 본인 확인, 이용자 식별, 회원탈퇴 의사의 확인 등 회원관리를 위하여 개인정보를 이용합니다.
콘텐츠 등 기존 서비스 제공에 더하여, 서비스 방문 및 이용기록의 분석 등을 위하여 개인정보를 이용합니다.
법령 및 이용약관을 위반하는 회원에 대한 이용 제한 조치, 부정 이용 행위를 포함하여 서비스의 원활한 운영에 지장을 주는 행위에 대한 방지 및 제재, 약관 개정 등의 고지사항 전달, 분쟁조정을 위한 기록 보존 등 이용자 보호 및 서비스 운영을 위하여 개인정보를 이용합니다.
보안, 프라이버시, 안전 측면에서 이용자가 안심하고 이용할 수 있는 서비스 이용환경 구축을 위해 개인정보를 이용합니다.
hicc는 원칙적으로 이용자의 개인정보를 회원 탈퇴 또는 이용목적 달성 시 지체없이 파기하고 있습니다.
단, 이용자에게 개인정보 보관기간에 대해 별도의 동의를 얻은 경우, 또는 법령에서 일정 기간 정보보관 의무를 부과하는 경우에는 해당 기간 동안 개인정보를 안전하게 보관합니다.
이용자에게 개인정보 보관기간에 대해 회원가입 시 동의를 얻은 경우는 아래와 같습니다.
핸드폰 인증을 하지 않기 때문에 제외회원탈퇴, 서비스 종료, 이용자에게 동의받은 개인정보 보유기간의 도래와 같이 개인정보의 수집 및 이용목적이 달성된 개인정보는 재생이 불가능한 방법으로 파기하고 있습니다.
법령에서 보존의무를 부과한 정보에 대해서도 해당 기간 경과 후 지체없이 재생이 불가능한 방법으로 파기합니다.`;

const AnouncementContent = `아래 번호로 학생증 사진을 보내주시고
계좌번호로 회비를 입금해주세요 

번호: 010-4158-7384 
납부금액: 1.5만원
계좌: 카카오뱅크
3333297621248 윤찬호
❗학번 이름으로 입금부탁드립니다(ex 21강석진)

학생증과 입금이 확인되면 회원 승인과 카톡방 초대가 이루어집니다

감사합니다. :)
`;

export default function Terms() {
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const [allChecked, setAllChecked] = useState(false);

  useEffect(() => {
    setAllChecked(checked1 && checked2 && checked3);
  }, [checked1, checked2, checked3]);

  const navigate = useNavigate();

  const clickContinue = () => {
    if (allChecked) {
      navigate(ROUTE.ENTERINFO);
    }
  };

  return (
    <>
      <T.Title>약관동의</T.Title>
      <T.TermBox>
        <T.ScrollContainer>
          <T.TextArea>{AgreeTermsContent}</T.TextArea>
        </T.ScrollContainer>
      </T.TermBox>
      <T.Title>안내사항</T.Title>
      <T.TermBox>
        <T.ScrollContainer>
          <T.TextArea>{AnouncementContent}</T.TextArea>
        </T.ScrollContainer>
      </T.TermBox>
      <T.CheckerWrapper>
        <T.Essential>필수</T.Essential>
        <T.CheckText>이용약관에 동의합니다.</T.CheckText>
        {checked1 ? (
          <T.CheckBox src={CheckBox} alt="checkbox" onClick={() => setChecked1(!checked1)} />
        ) : (
          <T.CheckBoxBlank src={CheckBoxBlank} alt="checkboxblack" onClick={() => setChecked1(!checked1)} />
        )}
      </T.CheckerWrapper>
      <T.CheckerWrapper>
        <T.Essential>
          <T.EssentialText>필수</T.EssentialText>
        </T.Essential>
        <T.CheckText>동아리 회장단과 연락했습니다.</T.CheckText>
        {checked2 ? (
          <T.CheckBox src={CheckBox} alt="checkbox" onClick={() => setChecked2(!checked2)} />
        ) : (
          <T.CheckBoxBlank src={CheckBoxBlank} alt="checkboxblack" onClick={() => setChecked2(!checked2)} />
        )}
      </T.CheckerWrapper>
      <T.CheckerWrapper>
        <T.Essential>
          <T.EssentialText>필수</T.EssentialText>
        </T.Essential>
        <T.CheckText>회비 입금 완료했습니다.</T.CheckText>
        {checked3 ? (
          <T.CheckBox src={CheckBox} alt="checkbox" onClick={() => setChecked3(!checked3)} />
        ) : (
          <T.CheckBoxBlank src={CheckBoxBlank} alt="checkboxblack" onClick={() => setChecked3(!checked3)} />
        )}
      </T.CheckerWrapper>
      <T.ContinueButton
        onClick={clickContinue}
        style={{ background: allChecked ? theme.colors.point1 : theme.colors.grey002 }}
      >
        가입 진행하기
      </T.ContinueButton>
    </>
  );
}
