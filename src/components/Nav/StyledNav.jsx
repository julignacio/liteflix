import styled from 'styled-components';

export default styled.nav`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr 5fr 1fr;
  grid-template-areas: 'logo add . utils';
  grid-area: nav;

  .logo {
    grid-area: logo;
  }

  .add {
    grid-area: add;
  }

  .utils {
    grid-area: utils;
    display: flex;
    justify-content: space-around;
    align-items: center;
    animation: fadeInRight 1500ms ease;

    * {
      margin: 0 1rem;
    }

    .active {
      position: relative;

      &::after {
        position: absolute;
        top: 2px;
        right: 2px;
        display: inline-block;
        content: '';
        min-width: 9px;
        min-height: 9px;
        border-radius: 100%;
        background-color: #64eebc;
      }
    }
  }

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 3fr 1fr;
    grid-template-areas: 'utils logo .';
    width: 100vw;
    padding: 1rem 0;
    
    .logo {
      margin: 0 auto;
    }
    
    .add {
      display: none;
    }
    
    .notification {
      display: none;
    }
    
    .utils {
      animation: none;
      grid-area: utils;
    }

    .user {
      position: absolute;
      right: .5rem;
    }
`;
