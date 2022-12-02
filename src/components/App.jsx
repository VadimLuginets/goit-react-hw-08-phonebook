import styled from '@emotion/styled';
import { Home } from 'components/Home/Home';
import { NavLink, Routes, Route } from 'react-router-dom';
import { Box, Nav } from './App.styled';
import { Login } from './Login/Login';
import { Register } from './Register/Register';
const StyledNavLink = styled(NavLink)`
  color: black;
  border-radius: 22px;
  padding: 10px;
  background-color: #6495ed;
  text-decoration: none;
  margin: 8px;
  &.active {
    color: #07ffd1;
  }
`;
export function App() {
  return (
    <Box>
      <Nav>
        <ul>
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="/register">Register</StyledNavLink>
          <StyledNavLink to="/login">Login</StyledNavLink>
          <StyledNavLink to="/contacts">Contacts</StyledNavLink>
        </ul>
      </Nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Box>
  );
}
