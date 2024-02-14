import styled from 'styled-components';

const TabContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  height: 5.5rem;

  background-color: ${(props) => props.theme.colors.black};
  border-bottom: 0.1rem solid ${(props) => props.theme.colors.grey001};
  cursor: pointer;
`;

export default TabContainer;
