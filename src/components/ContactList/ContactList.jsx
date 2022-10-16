import PropTypes from 'prop-types';
import { Li } from './ContactList.styled';
export function ContactList({ arrayOfObjects, name, deleteContact }) {
  if (name === '') {
    return arrayOfObjects.map(o => {
      return (
        <Li key={o.id} id={o.id}>
          <h2>{o.name}</h2>
          <p>{o.number}</p>
          <button
            onClick={() => {
              deleteContact(o.id);
            }}
            type="button"
          >
            Dalete
          </button>
        </Li>
      );
    });
  }
  const normalizedName = name.toLowerCase();
  const visibleContacts = arrayOfObjects.filter(o =>
    o.name.toLowerCase().includes(normalizedName)
  );
  return visibleContacts.map(o => (
    <Li key={o.id} id={o.id}>
      <h2>{o.name}</h2>
      <p>{o.number}</p>
      <button
        onClick={() => {
          deleteContact(o.id);
        }}
        type="button"
      >
        Dalete
      </button>
    </Li>
  ));
}
ContactList.propTypes = {
  deleteContact: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  arrayOfObjects: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
