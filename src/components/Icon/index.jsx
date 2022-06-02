import React from 'react';
import PropTypes from 'prop-types';
import StyledIcon from './StyledIcon';

function Icon({
  image, alt, size, className, onClick, hoverImage, element,
}) {
  return (
    <StyledIcon
      aria-label={alt}
      image={image}
      size={size}
      className={className}
      onClick={onClick}
      hoverImage={hoverImage}
      as={element}
    />
  );
}

Icon.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string,
  size: PropTypes.oneOf(['xsmall', 'small', 'medium', 'large']),
  className: PropTypes.string,
  onClick: PropTypes.func,
  hoverImage: PropTypes.string,
  element: PropTypes.string,
};

Icon.defaultProps = {
  alt: '',
  size: 'medium',
  className: '',
  onClick: () => {},
  hoverImage: '',
  element: 'button',
};

export default Icon;
