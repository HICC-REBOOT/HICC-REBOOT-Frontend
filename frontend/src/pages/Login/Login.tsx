import React, { useEffect, useState } from 'react';
import { ConfigProvider } from 'antd';
import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons';
import theme from '@styles/theme';
import useInput from '@hooks/useInput';
import * as L from './Login.style';

export default function Login() {
  const [id, setid] = useInput<string>('');
  const [pw, setPw] = useInput<string>('');

  const [errorMsg1, setErrorMsg1] = useState<string>('');
  const [errorMsg2, setErrorMsg2] = useState<string>('');

  const onClickBtn = () => {
    if (id.length === 0) setErrorMsg1('아이디를 입력해주세요.');
    if (pw.length === 0) setErrorMsg2('비밀번호를 입력해주세요.');
  };

  useEffect(() => {
    if (id.length > 0) setErrorMsg1('');
  }, [id]);
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
            <L.CustomInput value={id} onChange={setid} />
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
              onChange={setPw}
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
          <L.CompleteBtn type="primary" onClick={onClickBtn}>
            로그인
          </L.CompleteBtn>
        </ConfigProvider>
      </L.Content>
    </L.Container>
  );
}
