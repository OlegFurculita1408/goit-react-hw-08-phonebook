import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsAuth } from 'redux/auth/selectors';



export const RestrictedRoute = ({ redirectTo = '/', component: Component }) => {
  const isAuth = useSelector(selectIsAuth);

  return isAuth ? <Navigate to={redirectTo} /> : Component;
};
