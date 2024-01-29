import styled from 'styled-components';
import { DeviceProvider } from '@assets/mediaQuery';
import hexToRGBA from '@utils/hexToRgba';

export const Container = styled.div`
  padding: 0.4rem 1.6rem 6rem 1.6rem;
  width: 100%;
  height: 30rem;
  display: flex;
  flex-direction: column;
  gap: 4rem;

  ${(props) => props.theme.media.tablet`
    padding: 4.4rem 2.4rem 7rem 2.4rem;
  `};

  ${(props) => props.theme.media.desktop`
    padding: 4.4rem 9.6rem 7rem 9.6rem;
  `};

  ${(props) => props.theme.media.wide`
    padding: 4.4rem 9.6rem 7rem 9.6rem;
  `};
`;

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 6rem;

  ${(props) => props.theme.media.desktop`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  `};

  ${(props) => props.theme.media.wide`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  `};
`;

export const TitleContainer = styled.div`
  display: flex;
  width: 100%;
`;

export const deleteBtn = styled.button`
  width: 2.4rem;
  height: 2.4rem;
  flex-shrink: 0;
  justify-self: flex-end;
`;

export const Line = styled.div`
  width: 0.4rem;
  border-radius: 1.6rem;
  height: 3.2rem;
  background-color: ${(props) => props.theme.colors.tag_academy};
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

  ${(props) => props.theme.media.tablet`
    gap: 2.3rem;
  `};

  ${(props) => props.theme.media.desktop`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  `};

  ${(props) => props.theme.media.wide`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  `};
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  ${(props) => props.theme.media.tablet`
    gap: 2.3rem;
  `};
  ${(props) => props.theme.media.desktop`
    gap: 2.1rem;
  `};

  ${(props) => props.theme.media.wide`
    gap: 2.1rem;
  `};
`;

export const ContentWrapper = styled.div`
  display: flex;
  gap: 0.8rem;
  align-items: center;
  width: 100%;
`;

export const TextAreaContainer = styled(ContentWrapper)`
  align-items: flex-start;

  ${(props) => props.theme.media.tablet`
    padding-right: 8.4rem;
  `};

  ${(props) => props.theme.media.desktop`
    padding-right: 8.4rem;
  `};

  ${(props) => props.theme.media.wide`
    padding-right: 8.4rem;
  `};
`;
export const Icon = styled.div`
  width: 2.4rem;
  height: 2.4rem;
  flex-shrink: 0;
  background-color: ${(props) => props.theme.colors.red};
`;

export const TextArea = styled.textarea`
  width: 100%;
  background-color: ${(props) => props.theme.colors.black};
  color: ${(props) => props.theme.colors.grey004};
  border-radius: 0.8rem;
  padding: 0.4rem 1rem;
  ${(props) => props.theme.typography.common.caption2};
  border: none;
  resize: none;
  outline: none;
`;

export const CompleteBtn = styled.button`
  width: 4.6rem;
  height: 4.6rem;
  align-self: flex-end;
  border-radius: 1.2rem;
  flex-shrink: 0;
  border: 0.1rem solid ${(props) => props.theme.colors.grey002};
  background-color: ${(props) => hexToRGBA(props.theme.colors.grey002, 0.3)};
`;
