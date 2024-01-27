/* eslint-disable import/prefer-default-export */
import theme from '@styles/theme';
import styled from 'styled-components';

export const DetailBox = styled.div`
  display: flex;
  width: 32.8rem;
  padding: 1.6rem 2rem 2rem 2rem;
  align-items: flex-start;
  align-content: flex-start;
  gap: 0.8rem 1.6rem;
  flex-wrap: wrap;
  background: ${theme.colors.black};
`;

export const Class = styled.div`
  display: flex;
  width: 13.6rem;
  flex-shrink: 0;
  color: ${theme.colors.grey003};
  font-feature-settings:
    'clig' off,
    'liga' off;
  ${(props) => props.theme.typography.common.caption1}
`;
export const Major = styled.div`
  display: flex;
  width: 13.4rem;
  flex-shrink: 0;
  color: ${theme.colors.grey003};
  font-feature-settings:
    'clig' off,
    'liga' off;
  ${(props) => props.theme.typography.common.caption1}
`;
export const Grade = styled.div`
  display: flex;
  width: 13.6rem;
  flex-shrink: 0;
  color: ${theme.colors.grey003};
  font-feature-settings:
    'clig' off,
    'liga' off;
  ${(props) => props.theme.typography.common.caption1}
`;
export const Phone = styled.div`
  display: flex;
  width: 13.6rem;
  flex-shrink: 0;
  color: ${theme.colors.grey003};
  font-feature-settings:
    'clig' off,
    'liga' off;
  ${(props) => props.theme.typography.common.caption1}
`;
export const AcceptDate = styled.div`
  display: flex;
  width: 28.8rem;
  flex-shrink: 0;
  color: ${theme.colors.grey003};
  font-feature-settings:
    'clig' off,
    'liga' off;
  ${(props) => props.theme.typography.common.caption1}
`;
