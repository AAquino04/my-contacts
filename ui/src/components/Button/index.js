import React from 'react';
import PropTypes from 'prop-types';

import Spinner from '../Spinner';

import { StyledButton } from './styles';

function Button({
  children, disabled, type, isLoading, danger, onClick,
}) {
  return (
    <StyledButton
      danger={danger}
      disabled={disabled || isLoading}
      onClick={onClick}
      type={type}
    >
      {!isLoading
        ? children
        : <Spinner size={16} />}
    </StyledButton>
  );
}

Button.defaultProps = {
  danger: false,
  disabled: false,
  isLoading: false,
  type: 'button',
  onClick: undefined,
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  danger: PropTypes.bool,
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  onClick: PropTypes.func,
  type: PropTypes.string,
};

export default Button;
