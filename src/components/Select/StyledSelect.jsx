import styled from 'styled-components';

export default styled.div`
  .dropdown {
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    margin-bottom: 2rem;
    z-index: 10;

    button {
      padding: 0;
      margin-left: 1rem;
    }

    img {
      height: 15px;
    }

    li {
      cursor: pointer;
    }

    &-list-container {
      overflow: hidden;
      max-height: ${(props) => props.dropdownStyles.dropdownHeight};
      transition: max-height 0.8s ease;
      position: absolute;
      top: 1rem;
    }

    &-list-wrapper {
      margin-top: 1rem;
      padding: 1rem;
      background-color: #242424;
      position: relative;
    }

    &-list {
      position: relative;
      list-style-type: none;
      width: 15rem;
    }

    &-list {
      position: relative;
      list-style-type: none;
    }

    &-list-item {
      display: flex;
      justify-content: space-between;
      margin: 0.5rem 1rem;
      position: relative;
      z-index: 1;
      opacity: ${(props) => props.dropdownStyles.listOpacity};
      transition: opacity 0.8s ease;

      &:not(first-child) {
        margin-top: 1rem;
      }
    }

    &-arrow {
      transform: rotate(${(props) => props.dropdownStyles.arrowRotation});
      transition: transform 250ms ease;
    }
  }
`;
