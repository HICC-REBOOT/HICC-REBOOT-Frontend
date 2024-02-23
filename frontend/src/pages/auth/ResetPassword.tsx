import React from 'react';
import styled from 'styled-components';
import { ConfigProvider } from 'antd';
import theme from '@styles/theme';
import { useForm } from 'react-hook-form';
import { DeviceProvider } from '@assets/mediaQuery';
import request from '@utils/request';
import usePostResetPassword, { ResetPasswordRequest } from '@query/post/usePostResetPassword';
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

const Content = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4.4rem;
  width: 32.8rem;
`;

const CustomInput = styled.input`
  ${(props) => props.theme.typography[DeviceProvider()].body};
  color: ${(props) => props.theme.colors.white};
  padding: 1.2rem;
  border: none;
  background-color: ${(props) => props.theme.colors.grey001};
  border-radius: 1.6rem;
  outline: none;
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    transition: background-color 5000s;
    -webkit-text-fill-color: #ffffff;
    -webkit-box-shadow: 0 0 0px 1000px #141415 inset;
  }
`;

function ResetPassword() {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<ResetPasswordRequest>();

  const { resetPassword, isPending } = usePostResetPassword();

  const onSubmit = async (data: ResetPasswordRequest) => {
    resetPassword(data);
    reset();
  };

  return (
    <Container>
      <Content onSubmit={handleSubmit(onSubmit)}>
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
            <CustomInput
              {...register('sid', {
                required: '학번을 입력해주세요.',
                pattern: {
                  value: /^[a-zA-Z][0-9]{6}$/,
                  message: '학번 형식이 올바르지 않습니다.',
                },
              })}
            />
          </ConfigProvider>
          <R.ErrorMsg>{errors.sid?.message as string}</R.ErrorMsg>
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
            <CustomInput
              {...register('email', {
                required: '이메일을 입력해주세요.',
                pattern: {
                  value: /^([a-zA-Z0-9_.-]+)@([a-zA-Z0-9_.-]+)\.([a-zA-Z]{2,5})$/,
                  message: '이메일 형식이 올바르지 않습니다.',
                },
              })}
            />
          </ConfigProvider>
          <R.ErrorMsg>{errors.email?.message as string}</R.ErrorMsg>
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
          <R.CompleteBtn type="primary" htmlType="submit" disabled={isPending}>
            비밀번호 재발급
          </R.CompleteBtn>
        </ConfigProvider>
      </Content>
    </Container>
  );
}

export default ResetPassword;
