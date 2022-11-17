import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { contactsSlice, filterSlice } from './slices';
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
    filter: filterSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
