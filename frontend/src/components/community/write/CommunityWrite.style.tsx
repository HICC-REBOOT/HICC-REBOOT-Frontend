import { DeviceProvider } from '@assets/mediaQuery';
import styled from 'styled-components';

export const Container = styled.form`
  & > * {
    margin-bottom: 2rem;

    &:last-child {
      margin-bottom: 18.7rem;
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

export const Textarea = styled.textarea`
  width: 100%;
  min-height: 32.5rem;
  padding: 1rem 2rem;
  border-radius: 0.8rem;
  border: none;

  color: ${(props) => props.theme.colors.white};

  background: ${(props) => props.theme.colors.grey001};
  ${(props) => props.theme.typography[DeviceProvider()].body};
  overflow-y: hidden;
  outline: none;
  resize: none;

  &::placeholder {
    color: ${(props) => props.theme.colors.grey002};
  }
`;

export const ImageContainer = styled.aside`
  margin-bottom: 4rem;
`;

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

export const ImageView = styled.img`
  width: 6rem;
  height: 6rem;
  flex-shrink: 0;
  margin-right: 1rem;

  border-radius: 1rem;
  object-fit: cover;
`;

export const ImageUploadButton = styled.div<{ hide: boolean }>`
  display: ${(props) => (props.hide ? 'none' : 'flex')};
  justify-content: center;
  align-items: center;
  width: 6rem;
  height: 6rem;
  flex-shrink: 0;

  border-radius: 1rem;
  background: ${(props) => props.theme.colors.grey001};
`;

export const UploadButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4.6rem;
  margin: 0 auto;
  padding: 1rem 2rem;

  border: none;
  border-radius: 0.8rem;
  background: ${(props) => props.theme.colors.point1};

  color: ${(props) => props.theme.colors.white};
  ${(props) => props.theme.typography.common.button1};

  &:disabled {
    background-color: ${(props) => props.theme.colors.black};
  }
`;
