import styled from 'styled-components';
import Select from 'react-select';
import { DeviceProvider } from '@assets/mediaQuery';

const DropdownStyle = styled(Select)`
  & .Dropdown {
    &__input-container {
      color: white;
      ${(props) => props.theme.typography[DeviceProvider()].body};
    }
    &__indicator-separator {
      background-color: transparent;
    }

    &__dropdown-indicator {
      padding: 0;
    }

    &__control {
      ${(props) => props.theme.typography.common.caption1};
      width: 100%;
      height: 5.4rem;
      background-color: ${(props) => props.theme.colors.grey001} !important;
      border: none;

      &--is-focused {
        box-shadow: none;
      }

      border-radius: 1.6rem;
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
      width: 100%;
      height: 3.2rem;
      margin-top: 0rem;
      top: 4.4rem;
      border-bottom-left-radius: 1.6rem;
      border-bottom-right-radius: 1.6rem;
      border-top: 1rem black;
      background-color: ${(props) => props.theme.colors.grey001};
      &__menu-list {
        background-color: black;
      }
      &-list {
        height: 16.2rem;
        padding: 0;
        justify-content: center;
        align-items: center;
        border-bottom-left-radius: 1.6rem;
        border-bottom-right-radius: 1.6rem;
        border-top: solid 0.1rem black;
        border-color: black;
      }
    }

    &__option {
      height: 5.4rem;
      display: flex;
      align-items: center;
      padding: 0.9rem 0 0.9rem 1.5rem;
      ${(props) => props.theme.typography.common.caption1};
      color: ${(props) => props.theme.colors.white};
      background-color: ${(props) => props.theme.colors.grey001};

      &--is-selected {
      }

      &--is-focused {
      }
    }
  }
`;

export default DropdownStyle;
