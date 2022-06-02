import styled from 'styled-components';

export default styled.section`
  z-index: 13;
  position: absolute;
  top: 25%;
  left: 25%;
  background-color: #242424;
  width: 50%;
  height: 50%;

  .first-step {
    padding: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;

    .modal-header {
      margin-bottom: 3rem;
      h2 {
        color: #64eebc;
        font-size: 1.25rem;
        font-weight: 700;
      }

      .close {
        position: absolute;
        top: 1rem;
        right: 1rem;
      }
    }

    form {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      flex: 1;
      width: 75%;

      .input-image {
        position: relative;
        cursor: pointer;
        display: flex;
        padding: 2.5rem;
        align-items: center;
        border: 1px dashed white;

        *:not(first-child) {
          margin-left: 0.5rem;
        }

        input {
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          z-index: 50;
          opacity: 0;
        }
      }

      .form-control {
        background-color: transparent;
        border: none;
        border-bottom: 2px solid white;
        text-align: center;
        padding: 0.5rem;
        width: 50%;
        font-size: 1rem;

        &:focus {
          outline: none;
        }
      }
    }
  }

  .submit-button {
    background-color: #fff;
    color: #000;

    &:disabled {
      background-color: rgba(255, 255, 255, 0.5);
      color: #fff;
    }
  }

  .loader-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    p {
      width: 100%;
      margin: 1rem;
    }
    .loader {
      width: 100%;
      .loader-background {
        width: 100%;
        background-color: gray;
        height: 4px;
      }
      .loading {
        background-color: #64eebc;
        height: 6px;
        animation: loading 3s linear;
      }
    }
  }

  .congrats {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 5rem;
    height: 100%;
    text-align: center;
    font-size: 1.5rem;

    img {
      position: relative;
      top: -2.5rem;
    }

    p {
      margin-top: 1rem;
      font-weight: 300;
    }

    button {
      position: relative;
      bottom: -2.5rem;
    }
  }

  @keyframes loading {
    0% {
      width: 0%;
    }
    100% {
      width: 100%;
    }
  }

  @media screen and (max-width: 1000px) {
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    
    .input-image {
      width: 100%;
      padding: 1rem;
    }
  }
`;
