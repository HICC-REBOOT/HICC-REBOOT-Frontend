/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const MemberInfoMajorDivision = styled.div`
  width: 17.7rem;
  color: ${(props) => props.theme.colors.grey003};
  font-feature-settings:
    'clig' off,
    'liga' off;
`;
export const MemberInfoNameDivision = styled.div`
  width: 5.3rem;
  color: ${(props) => props.theme.colors.grey003};
  font-feature-settings:
    'clig' off,
    'liga' off;
`;
export const BlankDivision = styled.div`
  width: 1.8rem;
  color: ${(props) => props.theme.colors.grey003};
  font-feature-settings:
    'clig' off,
    'liga' off;
  text-align: center;
`;
export const MemberInfoMajor = styled.div`
  flex: 1 0 0;
  width: 17.7rem;
  color: ${(props) => props.theme.colors.white};
  font-feature-settings:
    'clig' off,
    'liga' off;
`;
export const MemberInfoName = styled.div`
  width: 5.3rem;
  flex-shrink: 0;
  color: ${(props) => props.theme.colors.white};
  font-feature-settings:
    'clig' off,
    'liga' off;
`;
export const Blank = styled.div`
  width: 1.8rem;
  height: 1.8rem;
  flex-shrink: 0;
`;
