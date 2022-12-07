import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import {
  userReducer,
  logInReduser,
  registerReducer,
  addContactFormRducer,
} from './slices';
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
  key: 'user',
  storage,
};
const persistedContactsSliceReducer = persistReducer(
  persistConfig,
  userReducer
);
export const store = configureStore({
  reducer: {
    user: persistedContactsSliceReducer,
    register: registerReducer,
    logIn: logInReduser,
    addContactForm: addContactFormRducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
