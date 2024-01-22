import STYLE from '@constants/style';
import hexToRGBA from '@utils/hexToRgba';
import styled from 'styled-components';

const ButtonStyle = styled.div<{ hide: boolean }>`
  position: fixed;

  bottom: 4rem;
  right: 1rem;

  --border-width: 0.1rem;
  --border-radius: 1.2rem;
  --gradient: linear-gradient(180deg, #ffffff77, #ffffff11);

  display: ${(props) => (props.hide ? 'none' : 'flex')};
  justify-content: center;
  align-items: center;
  width: 4.6rem;
  height: 4.6rem;
  margin: 0.4rem 1.6rem;

  background: var(--gradient);

  border-radius: var(--border-radius);
  background-color: ${(props) => hexToRGBA(props.theme.colors.grey002, 0.3)};

  color: ${(props) => props.theme.colors.white};
  ${(props) => props.theme.typography.common.button1};

  white-space: nowrap;
  cursor: pointer;
  z-index: ${STYLE.Z_INDEX.COMMON};

  &::before {
    content: '';
    display: block;
    width: calc(100% - calc(var(--border-width) * 2.5));
    height: calc(100% - calc(var(--border-width) * 2.5));

    background-color: #353538;
    position: absolute;

    top: var(--border-width);
    left: var(--border-width);

    border-radius: calc(var(--border-radius) - var(--border-width));
    z-index: ${STYLE.Z_INDEX.HIDE};
  }
`;

export default ButtonStyle;
