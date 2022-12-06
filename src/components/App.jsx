import styled from '@emotion/styled';
import { Home } from 'pages/Home/Home';
import { NavLink, Routes, Route } from 'react-router-dom';
import { Box, Nav, RightBar, Ul, Span, Btn } from './App.styled';
import { Login } from '../pages/Login/Login';
import { Register } from '../pages/Register/Register';
import { Contacts } from 'pages/Contacts/Contacts';
import { PrivateRoutes, RedirectLoggedInRoutes } from 'Redux/PrivateRoutes';
import { getIsLoggedIn, getUserEmail } from 'Redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { userLogout } from 'Redux/operations';
const StyledNavLink = styled(NavLink)`
  color: black;
  border-radius: 22px;
  padding: 10px;
  background-color: #6495ed;
  text-decoration: none;
  margin: 8px;
  &.active {
    color: #07ffd1;
    outline: #07ffd1 solid;
  }
  &:hover {
    outline: #07ffd1 solid;
  }
`;
export function App() {
  const dispatch = useDispatch();
  const email = useSelector(getUserEmail);
  const isLoggedIn = useSelector(getIsLoggedIn);
  const Logout = () => {
    dispatch(userLogout());
  };
  return (
    <Box>
      <Nav>
        <Ul>
          <StyledNavLink to="/">Home</StyledNavLink>
          {!isLoggedIn ? (
            <StyledNavLink to="/register">Register</StyledNavLink>
          ) : null}
          {!isLoggedIn ? (
            <StyledNavLink to="/login">Log in</StyledNavLink>
          ) : null}
          {isLoggedIn ? (
            <StyledNavLink to="/contacts">Contacts</StyledNavLink>
          ) : null}
        </Ul>
        {isLoggedIn ? (
          <RightBar>
            <Span>{email}</Span>
            <Btn onClick={Logout}>Logout</Btn>
          </RightBar>
        ) : null}
      </Nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<RedirectLoggedInRoutes />}>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Route>
        <Route element={<PrivateRoutes />}>
          <Route path="/contacts" element={<Contacts />} />
        </Route>
      </Routes>
    </Box>
  );
}
