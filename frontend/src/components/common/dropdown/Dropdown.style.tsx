import styled from 'styled-components';
import Select from 'react-select';
import { DeviceProvider } from '@assets/mediaQuery';

const DropdownStyle = styled(Select)`
  & .Dropdown {
    &__indicator-separator {
      background-color: transparent;
    }

    &__dropdown-indicator {
      padding: 0;
    }

    &__control {
      ${(props) => props.theme.typography[DeviceProvider()].body};
      width: 100%;
      height: 4.7rem;
      background-color: ${(props) => props.theme.colors.black} !important;
      border: none;

      &--is-focused {
        box-shadow: none;
      }

      border-radius: 0.8rem;
      background-color: ${(props) => props.theme.colors.white};
    }

    &__value-container {
      width: 100%;
      height: 100%;
      margin: 0;
      padding: 0;
      padding-left: 1.2rem;
    }

    &__placeholder {
      margin: 0;
      ${(props) => props.theme.typography[DeviceProvider()].body};
    }

    &__single-value {
      color: ${(props) => props.theme.colors.white};
      ${(props) => props.theme.typography[DeviceProvider()].body};
    }

    &__menu {
      width: 10.2rem;
      margin-top: 1.5rem;
      border-top: 0;

      &-list {
        padding: 0;
        justify-content: center;
        align-items: center;
      }
    }

    &__option {
      height: 3rem;
      display: flex;
      align-items: center;
      padding: 0.9rem 0 0.9rem 1.5rem;
      border-top: 0.1rem solid ${(props) => props.theme.colors.grey001};
      color: ${(props) => props.theme.colors.black};
      background-color: ${(props) => props.theme.colors.white};

      &--is-selected {
      }

      &--is-focused {
      }
    }
  }
`;

export default DropdownStyle;
