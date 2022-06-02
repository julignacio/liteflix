import styled from 'styled-components';

const sizes = {
  xsmall: '20px',
  small: '25px',
  medium: '30px',
  large: '40px',
};

export default styled.button`
  padding: 0;
  border: none;
  width: ${(props) => sizes[props.size]};
  height: ${(props) => sizes[props.size]};
  background-color: transparent;
  background-image: ${(props) => `url(${props.image})` || 'none'};
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;

  transition: background-image 500ms ease;

  &:hover {
    ${({ hoverImage }) => hoverImage
      && `background-image: url(${hoverImage})`}
  }
`;
