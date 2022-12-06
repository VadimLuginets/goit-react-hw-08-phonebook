import { configureStore } from '@reduxjs/toolkit';
import {
  userReducer,
  logInReduser,
  registerReducer,
  addContactFormRducer,
} from './slices';

export const store = configureStore({
  reducer: {
    user: userReducer,
    register: registerReducer,
    logIn: logInReduser,
    addContactForm: addContactFormRducer,
  },
});
