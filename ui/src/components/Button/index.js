import React from 'react';
import PropTypes from 'prop-types';

import Spinner from '../Spinner';

import { StyledButton } from './styles';

function Button({
  children, disabled, type, isLoading,
}) {
  return (
    <StyledButton
      type={type}
      disabled={disabled || isLoading}
    >
      {!isLoading
        ? children
        : <Spinner size={16} />}
    </StyledButton>
  );
}

Button.defaultProps = {
  type: 'button',
  isLoading: false,
  disabled: false,
};

Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node.isRequired,
  isLoading: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default Button;
