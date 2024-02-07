import STYLE from '@constants/style';
import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  justify-content: center;
  align-items: center;
  /* position: absolute; */
  width: 100vw;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.6);
  z-index: ${STYLE.Z_INDEX.BACKDROP};
`;

export const Container = styled.main`
  position: relative;
  width: 32.8rem;
  height: 41.7rem;
  border-radius: 2rem;
  background: ${(props) => props.theme.colors.grey001};
  z-index: ${STYLE.Z_INDEX.MODAL};
`;

export const Title = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 8.9rem;

  margin: 0 auto;
  margin-top: 3.2rem;
  padding: 0 4.25rem;

  border: none;

  color: ${(props) => props.theme.colors.white};
  ${(props) => props.theme.typography.mobile.subtitle};
  line-height: 160%;
`;

export const Content = styled.body`
  width: 100%;
  height: 24rem;
  border: none;
  background-color: ${(props) => props.theme.colors.grey001};
`;

export const Buttons = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 5.6rem;
  border: none;
`;

export const CancelButton = styled.button`
  width: 12.4rem;
  height: 100%;
  border: none;
  border-bottom-left-radius: 2rem;
  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.black};
  ${(props) => props.theme.typography.common.button1};
`;

export const OkButton = styled.button`
  width: 20.4rem;
  height: 100%;
  border: none;
  border-bottom-right-radius: 2rem;
  background-color: ${(props) => props.theme.colors.point1};
  color: ${(props) => props.theme.colors.black};
  ${(props) => props.theme.typography.common.button1};
`;
