import { createSlice } from '@reduxjs/toolkit';
import { createUser, fetchContacts, loginUser, userLogout } from './operations';
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
    name: '',
    email: '',
    isLogIn: false,
    token: '',
    contactsList: [],
    filter: '',
    isLoading: false,
    error: null,
  },
  reducers: {
    unpadeFilterDataContacts(state, action) {
      return {
        name: state.name,
        email: state.name,
        isLogIn: state.isLogIn,
        token: state.token,
        contactsList: state.contactsList,
        filter: action.payload,
        isLoading: state.isLoading,
        error: state.error,
      };
    },
  },
  extraReducers: {
    [createUser.pending]: handlePending,
    [createUser.rejected]: handleRejected,
    [createUser.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
    },
    [loginUser.pending]: handlePending,
    [loginUser.rejected]: handleRejected,
    [loginUser.fulfilled](state, action) {
      state.isLoading = false;
      state.isLogIn = true;
      state.error = null;
      state.token = action.payload.token;
      state.name = action.payload.user.name;
      state.email = action.payload.user.email;
    },
    [fetchContacts.pending]: handlePending,
    [fetchContacts.rejected]: handleRejected,
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.contactsList = action.payload;
    },
    [userLogout.pending]: handlePending,
    [userLogout.rejected]: handleRejected,
    [userLogout.fulfilled](state, action) {
      state.name = '';
      state.email = '';
      state.isLogIn = false;
      state.token = '';
      state.contactsList = [];
      state.filter = '';
      state.isLoading = false;
      state.error = null;
    },
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
export const addContactForm = createSlice({
  name: 'addContactForm',
  initialState: { name: '', number: '' },
  reducers: {
    updateAddContactFormDataName(state, action) {
      return { name: action.payload, number: state.number };
    },
    updateAddContactFormDataNumber(state, action) {
      return { name: state.name, number: action.payload };
    },
    resetAddContactFormState(state, action) {
      return { name: '', number: '' };
    },
  },
});
export const { unpadeFilterDataContacts } = userSlice.actions;
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
export const {
  updateAddContactFormDataName,
  updateAddContactFormDataNumber,
  resetAddContactFormState,
} = addContactForm.actions;
export const logInReduser = logIn.reducer;
export const userReducer = userSlice.reducer;
export const registerReducer = register.reducer;
export const addContactFormRducer = addContactForm.reducer;
