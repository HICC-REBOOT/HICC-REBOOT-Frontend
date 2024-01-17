/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 3.6rem 1.6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.8rem;
  background-color: ${(props) => props.theme.colors.black};
`;

export const MembersBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 2rem;
  background: ${(props) => props.theme.colors.grey001};
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
`;
export const NameDivision = styled.div`
  width: 5.3rem;
  color: ${(props) => props.theme.colors.grey003};
  font-feature-settings:
    'clig' off,
    'liga' off;
`;
export const StateDivision = styled.div`
  width: 5.5rem;
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
`;
export const Major = styled.div`
  flex: 1 0 0;
  width: 14rem;
  color: ${(props) => props.theme.colors.white};
  font-feature-settings:
    'clig' off,
    'liga' off;
`;
export const Name = styled.div`
  width: 5.3rem;
  flex-shrink: 0;
  color: ${(props) => props.theme.colors.white};
  font-feature-settings:
    'clig' off,
    'liga' off;
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
  background: ${(props) => props.theme.colors.black};
`;
export const StateText = styled.div`
  color: ${(props) => props.theme.colors.white};

  text-align: center;
  font-feature-settings:
    'clig' off,
    'liga' off;
`;
