import { createSlice } from '@reduxjs/toolkit';
import { createUser, loginUser } from './operations';
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
    isLoading: false,
    error: null,
  },
  reducers: {},
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
      state.error = null;
      state.token = action.payload.token;
      state.name = action.payload.user.name;
      state.email = action.payload.user.email;
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
