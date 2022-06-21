import PageHeader from '../../components/PageHeader';
import { Input, Select } from '../../components/common';

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
    </>
  );
}
