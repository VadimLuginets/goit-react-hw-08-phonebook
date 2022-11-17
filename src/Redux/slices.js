import { createSlice } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contactList: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  },
  reducers: {
    addContact(state, action) {
      return { contactList: [...state.contactList, ...action.payload] };
    },
    deleteContact(state, action) {
      return {
        contactList: state.contactList.filter(c => c.id !== action.payload),
      };
    },
  },
});
export const { addContact, deleteContact } = contactsSlice.actions;
export const filterSlice = createSlice({
  name: 'filter',
  initialState: { filterValue: '' },
  reducers: {
    updateFilter(state, action) {
      return { filterValue: action.payload };
    },
  },
});
export const { updateFilter } = filterSlice.actions;
