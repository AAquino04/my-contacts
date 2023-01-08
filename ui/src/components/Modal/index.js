import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import Button from '../Button';

import { Container, Footer, Overlay } from './styles';

export default function Modal({
  cancelLabel,
  confirmLabel,
  children,
  danger,
  onCancel,
  onConfirm,
  title,
}) {
  return ReactDOM.createPortal(
    <Overlay>
      <Container danger={danger}>
        <h1>{title}</h1>

        <div className="modal-body">
          {children}
        </div>

        <Footer>
          <button className="cancel-button" type="button" onClick={onCancel}>
            {cancelLabel}
          </button>

          <Button type="button" danger={danger} onClick={onConfirm}>
            {confirmLabel}
          </Button>
        </Footer>
      </Container>
    </Overlay>,
    document.getElementById('modal-root'),
  );
}

Modal.propTypes = {
  cancelLabel: PropTypes.string,
  confirmLabel: PropTypes.string,
  children: PropTypes.node.isRequired,
  danger: PropTypes.bool,
  onConfirm: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

Modal.defaultProps = {
  cancelLabel: 'Cancelar',
  confirmLabel: 'Confirmar',
  danger: false,
};
