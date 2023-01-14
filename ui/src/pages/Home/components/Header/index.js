/* eslint-disable no-nested-ternary */
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Container } from './styles';

export default function Header({ contactsAmount, filteredContactsAmount, hasError }) {
  const alignment = hasError
    ? 'flex-end'
    : (
      contactsAmount > 0
        ? 'space-between'
        : 'center'
    );

  return (
    <Container justifyContent={alignment}>
      {(!hasError && contactsAmount > 0) && (
        <strong>
          {filteredContactsAmount}
          {filteredContactsAmount === 1 ? ' contato' : ' contatos'}
        </strong>
      )}

      <Link to="/new">Novo Contato</Link>
    </Container>
  );
}

Header.propTypes = {
  contactsAmount: PropTypes.number.isRequired,
  filteredContactsAmount: PropTypes.number.isRequired,
  hasError: PropTypes.bool.isRequired,
};
