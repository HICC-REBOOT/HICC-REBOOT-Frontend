/* eslint-disable no-use-before-define */
import { useForm } from 'react-hook-form';
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Search from '@assets/image/icon/search.svg';
import { useNavigate } from 'react-router-dom';
import ROUTE from '@constants/route';
import useGetDepartments from '@query/get/useGetDepartments';
import usePostSignup from '@query/post/usePostSignup';
import * as E from './style/EnterInfo.style';

interface Department {
  name: string;
}

interface FormType {
  name: string;
  studentNumber: string;
  password: string;
  password_confirm: string;
  email: string;
  num1: number;
  num2: number;
  num3: number;
}

export default function EnterInfo() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { isSubmitting, errors },
  } = useForm<FormType>();
  const password = useRef<string | null>();
  password.current = watch('password');
  const { departments } = useGetDepartments();

  const { writeSignup, isPending } = usePostSignup();

  const [major, setMajor] = useState('');
  const navigate = useNavigate();

  const onSubmit = (data: FormType) => {
    console.log('제출 : ', {
      studentNumber: data.studentNumber,
      password: data.password,
      name: data.name,
      department: major,
      phoneNumber: `${data.num1}-${data.num2}-${data.num3}`,
      email: 'hongik@gmail.com',
    });

    writeSignup({
      studentNumber: data.studentNumber,
      password: data.password,
      name: data.name,
      department: major,
      phoneNumber: `${data.num1}-${data.num2}-${data.num3}`,
      email: 'hongik@gmail.com',
    });
  };
  // const onSubmit = (data: FormType) => {
  //   console.log('data : ', data);
  // };

  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      <E.Wrapper>
        <E.Wrapper1>
          <E.InputWrapper>
            <E.Label>이름(실명)</E.Label>
            <E.InputField>
              <E.InputFieldInput
                id="name"
                type="text"
                placeholder="홍길동"
                {...register('name', {
                  required: true,
                  pattern: {
                    value: /^[가-힣]{2,7}$/,
                    message: '2글자 이상 작성해주세요',
                  },
                })}
              />
            </E.InputField>
            {errors.name && typeof errors.name.message === 'string' && (
              <E.ErrorMessage>{errors.name.message}</E.ErrorMessage>
            )}
          </E.InputWrapper>
          <E.InputWrapper>
            <E.Label>아이디(학번)</E.Label>
            <E.InputField>
              <E.InputFieldInput
                id="studentNumber"
                type="text"
                placeholder="C123456"
                {...register('studentNumber', {
                  required: true,
                  pattern: {
                    value: /^[A-Z]{1}\d{6}$/,
                    message: '올바른 형식으로 기입해주세요',
                  },
                })}
              />
            </E.InputField>
            {errors.studentNumber && typeof errors.studentNumber.message === 'string' && (
              <E.ErrorMessage>{errors.studentNumber.message}</E.ErrorMessage>
            )}
          </E.InputWrapper>
          <E.InputWrapper>
            <E.Label>비밀번호</E.Label>
            <E.InputField>
              <E.InputFieldInput
                id="password"
                type="password"
                placeholder="비밀번호를 입력하세요"
                {...register('password', {
                  required: true,
                  minLength: {
                    value: 8,
                    message: '8글자 이상 입력해주세요',
                  },
                })}
              />
            </E.InputField>
            {errors.password && typeof errors.password.message === 'string' && (
              <E.ErrorMessage>{errors.password.message}</E.ErrorMessage>
            )}
          </E.InputWrapper>
          <E.InputWrapper>
            <E.Label>비밀번호 확인</E.Label>
            <E.InputField>
              <E.InputFieldInput
                id="password_confirm"
                type="password"
                placeholder="비밀번호를 입력하세요"
                {...register('password_confirm', {
                  required: true,
                  validate: (value) => value === password.current,
                })}
              />
            </E.InputField>
            {errors.password_confirm && typeof errors.password_confirm.message === 'string' && (
              <E.ErrorMessage>일치하지 않습니다</E.ErrorMessage>
            )}
          </E.InputWrapper>
        </E.Wrapper1>
        <E.Wrapper2>
          <E.InputWrapper>
            <E.Label>이메일</E.Label>
            <E.InputField>
              <E.InputFieldInput
                id="email"
                type="email"
                placeholder="Hongik@gmail.com"
                {...register('email', {
                  required: true,
                })}
              />
            </E.InputField>
            {errors.email && typeof errors.email.message === 'string' && (
              <E.ErrorMessage>올바른 형식으로 기입해주세요</E.ErrorMessage>
            )}
          </E.InputWrapper>
          <E.InputWrapper>
            <E.Label>전화번호</E.Label>
            <E.PhoneNumWrapper>
              <E.PhoneNumField>
                <E.PhoneNumFieldInput
                  id="num1"
                  type="number"
                  placeholder="010"
                  {...register('num1', {
                    required: true,
                    pattern: {
                      value: /^\d{2,3}$/,
                      message: '제대로 입력해주세요',
                    },
                  })}
                />
              </E.PhoneNumField>
              <E.PhoneNumField>
                <E.PhoneNumFieldInput
                  id="num2"
                  type="number"
                  placeholder="1234"
                  {...register('num2', {
                    required: true,
                    pattern: {
                      value: /^\d{3,4}$/,
                      message: '제대로 입력해주세요',
                    },
                  })}
                />
              </E.PhoneNumField>
              <E.PhoneNumField>
                <E.PhoneNumFieldInput
                  id="num3"
                  type="number"
                  placeholder="5678"
                  {...register('num3', {
                    required: true,
                    pattern: {
                      value: /^\d{4}$/,
                      message: '제대로 입력해주세요',
                    },
                  })}
                />
              </E.PhoneNumField>
            </E.PhoneNumWrapper>
          </E.InputWrapper>
          <E.InputWrapper>
            <E.Label>학과</E.Label>
            <E.DropDownWrapper>
              <E.DropDown>
                <E.DropDownItem>{major}</E.DropDownItem>
                <SearchButton src={Search} alt="search" />
              </E.DropDown>
              <E.ScrollContainer>
                <E.ScrollBox>
                  {departments.data.map((department: Department, index: number) => (
                    <E.ScrollItem key={index} onClick={() => setMajor(department.name)}>
                      <E.ScrollDropDownItem>{department.name}</E.ScrollDropDownItem>
                    </E.ScrollItem>
                  ))}
                </E.ScrollBox>
              </E.ScrollContainer>
            </E.DropDownWrapper>
          </E.InputWrapper>
        </E.Wrapper2>
      </E.Wrapper>
      <E.ContinueButton type="submit" disabled={isSubmitting || isPending}>
        가입하기
      </E.ContinueButton>
    </Container>
  );
}

const Container = styled.form`
  width: 100%;
  min-height: 100vh;
  padding: 3.6rem 1.6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.8rem;
  color: white;
  background-color: ${(props) => props.theme.colors.black};
  ${(props) => props.theme.media.desktop`
    margin-top: 18.8rem;
  `};

  ${(props) => props.theme.media.wide`
    margin-top: 18.8rem;
  `};
`;
const SearchButton = styled.img`
  width: 2.4rem;
  height: 2.4rem;
  flex-shrink: 0;
  margin-left: 3.1rem;
  &:active {
    opacity: 0.3;
  }
`;
