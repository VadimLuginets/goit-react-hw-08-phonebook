import React from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Div, Ul } from './App.styled';
const JSON_KEY_CONTACTS = 'contactsList';
export class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
  };
  formSubmitHandler = data => {
    const arrayOfNames = this.state.contacts.map(o => o.name.toLowerCase());
    if (arrayOfNames.includes(data.name.toLowerCase())) {
      alert(`${data.name} is already in contacts`);
      return;
    }
    this.setState(() => ({ contacts: [data, ...this.state.contacts] }));
  };
  changeFilter = e => {
    this.setState({ name: e.currentTarget.value });
  };
  deleteContact = contactId => {
    this.setState(s => ({
      contacts: s.contacts.filter(c => c.id !== contactId),
    }));
  };
  saveContactsToLocalStorage = () => {
    const dataToSave = JSON.stringify(this.state.contacts);
    localStorage.setItem(JSON_KEY_CONTACTS, dataToSave);
  };
  loadContactsFromLocalStorage = () => {
    const savedContacts = localStorage.getItem(JSON_KEY_CONTACTS);
    this.setState({ contacts: JSON.parse(savedContacts) });
  };
  componentDidMount() {
    if (localStorage.getItem(JSON_KEY_CONTACTS) !== null) {
      this.loadContactsFromLocalStorage();
    }
  }
  componentDidUpdate() {
    this.saveContactsToLocalStorage();
  }
  render() {
    return (
      <Div>
        <h1>Phoneboock</h1>
        <ContactForm onSubmit={this.formSubmitHandler} />
        <h2>Contacts</h2>
        <Filter onChange={this.changeFilter} value={this.state.name} />
        <Ul>
          <ContactList
            arrayOfObjects={this.state.contacts}
            name={this.state.name}
            deleteContact={this.deleteContact}
          />
        </Ul>
      </Div>
    );
  }
}
