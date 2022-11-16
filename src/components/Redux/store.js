import { configureStore, createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
const contactsSlice = createSlice({
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
const filter = createSlice({
  name: 'filter',
  initialState: { filterValue: '' },
  reducers: {
    updateFilter(state, action) {
      return { filterValue: action.payload };
    },
  },
});
export const { updateFilter } = filter.actions;
const persistConfig = {
  key: 'contacts',
  storage,
};
const persistedContactsSliceReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);
export const store = configureStore({
  reducer: {
    contacts: persistedContactsSliceReducer,
    filter: filter.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
