import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'Redux/slices';
import { Li } from './ContactList.styled';
export function ContactList() {
  const arrayOfObjects = useSelector(state => state.contacts.contactList);
  const filterName = useSelector(state => state.filter.filterValue);
  const dispatch = useDispatch();
  if (filterName === '') {
    return arrayOfObjects.map(o => {
      return (
        <Li key={o.id} id={o.id}>
          <h2>{o.name}</h2>
          <p>{o.number}</p>
          <button
            onClick={() => {
              dispatch(deleteContact(o.id));
            }}
            type="button"
          >
            Dalete
          </button>
        </Li>
      );
    });
  }
  const normalizedName = filterName.toLowerCase();
  const visibleContacts = arrayOfObjects.filter(o =>
    o.name.toLowerCase().includes(normalizedName)
  );
  return visibleContacts.map(o => (
    <Li key={o.id} id={o.id}>
      <h2>{o.name}</h2>
      <p>{o.number}</p>
      <button
        onClick={() => {
          dispatch(deleteContact(o.id));
        }}
        type="button"
      >
        Dalete
      </button>
    </Li>
  ));
}
