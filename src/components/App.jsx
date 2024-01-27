import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './Layout/Layout';
import PrivateRoute from './Routes/PrivateRoute/PrivateRoute';
import PublicRoute from './Routes/PublicRoute/PublicRoute';
import fetchCurrentUserAPI from 'API/Auth/fetchCurrentUserAPI';
import { getToken } from '../redux/auth/authSelectors';

const HomePage = lazy(() => import('../pages/HomePage'));
const RegistrationPage = lazy(() => import('../pages/RegistrationPage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const MainPage = lazy(() => import('../pages/MainPage'));

export const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(getToken);

  useEffect(() => {
    if (!token) return;
    dispatch(fetchCurrentUserAPI());
  }, [dispatch, token]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<PublicRoute component={HomePage} />} />

        <Route
          path="registration"
          element={<PublicRoute component={RegistrationPage} />}
        />
        <Route path="login" element={<PublicRoute component={LoginPage} />} />
        <Route path="main" element={<PrivateRoute component={MainPage} />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
