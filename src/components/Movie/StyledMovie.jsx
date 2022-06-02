import styled from 'styled-components';

const MovieCard = styled.article`
  position: relative;
  width: 220px;
  height: 150px;
  cursor: pointer;

  &:hover {
    .defaultContent {
      opacity: 0;

      transition: opacity 500ms ease;
    }

    .hoverContent {
      opacity: 1;
    }
  }
  .background {
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: 0 -25px;
    z-index: 0;
  }

  .defaultContent {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;

    .image-overlay {
      position: absolute;
      bottom: -1px;
      height: 100px;
      width: 100%;
      background: linear-gradient(180deg, rgba(0, 0, 0, 0), black);
    }

    .title {
      position: absolute;
      bottom: 0.5rem;
      text-align: center;
      width: 100%;
      z-index: 1;
    }

    .play {
      position: absolute;
      z-index: 3;
    }
  }

  .hoverContent {
    opacity: 0;
    transition: opacity 500ms ease;
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    background-color: rgba(36, 36, 36, 0.7);
    display: flex;
    align-items: center;

    .title-container {
      display: flex;
      z-index: 4;
      display: inherit;
      align-items: center;

      *:not(first-child) {
        margin-left: 1rem;
      }

      h3 {
        overflow: ellipsis;
        max-width: 50%;
        max-height: 50%;
      }
    }

    .bottom {
      position: absolute;
      bottom: 1rem;
      width: 100%;
      display: flex;
      justify-content: space-between;
      padding: 0 1rem;

      .rating {
        img {
          margin-right: 0.5rem;
        }
      }
    }
  }
`;

const MovieFeatured = styled.section`
  grid-area: featured;

  .exclusive {
    font-size: 20px;
    font-weight: 300;
    animation: fadeIn 2s ease;
  }

  .title {
    font-size: 7rem;
    color: #64eebc;
    margin: 1rem 0 2rem;
    font-weight: 900;
    letter-spacing: 0.75rem;
    overflow: hidden;
    position: relative;
    animation: fadeInLeft 2s ease;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      width: 100%;
      height: 100%;
      background: rgba(36, 36, 36, 1);
      animation: a-ltr-before 1s cubic-bezier(0.77, 0, 0.18, 1) forwards;
      transform: translateX(0);
    }

    &::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      width: 100%;
      height: 100%;
      background: rgba(100, 238, 188, 0.95);
      animation: a-ltr-after 1s cubic-bezier(0.77, 0, 0.18, 1) forwards;
      transform: translateX(-101%);
    }
  }

  .buttons {
    display: flex;
    min-width: max-content;
    justify-content: space-between;
    width: 50%;

    span {
      animation: fadeIn 1500ms ease;
      margin-left: 1rem;
    }
  }

  @media screen and (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    .title {
      text-align: center;
    }
  }

  @media screen and (max-width: 600px) {
    width: 100vw;
    padding-top: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    position: relative;

    .title {
      font-size: 5rem;
    }

    .buttons {
      flex-direction: column;

      .cta {
        width: 100%;
        margin-bottom: 1rem;
        justify-content: center;
      }
    }

    .movie-overlay {
      position: absolute;
      bottom: 0;
      left: 0;
      height: 100px;
      width: 100%;
      background: linear-gradient(180deg, rgba(0, 0, 0, 0), #242424);
      z-index: 0;
    }
  }
`;

export { MovieCard, MovieFeatured };
