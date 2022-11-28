import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer, filterSlice } from './slices';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterSlice.reducer,
  },
});
