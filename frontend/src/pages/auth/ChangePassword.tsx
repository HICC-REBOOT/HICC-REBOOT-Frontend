import React, { useEffect } from 'react';
import styled from 'styled-components';
import { ConfigProvider } from 'antd';
import theme from '@styles/theme';
import { useForm } from 'react-hook-form';
import { DeviceProvider } from '@assets/mediaQuery';
import usePostChangePassword, { ChangePasswordRequest } from '@query/post/usePostChangePassword';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
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
`;

function ChangePassword() {
  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm<ChangePasswordRequest>();

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const nonce = params.get('id');

  const navigate = useNavigate();

  // 잘못된 접근 시 메인페이지로 리디렉트
  useEffect(() => {
    if (nonce !== null) {
      setValue('nonce', nonce);
      return;
    }

    alert('잘못된 접근입니다.');
    navigate('/');
  }, [nonce, navigate, setValue]);

  const { changePassword, isPending } = usePostChangePassword();

  const onSubmit = async (data: ChangePasswordRequest) => {
    changePassword(data);
  };

  return (
    <Container>
      <Content onSubmit={handleSubmit(onSubmit)}>
        <R.InputWrapper>
          <R.Label>비밀번호</R.Label>
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
              {...register('password', {
                required: '비밀번호를 입력해주세요.',
                minLength: {
                  value: 8,
                  message: '8글자 이상 입력해주세요',
                },
              })}
            />
          </ConfigProvider>
          <R.ErrorMsg>{errors.password?.message as string}</R.ErrorMsg>
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
            비밀번호 변경
          </R.CompleteBtn>
        </ConfigProvider>
      </Content>
    </Container>
  );
}

export default ChangePassword;
