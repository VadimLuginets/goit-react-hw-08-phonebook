import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { getIsLoggedIn } from './selectors';

export function PrivateRoutes() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
}
export function RedirectLoggedInRoutes() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return !isLoggedIn ? <Outlet /> : <Navigate to="/contacts" />;
}
