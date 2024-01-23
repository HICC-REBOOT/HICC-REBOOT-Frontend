import styled from 'styled-components';
import { DeviceProvider } from '@assets/mediaQuery';
import { ConfigProvider, Input } from 'antd';

export const Container = styled.div`
  padding: 4.8rem 1.6rem 6rem 1.6rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  position: relative;

  @media screen and (min-width: 768px) {
    padding: 4.4rem 2.4rem 7rem 2.4rem;
  }

  @media screen and (min-width: 1440px) {
    padding: 4.4rem 9.6rem 7rem 9.6rem;
  }
`;

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 6rem;

  @media screen and (min-width: 1440px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  width: 100%;
`;

export const deleteBtn = styled.div`
  width: 2.4rem;
  height: 2.4rem;
  background-color: ${(props) => props.theme.colors.red};
  flex-shrink: 0;
  justify-self: flex-end;
`;

export const Line = styled.div`
  width: 0.4rem;
  border-radius: 1.6rem;
  height: 3.2rem;
  background-color: pink;
  margin-right: 0.7rem;
`;

export const Title = styled.input`
  background-color: ${(props) => props.theme.colors.black};
  ${(props) => props.theme.typography[DeviceProvider()].body};
  color: ${(props) => props.theme.colors.white};
  padding: 0 1rem;
  border: none;
  height: 3.2rem;
  width: 100%;
  border-radius: 0.8rem;
  outline: none;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  width: 100%;

  @media screen and (min-width: 768px) {
    gap: 2.3rem;
  }

  @media screen and (min-width: 1440px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  @media screen and (min-width: 768px) {
    gap: 2.3rem;
  }
  @media screen and (min-width: 1440px) {
    gap: 2.1rem;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  gap: 0.8rem;
  align-items: center;
  width: 100%;
`;

export const TextAreaContainer = styled(ContentWrapper)`
  align-items: flex-start;
  @media screen and (min-width: 768px) {
    padding-right: 8.4rem;
  }
`;
export const Icon = styled.div`
  width: 2.4rem;
  height: 2.4rem;
  flex-shrink: 0;
  background-color: ${(props) => props.theme.colors.red};
`;

const { TextArea } = Input;
export const CustomTextArea = styled(TextArea)``;

export const CompleteBtn = styled.img`
  width: 4.6rem;
  height: 4.6rem;
  position: absolute;
  right: 1.6rem;
  bottom: 6rem;

  @media screen and (min-width: 768px) {
    right: 2.4rem;
    bottom: -4.6rem;
  }

  @media screen and (min-width: 1440px) {
    right: 9.6rem;
    bottom: -4.6rem;
  }
`;
