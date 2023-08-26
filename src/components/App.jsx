import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { lazy, useEffect } from 'react';
import { Layout } from './Layout/Layout';
import { ErrorNotification } from './Error/Error';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { refresh } from 'redux/auth/operations';
import { selectIsRefreshing } from 'redux/auth/selectors';
import { Toaster } from 'react-hot-toast';


const HomePage = lazy(() => import('pages/HomePage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const ContactsPage = lazy(() => import('pages/ContactsPage'));
const ErrorPage = lazy(() => import('pages/ErrorPage'));

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  return (
    <>
      <ErrorNotification />
      <Toaster />
      {isRefreshing ? (
        <h2>Refreshing page</h2>
      ) : (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route
              path="/signUp"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<RegisterPage />}
                />
              }
            />
            <Route
              path="/logIn"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<LoginPage />}
                />
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute
                  redirectTo="/logIn"
                  component={<ContactsPage />}
                />
              }
            />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      )}
    </>
  );
};
