/* eslint-disable react/jsx-one-expression-per-line */
import ContactsList from './components/ContactsList';
import EmptyList from './components/EmptyList';
import ErrorStatus from './components/ErrorStatus';
import Header from './components/Header';
import InputSearch from './components/InputSearch';
import Loader from '../../components/Loader';
import Modal from '../../components/Modal';
import SearchNotFound from './components/SearchNotFound';

import useHome from './useHome';

import { Container } from './styles';

export default function Home() {
  const {
    contacts,
    isLoading,
    isLoadingDelete,
    handleCloseDeleteModal,
    handleConfirmDeleteContact,
    contactBeingDeleted,
    hasError,
    isDeleteModalVisible,
    searchTerm,
    handleChangeSearchTerm,
    filteredContacts,
    handleTryAgain,
    orderBy,
    handleToggleOrderBy,
    handleDeleteContact,
  } = useHome();

  const hasContacts = !hasError && contacts.length > 0;
  const isListEmpty = !hasError && (!isLoading && !hasContacts);
  const isSearchEmpty = !hasError && (hasContacts && filteredContacts.length < 1);

  return (
    <Container>
      <Loader isLoading={isLoading} />

      {hasContacts && <InputSearch value={searchTerm} onChange={handleChangeSearchTerm} />}

      <Header
        contactsAmount={contacts.length}
        filteredContactsAmount={filteredContacts.length}
        hasError={hasError}
      />

      {hasError && <ErrorStatus onTryAgain={handleTryAgain} />}
      {isListEmpty && <EmptyList />}
      {isSearchEmpty && <SearchNotFound searchTerm={searchTerm} />}

      {hasContacts && (
        <>
          <ContactsList
            filteredContacts={filteredContacts}
            orderBy={orderBy}
            onToggleOrderBy={handleToggleOrderBy}
            onDeleteContact={handleDeleteContact}
          />

          <Modal
            confirmLabel="Deletar"
            danger
            isLoading={isLoadingDelete}
            onCancel={handleCloseDeleteModal}
            onConfirm={handleConfirmDeleteContact}
            title={`Tem certeza que deseja remover o contato "${contactBeingDeleted?.name}"?`}
            visible={isDeleteModalVisible}
          >
            <p>Esta ação não poderá ser desfeita!</p>
          </Modal>
        </>
      )}
    </Container>
  );
}
