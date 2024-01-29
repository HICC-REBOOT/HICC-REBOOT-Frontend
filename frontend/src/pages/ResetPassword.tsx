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
  const [email, setEmail] = useInput<string>('');
  const [errorMsg, setErrorMsg] = useState<string>('');

  const onClickBtn = () => {
    const regex = /^([a-zA-Z0-9_.-]+)@([a-zA-Z0-9_.-]+)\.([a-zA-Z]{2,5})$/;
    if (email.length === 0) setErrorMsg('이메일을 입력해주세요.');
    else if (!regex.test(email)) setErrorMsg('이메일 형식이 올바르지 않습니다.');
    else setErrorMsg('일치하는 회원정보가 없습니다.');
  };

  useEffect(() => {
    if (email.length > 0) setErrorMsg('');
  }, [email]);

  return (
    <Container>
      <Content>
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
          <R.ErrorMsg>{errorMsg}</R.ErrorMsg>
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
