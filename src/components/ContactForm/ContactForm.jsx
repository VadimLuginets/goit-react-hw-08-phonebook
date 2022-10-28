import { useState } from 'react';
import { nanoid } from 'nanoid';
import { Form } from './ContactFrom.styled';
import PropTypes from 'prop-types';
export function ContactForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const handleChange = e => {
    const { name, value } = e.target;
    switch (name.toLowerCase()) {
      case 'name':
        setName(() => value);
        break;
      case 'number':
        setNumber(() => value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const data = { name: name, number: number, id: nanoid() };
    onSubmit(data);
    reset();
  };

  const reset = () => {
    setName(() => '');
    setNumber(() => '');
  };

  return (
    <Form
      onSubmit={e => {
        handleSubmit(e);
      }}
    >
      <label htmlFor="name">
        Name
        <input
          autoComplete="off"
          type="text"
          name="name"
          placeholder="Name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          onChange={event => {
            handleChange(event);
          }}
          value={name}
          required
        />
      </label>
      <br />
      <label htmlFor="number">
        Number
        <input
          autoComplete="off"
          type="tel"
          name="number"
          placeholder="Tel number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          onChange={event => {
            handleChange(event);
          }}
          value={number}
          required
        />
      </label>
      <br />
      <button type="submit">Add contact</button>
    </Form>
  );
}
ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
