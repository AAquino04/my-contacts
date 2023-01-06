import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import dangerToast from '../../../assets/images/icons/danger-toast.svg';
import successToast from '../../../assets/images/icons/success-toast.svg';

import { Container } from './styles';

export default function ToastMessage({ message, onRemoveMessage }) {
  useEffect(() => {
    const timeoutID = setTimeout(() => {
      onRemoveMessage(message.id);
    }, message.duration || 5000);

    return () => {
      clearTimeout(timeoutID);
    };
  }, [message, onRemoveMessage]);

  function handleMessageClick() {
    onRemoveMessage(message.id);
  }

  return (
    <Container
      type={message.type}
      onClick={handleMessageClick}
      tabIndex={0}
      role="button"
    >
      {message.type === 'danger' && <img src={dangerToast} alt="X" />}
      {message.type === 'success' && <img src={successToast} alt="Check" />}

      <strong>
        {message.text}
      </strong>
    </Container>
  );
}

ToastMessage.propTypes = {
  message: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['danger', 'default', 'success']),
    duration: PropTypes.number,
  }).isRequired,
  onRemoveMessage: PropTypes.func.isRequired,
};
