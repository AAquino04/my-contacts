import { useEffect, useRef, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import ContactsService from '../../services/ContactsService';

import useIsMounted from '../../hooks/useIsMounted';

import toast from '../../utils/toast';

export default function useEditContact() {
  const [contactName, setContactName] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const contactFormRef = useRef(null);

  const { id } = useParams();
  const history = useHistory();
  const isMounted = useIsMounted();

  useEffect(() => {
    async function loadContact() {
      try {
        const contact = await ContactsService.getContactById(id);

        if (isMounted()) {
          contactFormRef.current.setFieldsValues(contact);

          setContactName(contact.name);
          setIsLoading(false);
        }
      } catch {
        if (isMounted()) {
          history.push('/');

          toast({
            type: 'danger',
            text: 'Contato não encontrado!',
          });
        }
      }
    }

    loadContact();
  }, [id, history, isMounted]);

  async function handleSubmit(contact) {
    try {
      const { name } = await ContactsService.updateContact(id, contact);

      setContactName(name);

      toast({
        type: 'success',
        text: 'Contato editado com sucesso!',
        duration: 3000,
      });
    } catch {
      toast({
        type: 'danger',
        text: 'Ocorreu um erro ao editar o contato!',
      });
    }
  }

  return {
    isLoading,
    contactName,
    contactFormRef,
    handleSubmit,
  };
}
