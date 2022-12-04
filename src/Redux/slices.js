import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';
const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
export const userSlice = createSlice({
  name: 'user',
  initialState: {
    contactsList: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [fetchContacts.rejected]: handleRejected,
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.contactsList = action.payload;
    },
    [addContact.pending]: handlePending,
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.contactsList.push(action.payload);
    },
    [addContact.rejected]: handleRejected,
    [deleteContact.pending]: handlePending,
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.contactsList.findIndex(
        contact => contact.id === action.payload.id
      );
      state.contactsList.splice(index, 1);
    },
    [deleteContact.rejected]: handleRejected,
  },
});
export const register = createSlice({
  name: 'register',
  initialState: { login: '', password: '', email: '' },
  reducers: {
    updateRegisterDataLogin(state, action) {
      return {
        login: action.payload,
        password: state.password,
        email: state.email,
      };
    },
    updateRegisterDataPassword(state, action) {
      return {
        login: state.login,
        password: action.payload,
        email: state.email,
      };
    },
    updateRegisterDataEmail(state, action) {
      return {
        login: state.login,
        password: state.password,
        email: action.payload,
      };
    },
    resetRegisterState(state, action) {
      return { login: '', password: '', email: '' };
    },
  },
});
export const logIn = createSlice({
  name: 'logIn',
  initialState: { login: '', password: '' },
  reducers: {
    updateLogInDataLogin(state, action) {
      return { login: action.payload, password: state.password };
    },
    updateLogInDataPassword(state, action) {
      return { login: state.login, password: action.payload };
    },
    resetLogInState(state, action) {
      return { login: '', password: '' };
    },
  },
});
export const {
  updateRegisterDataLogin,
  updateRegisterDataPassword,
  updateRegisterDataEmail,
  resetRegisterState,
} = register.actions;
export const {
  updateLogInDataLogin,
  updateLogInDataPassword,
  resetLogInState,
} = logIn.actions;
export const logInReduser = logIn.reducer;
export const userReducer = userSlice.reducer;
export const registerReducer = register.reducer;
