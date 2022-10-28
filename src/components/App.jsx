import React from 'react';
import { useState, useEffect } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Div, Ul } from './App.styled';
const JSON_KEY_CONTACTS = 'contactsList';
export function App() {
  const [contacts, setContacts] = useState([]);
  const [filterName, setFilterName] = useState('');

  const formSubmitHandler = data => {
    const { name } = data;
    const arrayOfNames = contacts.map(o => o.name.toLowerCase());
    if (arrayOfNames.includes(name.toLowerCase())) {
      alert(`${data.name} is already in contacts`);
      return;
    }
    setContacts(prev => [data, ...prev]);
  };
  const changeFilter = e => {
    const name = e.currentTarget.value;
    setFilterName(e => name);
  };
  const deleteContact = contactId => {
    setContacts(prev => prev.filter(c => c.id !== contactId));
  };

  const saveContactsToLocalStorage = () => {
    const dataToSave = JSON.stringify(contacts);
    localStorage.setItem(JSON_KEY_CONTACTS, dataToSave);
  };
  const loadContactsFromLocalStorage = () => {
    const savedContacts = localStorage.getItem(JSON_KEY_CONTACTS);
    setContacts(prev => [...JSON.parse(savedContacts), ...prev]);
  };
  useEffect(() => {
    if (localStorage.getItem(JSON_KEY_CONTACTS) !== null) {
      loadContactsFromLocalStorage();
    }
  }, []);
  useEffect(() => {
    saveContactsToLocalStorage();
  }, [contacts]);
  return (
    <Div>
      <h1>Phoneboock</h1>
      <ContactForm onSubmit={formSubmitHandler} />
      <h2>Contacts</h2>
      <Filter onChange={changeFilter} value={filterName} />
      <Ul>
        <ContactList
          arrayOfObjects={contacts}
          name={filterName}
          deleteContact={deleteContact}
        />
      </Ul>
    </Div>
  );
}
