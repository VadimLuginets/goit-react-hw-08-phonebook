import React from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Div, Ul } from './App.styled';
import { addContact, updateFilter } from './Redux/store';
import { useDispatch, useSelector } from 'react-redux';
export function App() {
  const contacts = useSelector(state => state.contacts.contactList);
  const filterName = useSelector(state => state.filter.filterValue);
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
    dispatch(updateFilter(name));
  };
  return (
    <Div>
      <h1>Phoneboock</h1>
      <ContactForm onSubmit={formSubmitHandler} />
      <h2>Contacts</h2>
      <Filter onChange={changeFilter} value={filterName} />
      <Ul>
        <ContactList arrayOfObjects={contacts} filterName={filterName} />
      </Ul>
    </Div>
  );
}
