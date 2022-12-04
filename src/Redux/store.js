import { configureStore } from '@reduxjs/toolkit';
import { userReducer, logInReduser, registerReducer } from './slices';

export const store = configureStore({
  reducer: {
    user: userReducer,
    register: registerReducer,
    logIn: logInReduser,
  },
});
