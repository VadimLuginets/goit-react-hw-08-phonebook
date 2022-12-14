export const getRegisterLogin = state => state.register.login;
export const getRegisterPassword = state => state.register.password;
export const getRegisterEmail = state => state.register.email;
export const getLogInLogin = state => state.logIn.login;
export const getLogInPassword = state => state.logIn.password;
export const getIsLoggedIn = state => state.user.isLogIn;
export const getArrayOfContacts = state => state.user.contactsList;
export const getFilterContacts = state => state.user.filter;
export const getUserEmail = state => state.user.email;
export const getUserToken = state => state.user.token;
export const getNameAddContactForm = state => state.addContactForm.name;
export const getNumberAddContactForm = state => state.addContactForm.number;
