import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import { Container, Footer, Overlay } from './styles';

import { Button } from '../common';

export default function Modal({ danger }) {
  return ReactDOM.createPortal(
    <Overlay>
      <Container danger={danger}>
        <h1>Título do Modal</h1>
        <p>Corpo do modal</p>

        <Footer>
          <button className="cancel-button" type="button">
            Cancelar
          </button>

          <Button type="button" danger={danger}>
            Deletar
          </Button>
        </Footer>
      </Container>
    </Overlay>,
    document.getElementById('modal-root'),
  );
}

Modal.propTypes = {
  danger: PropTypes.bool,
};

Modal.defaultProps = {
  danger: false,
};
