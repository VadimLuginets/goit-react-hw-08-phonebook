import { ContactsList } from 'components/ContactsList/ContactsList';
import { Div } from './Contacts.styled';

export function Contacts() {
  return (
    <Div>
      Contacts
      <ContactsList />
    </Div>
  );
}
