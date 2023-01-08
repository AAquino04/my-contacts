import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button';
import ReactPortal from '../ReactPortal';

import { Container, Footer, Overlay } from './styles';

export default function Modal({
  cancelLabel,
  confirmLabel,
  children,
  danger,
  isLoading,
  onCancel,
  onConfirm,
  title,
  visible,
}) {
  if (!visible) return null;

  return (
    <ReactPortal containerId="modal-root">
      <Overlay>
        <Container danger={danger}>
          <h1>{title}</h1>

          <div className="modal-body">
            {children}
          </div>

          <Footer>
            <button
              type="button"
              className="cancel-button"
              disabled={isLoading}
              onClick={onCancel}
            >
              {cancelLabel}
            </button>

            <Button
              type="button"
              danger={danger}
              isLoading={isLoading}
              onClick={onConfirm}
            >
              {confirmLabel}
            </Button>
          </Footer>
        </Container>
      </Overlay>
    </ReactPortal>
  );
}

Modal.propTypes = {
  cancelLabel: PropTypes.string,
  confirmLabel: PropTypes.string,
  children: PropTypes.node.isRequired,
  danger: PropTypes.bool,
  isLoading: PropTypes.bool,
  onConfirm: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  visible: PropTypes.bool.isRequired,
};

Modal.defaultProps = {
  cancelLabel: 'Cancelar',
  confirmLabel: 'Confirmar',
  danger: false,
  isLoading: false,
};
