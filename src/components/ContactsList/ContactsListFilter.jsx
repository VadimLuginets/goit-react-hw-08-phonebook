import { useDispatch, useSelector } from 'react-redux';
import { getFilterContacts } from 'Redux/selectors';
import { unpadeFilterDataContacts } from 'Redux/slices';
import { Input } from './ContactsList.styled';

export function ContactListFilter() {
  const filter = useSelector(getFilterContacts);
  const dispatch = useDispatch();
  const onChange = e => {
    dispatch(unpadeFilterDataContacts(e.target.value.toLowerCase()));
  };
  return (
    <Input
      type="text"
      name="filter"
      value={filter}
      onChange={onChange}
      placeholder="Search contact"
    />
  );
}
