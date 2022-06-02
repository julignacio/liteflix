import styled from 'styled-components';

export default styled.aside`
  position: absolute;
  padding: 2rem 1rem;
  right: -50%;
  top: 0;
  width: 50%;
  height: 100%;
  transition: transform 500ms ease;
  z-index: 12;
  background-color: rgba(36, 36, 36, 0.97);
  ${({ show }) => show
  && `
    transform: translateX(-100%);
    `}

  .menu-buttons {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 3.5rem 3rem;

    &-right {
      display: flex;
      align-items: center;
      * {
        margin: 0 1rem;
      }
    }
  }

  .menu-options {
    li {
      margin: .5rem 0;
      button {
        font-size: 1.5rem;
        font-weight: 300;
      }
    }

    .add-movie {
      margin: 2rem 0;
      img {
        margin: 0 1rem 5px 0;
      }
    }
  }

  @media screen and (max-width: 1000px) {
    width: 100%;
    right: -100%;
  }
`;
