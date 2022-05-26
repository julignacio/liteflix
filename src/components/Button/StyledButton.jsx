import styled from 'styled-components';

const DefaultBtn = styled.button`
  background-color: red;
`;

const PrimaryBtn = styled(DefaultBtn)`
  padding: 1rem;
`;

const SecondaryBtn = styled(DefaultBtn)`
  background-color: blue;
`;

export { DefaultBtn, PrimaryBtn, SecondaryBtn };
