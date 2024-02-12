import styled from 'styled-components';
import Select from 'react-select';
import hexToRGBA from '@utils/hexToRgba';

const DropdownStyle = styled(Select)<{ name: string }>`
  & .Dropdown {
    &__indicator-separator {
      width: 0;
      background-color: transparent;
    }

    &__dropdown-indicator {
      padding: 0;
      margin: 0 1.2rem;
    }

    &__control {
      width: ${(props) => props.name};
      ${(props) => props.theme.typography.mobile.body};
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
      ${(props) => props.theme.typography.mobile.body};
    }

    &__single-value {
      color: ${(props) => props.theme.colors.white};
      ${(props) => props.theme.typography.mobile.body};
    }

    &__menu {
      max-width: ${(props) => props.name};
      width: ${(props) => props.name};
      margin-top: 0.4rem;
      border-top: 0;

      border: 1px solid ${(props) => hexToRGBA(props.theme.colors.black, 0.1)};
      background: var(--grey001, #141415);

      &-list {
        padding: 0;
        justify-content: center;
        align-items: center;
      }
    }

    &__option {
      display: flex;
      align-items: center;
      margin-bottom: 0.4rem;
      padding: 0.8rem 1.6rem;
      border-top: 0.1rem solid ${(props) => props.theme.colors.grey001};
      color: ${(props) => props.theme.colors.white};
      background-color: ${(props) => props.theme.colors.grey001};
      ${(props) => props.theme.typography.common.button1};

      &:first-child {
        border-top-left-radius: 0.8rem;
        border-top-right-radius: 0.8rem;
      }

      &:last-child {
        margin-bottom: 0;
        border-bottom-left-radius: 0.8rem;
        border-bottom-right-radius: 0.8rem;
      }

      &--is-selected {
        background-color: ${(props) => props.theme.colors.grey001};

        &:active {
          background-color: ${(props) => props.theme.colors.grey001};
        }
      }

      &--is-focused {
        background-color: ${(props) => props.theme.colors.grey001};

        &:active {
          background-color: ${(props) => props.theme.colors.grey001};
        }
      }
    }
  }
`;

export default DropdownStyle;
