import React, { useEffect, useState } from 'react';
import { ConfigProvider } from 'antd';
import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons';
import theme from '@styles/theme';
import * as L from './Login.style';

export default function Login() {
  const [sid, setSid] = useState<string>('');
  const [pw, setPw] = useState<string>('');

  const [errorMsg1, setErrorMsg1] = useState<string>('');
  const [errorMsg2, setErrorMsg2] = useState<string>('');

  const handleSid = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSid(e.target.value);
  };
  const handlePw = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPw(e.target.value);
  };

  const login = () => {
    if (sid.length === 0) setErrorMsg1('아이디를 입력해주세요.');
    if (pw.length === 0) setErrorMsg2('비밀번호를 입력해주세요.');
  };

  useEffect(() => {
    if (sid.length > 0) setErrorMsg1('');
  }, [sid]);
  useEffect(() => {
    if (pw.length > 0) setErrorMsg2('');
  }, [pw]);

  return (
    <L.Container>
      <L.Title>Login</L.Title>
      <L.Content>
        <L.InputWrapper>
          <L.Label>학번</L.Label>
          <ConfigProvider
            theme={{
              token: {
                colorBgContainer: theme.colors.grey001,
                colorPrimary: theme.colors.point1,
                lineWidth: 0,
              },
            }}
          >
            <L.CustomInput value={sid} onChange={handleSid} />
          </ConfigProvider>
          <L.ErrorMsg>{errorMsg1}</L.ErrorMsg>
        </L.InputWrapper>
        <L.InputWrapper>
          <L.Label>비밀번호</L.Label>
          <ConfigProvider
            theme={{
              token: {
                colorBgContainer: theme.colors.grey001,
                colorPrimary: theme.colors.point1,
                lineWidth: 0,
              },
            }}
          >
            <L.CustomPasswordInput
              value={pw}
              onChange={handlePw}
              iconRender={(visible) =>
                visible ? (
                  <EyeOutlined style={{ color: theme.colors.grey003 }} />
                ) : (
                  <EyeInvisibleOutlined style={{ color: theme.colors.grey003 }} />
                )
              }
            />
          </ConfigProvider>
          <L.ErrorMsg>{errorMsg2}</L.ErrorMsg>
        </L.InputWrapper>
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
          <L.CompleteBtn type="primary" onClick={login}>
            로그인
          </L.CompleteBtn>
        </ConfigProvider>
      </L.Content>
    </L.Container>
  );
}
