import { AddContactForm } from 'components/AddContactForm/AddContactForm';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { ContactListFilter } from 'components/ContactsList/ContactsListFilter';
import { useSelector } from 'react-redux';
import { token } from 'Redux/operations';
import { getUserToken } from 'Redux/selectors';
import { Div, LeftBar, Span } from './Contacts.styled';
export function Contacts() {
  const userToken = useSelector(getUserToken);
  if (token) {
    token.set(userToken);
  }
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
