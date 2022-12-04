import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, fetchContacts } from 'Redux/operations';
import { getArrayOfContacts } from 'Redux/selectors';

export function ContactsList() {
  const arrayOfContacts = useSelector(getArrayOfContacts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <ul>
      {arrayOfContacts.map(contact => (
        <li key={contact.id}>
          <h2>{contact.name}</h2>
          <span>{contact.number}</span>
          <button
            onClick={() => {
              dispatch(deleteContact(contact.id));
            }}
          >
            delete
          </button>
        </li>
      ))}
    </ul>
  );
}
