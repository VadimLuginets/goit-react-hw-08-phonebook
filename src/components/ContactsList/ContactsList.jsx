import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'Redux/operations';
import { getArrayOfContacts, getFilterContacts } from 'Redux/selectors';
import { Div, Ul } from './ContactsList.styled';
import { ContactsListItem } from './ContactsListItem';

export function ContactsList() {
  const arrayOfContacts = useSelector(getArrayOfContacts);
  const filter = useSelector(getFilterContacts);
  const filteredContactsList = arrayOfContacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <Div>
      <Ul>
        {filter === '' ? (
          <ContactsListItem ContactsArray={arrayOfContacts} />
        ) : (
          <ContactsListItem ContactsArray={filteredContactsList} />
        )}
      </Ul>
    </Div>
  );
}
