import { useDispatch } from 'react-redux';
import { deleteContact, fetchContacts } from 'Redux/operations';
import PropTypes from 'prop-types';
import { Button, H2, Li, Span } from './ContactsList.styled';
export function ContactsListItem({ ContactsArray }) {
  const dispatch = useDispatch();
  if (ContactsArray.length === 0) {
    return;
  }
  return ContactsArray.map(contact => (
    <Li key={contact.id}>
      <H2>{contact.name}</H2>
      <Span>{contact.number}</Span>
      <Button
        onClick={() => {
          dispatch(deleteContact(contact.id));
          setTimeout(() => {
            dispatch(fetchContacts());
          }, 500);
          // dispatch(fetchContacts());
        }}
      >
        delete
      </Button>
    </Li>
  ));
}
ContactsListItem.propTypes = {
  ContactsArray: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
