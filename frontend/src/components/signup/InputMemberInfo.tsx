import React from 'react';
import * as E from './style/EnterInfo.style';

interface InputData {
  label: string;
  type: string;
  errorMessage: string;
}

export default function InputMemberInfo({ label, type, errorMessage }: InputData) {
  return (
    <E.InputWrapper>
      <E.Label>{label}</E.Label>
      <E.InputField>
        <E.InputFieldInput type={type} />
      </E.InputField>
      <E.ErrorMessage>{errorMessage}</E.ErrorMessage>
    </E.InputWrapper>
  );
}
