import React from 'react';
import PropTypes from 'prop-types';

import dangerToast from '../../../assets/images/icons/danger-toast.svg';
import successToast from '../../../assets/images/icons/success-toast.svg';

import { Container } from './styles';

export default function ToastMessage({ text, type }) {
  return (
    <Container type={type}>
      {type === 'danger' && <img src={dangerToast} alt="X" />}
      {type === 'success' && <img src={successToast} alt="Check" />}

      <strong>
        {text}
      </strong>
    </Container>
  );
}

ToastMessage.defaultProps = {
  type: 'default',
};

ToastMessage.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['danger', 'default', 'success']),
};
