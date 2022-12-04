import { useDispatch, useSelector } from 'react-redux';
import { createUser } from 'Redux/operations';
import {
  getRegisterEmail,
  getRegisterLogin,
  getRegisterPassword,
} from 'Redux/selectors';
import {
  resetRegisterState,
  updateRegisterDataEmail,
  updateRegisterDataLogin,
  updateRegisterDataPassword,
} from 'Redux/slices';
import { Form, Label, Input, Span, Btn } from './Register.styled';

export function Register() {
  const login = useSelector(getRegisterLogin);
  const password = useSelector(getRegisterPassword);
  const email = useSelector(getRegisterEmail);
  const dispatch = useDispatch();
  const onChange = e => {
    switch (e.target.name) {
      case 'login':
        dispatch(updateRegisterDataLogin(e.target.value));
        break;
      case 'password':
        dispatch(updateRegisterDataPassword(e.target.value));
        break;
      case 'email':
        dispatch(updateRegisterDataEmail(e.target.value));
        break;

      default:
        break;
    }
  };
  const onHandleSubmit = e => {
    e.preventDefault();
    if (login !== '' && password !== '' && email !== '') {
      const data = Object();
      data.name = login;
      data.password = password;
      data.email = email;
      console.log(data);
      dispatch(createUser(data));
      dispatch(resetRegisterState());
    } else {
      return alert('Please fill all filds');
    }
  };
  return (
    <Form onSubmit={onHandleSubmit} autoComplete="off">
      <Label>
        <Span>Login</Span>
        <Input
          type="text"
          name="login"
          placeholder="Login"
          onChange={onChange}
          value={login}
        />
      </Label>
      <Label>
        <Span>Password</Span>
        <Input
          type="text"
          name="password"
          placeholder="Password"
          onChange={onChange}
          value={password}
        />
      </Label>
      <Label>
        <Span>Email</Span>
        <Input
          type="email"
          name="email"
          placeholder="Email"
          onChange={onChange}
          value={email}
        />
      </Label>
      <Btn type="submit">Submit</Btn>
    </Form>
  );
}
