import React from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Div, Ul } from './App.styled';
export function App() {
  return (
    <Div>
      <h1>Phoneboock</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <Ul>
        <ContactList />
      </Ul>
    </Div>
  );
}
