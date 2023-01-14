import { useRef } from 'react';

import ContactsService from '../../services/ContactsService';

import toast from '../../utils/toast';

export default function useNewContact() {
  const contactFormRef = useRef(null);

  async function handleSubmit(contact) {
    try {
      await ContactsService.createContact(contact);

      contactFormRef.current.resetFields();

      toast({
        type: 'success',
        text: 'Contato cadastrado com sucesso!',
        duration: 3000,
      });
    } catch (error) {
      const emailAlreadyInUse = error.message.includes('The e-mail is already in use');

      if (emailAlreadyInUse) {
        toast({
          type: 'danger',
          text: 'O e-mail informado já está em uso!',
        });
      } else {
        toast({
          type: 'danger',
          text: 'Ocorreu um erro ao cadastrar o contato!',
        });
      }
    }
  }

  return {
    contactFormRef,
    handleSubmit,
  };
}
