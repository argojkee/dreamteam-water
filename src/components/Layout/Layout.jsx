import { Outlet } from 'react-router-dom';
import Header from 'components/Header/Header';
import { Suspense } from 'react';

const Layout = () => {
  return (
    <>
      <Header />
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
