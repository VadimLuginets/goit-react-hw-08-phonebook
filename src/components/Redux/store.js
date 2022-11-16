import { configureStore, createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  reducers: {
    addContact(state, action) {
      console.log(action);
      return [...state, ...action.payload];
    },
    deleteContact(state, action) {
      return state.filter(c => c.id !== action.payload);
    },
  },
});

export const store = configureStore({
  reducer: {
    contacts: contactsSlice.reducer,
    filter: '',
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
