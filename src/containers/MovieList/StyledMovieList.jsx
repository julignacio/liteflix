import styled from 'styled-components';

export default styled.section`
  grid-area: list;
  padding: 3rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  article {
    margin: 0.5rem 0;
    &:nth-child(2) {
      animation: fadeInRight 2000ms ease;
    }
    &:nth-child(3) {
      animation: fadeInRight 2500ms ease;
    }
    &:nth-child(4) {
      animation: fadeInRight 3000ms ease;
    }
    &:nth-child(5) {
      animation: fadeInRight 3500ms ease;
    }
  }

  @media screen and (max-width: 1000px) {
    width: 100%;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;

    article {
      width: 40%;
    }

    .custom-select {
      width: 100%;
    }
  }

  @media screen and (max-width: 600px) {
    background-color: #242424;

    article {
      width: 75%;
      height: 15rem;
    }
  }
`;
