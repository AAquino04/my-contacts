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

  return (
    <Container>
      <Loader isLoading={isLoading} />

      {contacts.length > 0 && <InputSearch value={searchTerm} onChange={handleChangeSearchTerm} />}

      <Header
        contactsAmount={contacts.length}
        filteredContactsAmount={filteredContacts.length}
        hasError={hasError}
      />

      {hasError && <ErrorStatus onTryAgain={handleTryAgain} />}

      {!hasError && (
        <>
          {(contacts.length < 1 && !isLoading) && <EmptyList />}

          {(contacts.length > 0 && filteredContacts.length < 1) && (
            <SearchNotFound searchTerm={searchTerm} />
          )}

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
