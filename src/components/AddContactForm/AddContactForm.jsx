import { useDispatch, useSelector } from 'react-redux';
import { addContact, fetchContacts } from 'Redux/operations';
import {
  getNameAddContactForm,
  getNumberAddContactForm,
} from 'Redux/selectors';
import {
  resetAddContactFormState,
  updateAddContactFormDataName,
  updateAddContactFormDataNumber,
} from 'Redux/slices';
import { Button, Form, Input, Span } from './AddContactForm.styled';
export function AddContactForm() {
  const name = useSelector(getNameAddContactForm);
  const number = useSelector(getNumberAddContactForm);
  const dispatch = useDispatch();
  const onChange = e => {
    switch (e.target.name) {
      case 'name':
        dispatch(updateAddContactFormDataName(e.target.value));
        break;
      case 'number':
        dispatch(updateAddContactFormDataNumber(e.target.value));
        break;

      default:
        break;
    }
  };
  const onSubmit = e => {
    e.preventDefault();
    if (name === '' && number === '') {
      return alert('Every fields havs been filled');
    }
    const data = Object();
    data.name = name;
    data.number = number;
    dispatch(addContact(data));
    dispatch(resetAddContactFormState());
    dispatch(fetchContacts());
  };
  return (
    <Form onSubmit={onSubmit} autoComplete="off">
      <Span>Add new contact</Span>
      <Input
        type="text"
        name="name"
        placeholder="Name"
        value={name}
        onChange={onChange}
      />
      <Input
        type="text"
        name="number"
        placeholder="number"
        value={number}
        onChange={onChange}
      />
      <Button type="submit">Add contact</Button>
    </Form>
  );
}
