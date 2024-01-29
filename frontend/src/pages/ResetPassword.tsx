import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ConfigProvider } from 'antd';
import theme from '@styles/theme';
import useInput from '@hooks/useInput';
import * as R from './Login/Login.style';

const Container = styled.div`
  padding: 10rem 0;
  min-height: 80vh;
  width: 100%;
  display: flex;
  justify-content: center;

  ${(props) => props.theme.media.tablet`
    padding: 20rem 0;
  `};
  ${(props) => props.theme.media.desktop`
    padding: 20% 0;
  `};
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4.4rem;
  width: 32.8rem;
`;

export default function ResetPassword() {
  const [sid, setSid] = useInput<string>('');
  const [email, setEmail] = useInput<string>('');
  const [errorMsg1, setErrorMsg1] = useState<string>('');
  const [errorMsg2, setErrorMsg2] = useState<string>('');

  const onClickBtn = () => {
    const sidRegex = /^[a-zA-Z][0-9]{6}$/;
    if (sid.length === 0) setErrorMsg1('학번을 입력해주세요.');
    else if (!sidRegex.test(sid)) setErrorMsg1('학번 형식이 올바르지 않습니다.');
    else setErrorMsg1('일치하는 회원정보가 없습니다.');

    const emailRegex = /^([a-zA-Z0-9_.-]+)@([a-zA-Z0-9_.-]+)\.([a-zA-Z]{2,5})$/;
    if (email.length === 0) setErrorMsg2('이메일을 입력해주세요.');
    else if (!emailRegex.test(email)) setErrorMsg2('이메일 형식이 올바르지 않습니다.');
    else setErrorMsg2('일치하는 회원정보가 없습니다.');
  };

  useEffect(() => {
    if (sid.length > 0) setErrorMsg1('');
  }, [sid]);
  useEffect(() => {
    if (email.length > 0) setErrorMsg2('');
  }, [email]);

  return (
    <Container>
      <Content>
        <R.InputWrapper>
          <R.Label>학번</R.Label>
          <ConfigProvider
            theme={{
              token: {
                colorBgContainer: theme.colors.grey001,
                colorPrimary: theme.colors.point1,
                lineWidth: 0,
              },
            }}
          >
            <R.CustomInput value={sid} onChange={setSid} />
          </ConfigProvider>
          <R.ErrorMsg>{errorMsg1}</R.ErrorMsg>
        </R.InputWrapper>
        <R.InputWrapper>
          <R.Label>이메일</R.Label>
          <ConfigProvider
            theme={{
              token: {
                colorBgContainer: theme.colors.grey001,
                colorPrimary: theme.colors.point1,
                lineWidth: 0,
              },
            }}
          >
            <R.CustomInput value={email} onChange={setEmail} />
          </ConfigProvider>
          <R.ErrorMsg>{errorMsg2}</R.ErrorMsg>
        </R.InputWrapper>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: theme.colors.point1,
            },
            components: {
              Button: {
                paddingInline: 0,
                paddingBlock: 0,
              },
            },
          }}
        >
          <R.CompleteBtn type="primary" onClick={onClickBtn}>
            비밀번호 재발급
          </R.CompleteBtn>
        </ConfigProvider>
      </Content>
    </Container>
  );
}
