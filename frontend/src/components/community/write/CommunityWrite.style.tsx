import { DeviceProvider } from '@assets/mediaQuery';
import styled from 'styled-components';

export const Container = styled.main`
  & > * {
    margin-bottom: 2rem;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const InputTitle = styled.input`
  width: 100%;
  margin-top: 2rem;
  padding: 1rem 2rem;

  border-radius: 0.8rem;
  border: none;
  background: ${(props) => props.theme.colors.grey001};

  color: ${(props) => props.theme.colors.grey002};
  font-feature-settings:
    'clig' off,
    'liga' off;

  ${(props) => props.theme.typography[DeviceProvider()].body};
  outline: none;

  &::placeholder {
    color: ${(props) => props.theme.colors.grey002};
  }
`;

export const ImageContainer = styled.aside``;

export const Label = styled.div`
  margin-bottom: 1rem;
  color: ${(props) => props.theme.colors.white};
  ${(props) => props.theme.typography[DeviceProvider()].body};
`;

export const ImageUploads = styled.div`
  display: flex;
  width: 100%;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ImageUploadButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 6rem;
  height: 6rem;
  flex-shrink: 0;

  border-radius: 1rem;
  background: ${(props) => props.theme.colors.grey001};
`;
