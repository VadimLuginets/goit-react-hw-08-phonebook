import { Form, Label, Input, Span } from './Register.styled';

export function Register() {
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
      <Label>
        <Span>Email</Span>
        <Input type="email" name="email" placeholder="Email" />
      </Label>
    </Form>
  );
}
