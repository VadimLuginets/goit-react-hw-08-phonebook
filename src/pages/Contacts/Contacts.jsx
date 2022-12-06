import { AddContactForm } from 'components/AddContactForm/AddContactForm';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { ContactListFilter } from 'components/ContactsList/ContactsListFilter';
import { Div, LeftBar, Span } from './Contacts.styled';

export function Contacts() {
  return (
    <Div>
      <LeftBar>
        <AddContactForm />
        <Span>Search contact</Span>
        <ContactListFilter />
      </LeftBar>
      <ContactsList />
    </Div>
  );
}
