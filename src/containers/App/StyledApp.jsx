import styled from 'styled-components';

export default styled.main`
  position: relative;
  background-image: ${(props) => `url(${props.image})`};
  background-size: cover;
  background-position: center center;
  padding: 0 7% 2rem;
  height: 100%;
  min-height: 100vh;
  min-width: 100vw;
  width: 100%;
  overflow: hidden;
  display: grid;
  grid-template-rows: 1fr 3fr 3fr;
  grid-template-columns: 3fr 1fr;
  grid-template-areas:
    'nav      nav'
    '.        list'
    'featured list';

  * {
    font-family: 'bebas-neue-by-fontfabric', Arial, Helvetica, sans-serif;
    letter-spacing: 0.25rem;
  }

  .featured {
    grid-area: featured;
  }

  @media screen and (max-width: 1000px) {
    padding: 0;
    grid-template-rows: 1fr 3fr auto;
    grid-template-columns: 1fr;
    grid-template-areas:
    'nav'
    'featured'
    'list';
  }
  
  @media screen and (max-width: 600px) {
    overflow: scroll;
    grid-template-rows: 1fr 10fr auto;
    grid-template-columns: 1fr;
    grid-template-areas:
      'nav'
      'featured'
      'list';
  }

  * {
    max-width: 100%;
  }

  @keyframes fadeInRight {
    0% {
      opacity: 0;
      transform: translateX(5rem);
    }

    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes fadeInLeft {
    0% {
      opacity: 0;
      transform: translateX(-5rem);
    }

    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes fadeIn {
    0% {
      filter: blur(10px);
    }

    100% {
      filter: blur(0);
    }
  }

  @keyframes a-ltr-after {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(101%);
    }
  }

  @keyframes a-ltr-before {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(200%);
    }
  }
`;
