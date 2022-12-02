import { Form, Label, Span, Input } from './Login.styled';

export function Login() {
  return (
    <Form>
      <Label>
        <Span>Login</Span>
        <Input type="text" name="login" placeholder="Login" />
      </Label>
      <Label>
        <Span>Password</Span>
        <Input type="text" name="password" placeholder="Password" />
      </Label>
    </Form>
  );
}
