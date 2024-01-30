/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { DeviceProvider } from '@assets/mediaQuery';

export const MembersBox = styled.div`
  display: flex;
  /* width: 32.8rem; */
  flex-direction: column;
  align-items: center;
  border-radius: 2rem;
  border: none;
  background: ${(props) => props.theme.colors.grey001};

  ${(props) => props.theme.media.mobile`
    width: 32.8rem;
  `};

  ${(props) => props.theme.media.tablet`
    width: 32.8rem;
  `};

  ${(props) => props.theme.media.desktop`
    width: 75.35rem;
  `};

  ${(props) => props.theme.media.wide`
    width: 75.35rem;
  `};
`;
export const CategoryBox = styled.div`
  display: flex;
  padding: 1rem 2rem;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  align-self: stretch;
  border-bottom: 0.05rem solid ${(props) => props.theme.colors.black};
`;
export const MajorDivision = styled.div`
  width: 14.2rem;
  color: ${(props) => props.theme.colors.grey003};
  font-feature-settings:
    'clig' off,
    'liga' off;
  ${(props) => props.theme.typography.common.caption1}
  ${(props) => props.theme.media.mobile`

  `};

  ${(props) => props.theme.media.tablet`

  `};

  ${(props) => props.theme.media.desktop`
    width: 56.55rem;
  `};

  ${(props) => props.theme.media.wide`
    width: 56.55rem;
  `};
`;
export const NameDivision = styled.div`
  width: 5.3rem;
  color: ${(props) => props.theme.colors.grey003};
  font-feature-settings:
    'clig' off,
    'liga' off;
  ${(props) => props.theme.typography.common.caption1}
`;
export const StateDivision = styled.div`
  width: 5.5rem;
  color: ${(props) => props.theme.colors.grey003};
  font-feature-settings:
    'clig' off,
    'liga' off;
  text-align: center;
  ${(props) => props.theme.typography.common.caption1}
`;
export const MemberBox = styled.div`
  display: flex;
  width: 32.8rem;
  padding: 1rem 2rem;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  border-bottom: 0.05rem solid ${(props) => props.theme.colors.black};
  ${(props) => props.theme.media.desktop`
    width: 75.35rem;
  `};

  ${(props) => props.theme.media.wide`
    width: 75.35rem;
  `};
`;
export const Major = styled.div`
  flex: 1 0 0;
  width: 14rem;
  color: ${(props) => props.theme.colors.white};
  font-feature-settings:
    'clig' off,
    'liga' off;
  ${(props) => props.theme.typography.common.caption1}

  ${(props) => props.theme.media.desktop`
    width: 56.55rem;
  `};

  ${(props) => props.theme.media.wide`
    width: 56.55rem;
  `};
`;
export const Name = styled.div`
  width: 5.3rem;
  flex-shrink: 0;
  color: ${(props) => props.theme.colors.white};
  font-feature-settings:
    'clig' off,
    'liga' off;
  ${(props) => props.theme.typography.common.caption1}
`;
export const State = styled.div`
  display: flex;
  width: 5.5rem;
  padding: 0.5rem 1.5rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  flex-shrink: 0;
  border-radius: 1.5rem;
  background: ${(props) => props.theme.colors.point1};
  white-space: nowrap;
  cursor: pointer;
`;
export const StateText = styled.div`
  color: ${(props) => props.theme.colors.white};

  text-align: center;
  font-feature-settings:
    'clig' off,
    'liga' off;
  ${(props) => props.theme.typography.common.caption1}
`;
