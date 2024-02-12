import React from 'react';
import { ConfigProvider } from 'antd';
import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons';
import theme from '@styles/theme';
import ROUTE from '@constants/route';
import { useNavigate } from 'react-router-dom';
import login from '@auth/login';
import useAuth from '@hooks/useAuth';
import { Controller, useForm } from 'react-hook-form';
import * as L from './Login.style';

interface LoginForm {
  studentNumber: string;
  password: string;
}

export default function Login() {
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>();

  const { setIsLogin } = useAuth();

  const onSubmit = async (data: LoginForm) => {
    const isSuccess = await login(data);

    if (isSuccess) {
      setIsLogin(true);
      navigate(ROUTE.HOME);
      return null;
    }

    alert('로그인에 실패했습니다.');
    return null;
  };

  return (
    <L.Container>
      <L.Title>Login</L.Title>
      <L.Content onSubmit={handleSubmit(onSubmit)}>
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
            <Controller
              control={control}
              name="studentNumber"
              rules={{ required: '아이디를 입력해주세요.' }}
              render={({ field: { onChange, value, ref } }) => (
                <L.CustomInput ref={ref} value={value} onChange={onChange} />
              )}
            />
          </ConfigProvider>
          <L.ErrorMsg>{errors.studentNumber?.message}</L.ErrorMsg>
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
            <Controller
              control={control}
              name="password"
              rules={{ required: '비밀번호를 입력해주세요.' }}
              render={({ field: { onChange, value, ref } }) => (
                <L.CustomPasswordInput
                  ref={ref}
                  value={value}
                  onChange={onChange}
                  iconRender={(visible) =>
                    visible ? (
                      <EyeOutlined style={{ color: theme.colors.grey003 }} />
                    ) : (
                      <EyeInvisibleOutlined style={{ color: theme.colors.grey003 }} />
                    )
                  }
                />
              )}
            />
          </ConfigProvider>
          <L.ErrorMsg>{errors.password?.message}</L.ErrorMsg>
        </L.InputWrapper>
        <L.PasswordIssue onClick={() => navigate(ROUTE.RESET_PASSWORD)}>비밀번호 재발급</L.PasswordIssue>
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
          <L.CompleteBtn type="primary" htmlType="submit">
            로그인
          </L.CompleteBtn>
        </ConfigProvider>
      </L.Content>
    </L.Container>
  );
}
