/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

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
    width: 53.4rem;
  `};

  ${(props) => props.theme.media.desktop`
    width: 82.2rem;
  `};

  ${(props) => props.theme.media.wide`
    width: 82.2rem;
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

export const MemberInfoMajorDivision = styled.div`
  flex: 1 0 0;
  width: 17.7rem;
  color: ${(props) => props.theme.colors.grey003};
  font-feature-settings:
    'clig' off,
    'liga' off;
  ${(props) => props.theme.typography.common.caption1}
`;
export const MemberInfoNameDivision = styled.div`
  width: 5.3rem;
  color: ${(props) => props.theme.colors.grey003};
  font-feature-settings:
    'clig' off,
    'liga' off;
  ${(props) => props.theme.typography.common.caption1}
`;
export const BlankDivision = styled.div`
  width: 1.8rem;
  color: ${(props) => props.theme.colors.grey003};
  font-feature-settings:
    'clig' off,
    'liga' off;
  text-align: center;
`;
export const MemberBox = styled.div`
  display: flex;
  width: 32.8rem;
  padding: 1rem 2rem;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  border-bottom: 0.05rem solid ${(props) => props.theme.colors.black};
  ${(props) => props.theme.media.tablet`
    width: 53.4rem;
  `};

  ${(props) => props.theme.media.desktop`
    width: 82.2rem;
  `};

  ${(props) => props.theme.media.wide`
    width: 82.2rem;
  `};
`;
export const MemberInfoMajor = styled.div`
  flex: 1 0 0;
  width: 17.7rem;
  color: ${(props) => props.theme.colors.white};
  font-feature-settings:
    'clig' off,
    'liga' off;
  ${(props) => props.theme.typography.common.caption1}
`;
export const MemberInfoName = styled.div`
  width: 5.3rem;
  flex-shrink: 0;
  color: ${(props) => props.theme.colors.white};
  font-feature-settings:
    'clig' off,
    'liga' off;
  ${(props) => props.theme.typography.common.caption1}
`;
export const Blank = styled.div`
  width: 1.8rem;
  height: 1.8rem;
  flex-shrink: 0;
`;

export const SearchBar = styled.div`
  display: flex;
  width: 32.8rem;
  padding: 2rem 1.2rem;
  flex-direction: row;
  align-items: flex-end;
  gap: 1.5rem;
  border-radius: 2rem;
  margin-bottom: 2rem;
  background: ${(props) => props.theme.colors.grey001};
  ${(props) => props.theme.media.tablet`
    width: 53.4rem;
  `};
  ${(props) => props.theme.media.desktop`
    width: 82.2rem;
  `};
  ${(props) => props.theme.media.wide`
    width: 82.2rem;
  `};
`;
export const SearchBox = styled.div`
  display: flex;
  width: 19rem;
  padding: 1rem 1.2rem;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  border-radius: 0.8rem;
  background: ${(props) => props.theme.colors.black};
  ${(props) => props.theme.media.tablet`
    width: 39.5rem;
  `};
  ${(props) => props.theme.media.desktop`
    width: 68.3rem;
  `};
  ${(props) => props.theme.media.wide`
    width: 68.3rem;
    `};
`;
