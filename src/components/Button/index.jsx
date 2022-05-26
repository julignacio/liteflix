import React from 'react';
import PropTypes from 'prop-types';
import { DefaultBtn, PrimaryBtn, SecondaryBtn } from './StyledButton';

export default function Button({ variant, children }) {
  switch (variant) {
    case 'primary':
      return (
        <PrimaryBtn>
          { children }
        </PrimaryBtn>
      );
    case 'secondary':
      return (
        <SecondaryBtn>
          { children }
        </SecondaryBtn>
      );
    default:
      return (
        <DefaultBtn>
          { children }
        </DefaultBtn>
      );
  }
}

Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary', 'default']),
  children: PropTypes.element,
};

Button.defaultProps = {
  variant: 'default',
  children: null,
};
