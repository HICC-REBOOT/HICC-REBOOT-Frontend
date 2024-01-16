import styled from 'styled-components';

export const PaginationStyle = styled.div`
  .pagination {
    display: flex;
    justify-content: center;
    margin-top: 4.4rem;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  ul.pagination li {
    display: inline-block;
    width: 2.4rem;
    height: 2.4rem;
    margin: 0 1rem;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  ul.pagination li a {
    width: 100%;
    height: 100%;

    padding-top: 0.1rem;
    color: ${(props) => props.theme.colors.white};
    ${(props) => props.theme.typography.common.button1};

    text-align: center;
    font-feature-settings:
      'clig' off,
      'liga' off;

    &:hover {
      border-radius: 2rem;
      background: var(--grey001, #141415);
    }
  }

  ul.pagination li.active a {
    color: ${(props) => props.theme.colors.point1};
  }

  a.prev-button,
  a.next-button {
    display: inline-block;
    border: none;
  }
`;

export const T = styled.div``;
