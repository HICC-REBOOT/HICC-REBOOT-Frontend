import hexToRGBA from '@utils/hexToRgba';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
`;

export const WriterPart = styled.div`
  display: flex;
  align-items: center;
`;

export const GradeTag = styled.div<{ show: boolean }>`
  display: ${(props) => (props.show ? 'flex' : 'none')};
  padding: 0.5rem 1.2rem;
  justify-content: center;
  align-items: center;
  margin-right: 1rem;

  border-radius: 2rem;
  background: ${(props) => hexToRGBA(props.theme.colors.white, 0.1)};

  color: ${(props) => props.theme.colors.white};
  font-feature-settings:
    'clig' off,
    'liga' off;

  white-space: nowrap;
  ${(props) => props.theme.typography.common.caption2};
`;

export const Writer = styled.div`
  color: ${(props) => props.theme.colors.grey002};
  font-feature-settings:
    'clig' off,
    'liga' off;
  ${(props) => props.theme.typography.common.caption2};
`;

export const WriteTime = styled.div`
  color: ${(props) => props.theme.colors.white};
  text-align: right;
  font-feature-settings:
    'clig' off,
    'liga' off;
  ${(props) => props.theme.typography.common.caption2};
`;
