import { useDispatch, useSelector } from 'react-redux';
import { Form, Label, Span, Input, Btn } from './Login.styled';
import { getLogInLogin, getLogInPassword } from 'Redux/selectors';
import {
  updateLogInDataLogin,
  updateLogInDataPassword,
  resetLogInState,
} from 'Redux/slices';
import { loginUser } from 'Redux/operations';
export function Login() {
  const email = useSelector(getLogInLogin);
  const password = useSelector(getLogInPassword);
  const dispatch = useDispatch();
  const onChange = e => {
    switch (e.target.name) {
      case 'login':
        dispatch(updateLogInDataLogin(e.target.value));
        break;
      case 'password':
        dispatch(updateLogInDataPassword(e.target.value));
        break;

      default:
        break;
    }
  };
  const onHandleSubmit = e => {
    e.preventDefault();
    if (email !== '' && password !== '') {
      const data = Object();
      data.email = email;
      data.password = password;
      dispatch(loginUser(data));
      dispatch(resetLogInState());
    } else {
      return alert('Please fill all filds');
    }
  };
  return (
    <Form onSubmit={onHandleSubmit} autoComplete="off">
      <Label>
        <Span>Email</Span>
        <Input
          onChange={onChange}
          type="text"
          name="login"
          placeholder="Email"
          value={email}
        />
      </Label>
      <Label>
        <Span>Password</Span>
        <Input
          onChange={onChange}
          type="text"
          name="password"
          placeholder="Password"
          value={password}
        />
      </Label>
      <Btn>Log in</Btn>
    </Form>
  );
}
