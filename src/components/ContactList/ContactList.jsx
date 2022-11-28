import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts, deleteContact } from 'Redux/operations';
import { getContacts, getFilterValue } from 'Redux/selectors';
import { Li } from './ContactList.styled';
export function ContactList() {
  const contactsList = useSelector(getContacts);
  const filterName = useSelector(getFilterValue);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  if (filterName === '') {
    return contactsList.map(o => {
      return (
        <Li key={o.id} id={o.id}>
          <h2>{o.name}</h2>
          <p>{o.phone}</p>
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
  const visibleContacts = contactsList.filter(o =>
    o.name.toLowerCase().includes(normalizedName)
  );
  return visibleContacts.map(o => (
    <Li key={o.id} id={o.id}>
      <h2>{o.name}</h2>
      <p>{o.phone}</p>
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
