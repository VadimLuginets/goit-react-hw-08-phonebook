import React from 'react';
import { useState, useEffect } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Div, Ul } from './App.styled';
import { addContact } from './Redux/store';
import { useDispatch, useSelector } from 'react-redux';
const JSON_KEY_CONTACTS = 'contactsList';
export function App() {
  const contacts = useSelector(state => state.contacts);
  const [filterName, setFilterName] = useState('');
  const dispatch = useDispatch();

  const formSubmitHandler = data => {
    const { name } = data;
    const arrayOfNames = contacts.map(o => o.name.toLowerCase());
    if (arrayOfNames.includes(name.toLowerCase())) {
      alert(`${data.name} is already in contacts`);
      return;
    }
    dispatch(addContact([data]));
  };
  const changeFilter = e => {
    const name = e.currentTarget.value;
    setFilterName(e => name);
  };

  const saveContactsToLocalStorage = () => {
    const dataToSave = JSON.stringify(contacts);
    localStorage.setItem(JSON_KEY_CONTACTS, dataToSave);
  };

  useEffect(() => {
    saveContactsToLocalStorage(); // eslint-disable-next-line
  }, [contacts]);
  return (
    <Div>
      <h1>Phoneboock</h1>
      <ContactForm onSubmit={formSubmitHandler} />
      <h2>Contacts</h2>
      <Filter onChange={changeFilter} value={filterName} />
      <Ul>
        <ContactList arrayOfObjects={contacts} name={filterName} />
      </Ul>
    </Div>
  );
}
