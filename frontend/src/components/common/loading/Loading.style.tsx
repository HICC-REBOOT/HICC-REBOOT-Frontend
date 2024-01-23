import STYLE from '@constants/style';
import styled from 'styled-components';
import hexToRGBA from '@utils/hexToRgba';

const LoadingBackdrop = styled.div`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100vh;

  z-index: ${STYLE.Z_INDEX.TOP_PRIORITY + 1};
  background-color: ${(props) => hexToRGBA(props.theme.colors.black, 0.7)};
`;

export default LoadingBackdrop;
