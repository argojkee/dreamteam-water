import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

const HomePage = lazy(() => import('../pages/HomePage'));
const RegistrationPage = lazy(() => import('../pages/RegistrationPage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));

export const App = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<Layout />}> */}
      <Route index element={<HomePage />} />
      <Route path="home" element={<HomePage />} />
      <Route path="register" element={<RegistrationPage />} />
      <Route path="login" element={<LoginPage />} />
      {/* </Route> */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
