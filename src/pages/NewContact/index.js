import PageHeader from '../../components/PageHeader';
import { Button, Input, Select } from '../../components/common';

export default function NewContact() {
  return (
    <>
      <PageHeader title="Novo Contato" />

      <Input type="text" placeholder="Nome" />

      <Select>
        <option value={1}>1</option>
        <option value={1}>1</option>
        <option value={1}>1</option>
        <option value={1}>1</option>
      </Select>

      <Button type="button" disabled>
        Cadastrar
      </Button>
    </>
  );
}
