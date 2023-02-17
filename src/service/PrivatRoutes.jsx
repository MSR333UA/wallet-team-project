import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectToken } from 'redux/auth/authSelectors';
import { routes } from './routes';

export const PrivateRoute = ({ children }) => {
  const isLogIn = Boolean(useSelector(selectToken));
  return isLogIn ? children : <Navigate to={routes.LOGIN} />;
};
