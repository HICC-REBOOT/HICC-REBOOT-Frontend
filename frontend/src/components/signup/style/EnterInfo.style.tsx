/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { DeviceProvider } from '@assets/mediaQuery';

export const Wrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4rem;
  ${(props) => props.theme.media.mobile`

  `};

  ${(props) => props.theme.media.tablet`

  `};

  ${(props) => props.theme.media.desktop`
    flex-direction: row;
      
  `};

  ${(props) => props.theme.media.wide`
    flex-direction: row;

  `};
`;
export const Wrapper1 = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4rem;
`;
export const Wrapper2 = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4rem;
`;

export const Label = styled.label`
  width: 23.8rem;
  color: ${(props) => props.theme.colors.point1};
  font-feature-settings:
    'clig' off,
    'liga' off;
  ${(props) => props.theme.typography.common.caption2}
  margin-bottom: 0.4rem;
  margin-left: 1.2rem;
`;
export const InputWrapper = styled.div`
  width: 32.8rem;
  height: 7.8rem;
`;
export const InputField = styled.div`
  display: flex;
  width: 32.8rem;
  height: 5.4rem;
  flex-shrink: 0;
  border-radius: 1.6rem;
  margin-top: 0.4rem;
  margin-bottom: 0.8rem;
  background: ${(props) => props.theme.colors.grey001};
  justify-content: center;
  align-items: center;
`;
export const InputFieldInput = styled.input`
  width: 30.4rem;
  background: ${(props) => props.theme.colors.grey001};
  color: ${(props) => props.theme.colors.white};
  font-feature-settings:
    'clig' off,
    'liga' off;
  ${(props) => props.theme.typography[DeviceProvider()].body}
  border: none;
  outline: none;
`;
export const ErrorMessage = styled.div`
  width: 23.8rem;
  color: ${(props) => props.theme.colors.red};
  font-feature-settings:
    'clig' off,
    'liga' off;
  ${(props) => props.theme.typography.common.caption2}
  margin-left: 1.2rem;
`;
export const PhoneNumWrapper = styled.div`
  display: flex;
  width: 32.8rem;
  justify-content: space-between;
`;
export const PhoneNumField = styled.div`
  display: flex;
  width: 10.1rem;
  height: 5.4rem;
  flex-shrink: 0;
  border-radius: 1.6rem;
  background: ${(props) => props.theme.colors.grey001};
  align-items: center;
  justify-content: center;
`;
export const PhoneNumFieldInput = styled.input`
  width: 7.6rem;
  background: ${(props) => props.theme.colors.grey001};
  color: ${(props) => props.theme.colors.white};
  font-feature-settings:
    'clig' off,
    'liga' off;
  ${(props) => props.theme.typography[DeviceProvider()].body}
  border: none;
  outline: none;
`;
export const DropDownWrapper = styled.div`
  display: flex;
  width: 32.8rem;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 1.6rem;
  background: ${(props) => props.theme.colors.grey001};
`;
export const DropDown = styled.div`
  display: flex;
  width: 32.8rem;
  height: 5.4rem;
  border-radius: 1.6rem;
  background: ${(props) => props.theme.colors.grey001};
  justify-content: center;
  align-items: center;
  border: solid black;
`;
export const DropDownItem = styled.div`
  width: 24.6rem;
  color: ${(props) => props.theme.colors.white};
  font-feature-settings:
    'clig' off,
    'liga' off;
  ${(props) => props.theme.typography.common.caption1}
`;
export const ScrollContainer = styled.div`
  width: 32.8rem;
  height: 16.2rem;
  background: ${(props) => props.theme.colors.grey001};
  border-radius: 1.6rem;
`;
export const ScrollBox = styled.div`
  flex-direction: column;
  width: 31.8rem;
  height: 15.2rem;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  overflow-y: scroll;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 0.5rem;
    height: 14.6rem;
  }

  &::-webkit-scrollbar-thumb {
    width: 0.3rem;
    height: 5.5rem;

    background-color: #fff;
    border-radius: 1rem;
  }

  &::-webkit-scrollbar-track {
    width: 0.5rem;
    height: 14.6rem;

    background: rgba(255, 255, 255, 0.15);
    border-radius: 1rem;
  }
`;
export const ScrollItem = styled.div`
  display: flex;
  width: 30.8rem;
  height: 5.4rem;
  border-radius: 1.6rem;
  background: ${(props) => props.theme.colors.grey001};
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:active {
    opacity: 0.5;
  }
`;
export const ScrollDropDownItem = styled.div`
  width: 28.6rem;
  color: ${(props) => props.theme.colors.white};
  font-feature-settings:
    'clig' off,
    'liga' off;
  ${(props) => props.theme.typography.common.caption1}
`;
export const ContinueButton = styled.button`
  display: flex;
  width: 12.6rem;
  height: 4.6rem;
  padding: 1rem 2rem;
  justify-content: center;
  align-items: center;
  margin-top: 21.1rem;
  gap: 1rem;
  flex-shrink: 0;
  border-radius: 1.2rem;
  background: ${(props) => props.theme.colors.point1};
  color: var(--white, var(--Greyscale-light-white, #fff));
  text-align: center;
  font-feature-settings:
    'clig' off,
    'liga' off;
  ${(props) => props.theme.typography.common.button1}
  white-space:nowrap;
  cursor: pointer;
  &:active {
    opacity: 0.5;
  }
`;
