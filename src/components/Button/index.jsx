import React from 'react';
import PropTypes from 'prop-types';
import { DefaultBtn, PrimaryBtn, SecondaryBtn } from './StyledButton';

export default function Button({
  variant, children, onClick, disabled, className,
}) {
  switch (variant) {
    case 'primary':
      return (
        <PrimaryBtn className={className} onClick={onClick} disabled={disabled}>
          {children}
        </PrimaryBtn>
      );
    case 'secondary':
      return (
        <SecondaryBtn className={className} onClick={onClick} disabled={disabled}>
          {children}
        </SecondaryBtn>
      );
    default:
      return (
        <DefaultBtn className={className} onClick={onClick} disabled={disabled}>
          {children}
        </DefaultBtn>
      );
  }
}

Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary', 'default']),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
    PropTypes.string,
  ]),
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

Button.defaultProps = {
  variant: 'default',
  children: null,
  onClick: (v) => v,
  disabled: false,
  className: '',
};
