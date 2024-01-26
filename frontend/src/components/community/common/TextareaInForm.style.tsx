import { DeviceProvider } from '@assets/mediaQuery';
import styled from 'styled-components';

const Textarea = styled.textarea`
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

export default Textarea;
