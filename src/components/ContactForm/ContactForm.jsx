import React from 'react';
import { nanoid } from 'nanoid';
import { Form } from './ContactFrom.styled';
export class ContactForm extends React.Component {
  state = { name: '', number: '', id: nanoid() };
  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };
  reset = () => {
    this.setState({ name: '', number: '', id: nanoid() });
  };
  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <label htmlFor="name">
          Name
          <input
            autoComplete="off"
            type="text"
            name="name"
            placeholder="Name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            onChange={this.handleChange}
            value={this.state.name}
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
            onChange={this.handleChange}
            value={this.state.number}
            required
          />
        </label>
        <br />
        <button type="submit">Add contact</button>
      </Form>
    );
  }
}
