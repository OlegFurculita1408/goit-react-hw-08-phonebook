import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsAuth, selectIsRefreshing } from 'redux/auth/selectors';



export const PrivateRoute = ({ redirectTo = '/', component: Component }) => {
  const isRefreshing = useSelector(selectIsRefreshing);
  const isAuth = useSelector(selectIsAuth);
  const shouldRedirect = !isRefreshing && !isAuth;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
