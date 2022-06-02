import styled from 'styled-components';

const DefaultBtn = styled.button`
  border: none;
  background-color: transparent;
  color: #fff;
  text-transform: uppercase;
  font-size: 18px;
  width: max-content;
  display: flex;
  align-items: center;
  padding: 1rem 3.5rem;
  z-index: 1;

  img {
    height: 0.9em;
    padding: 0 0.8em 0.1em;
  }
`;

const PrimaryBtn = styled(DefaultBtn)`
  background-color: #242424;
`;

const SecondaryBtn = styled(DefaultBtn)`
  background-color: rgba(36, 36, 36, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.5);
  box-sizing: border-box;
`;

export { DefaultBtn, PrimaryBtn, SecondaryBtn };
