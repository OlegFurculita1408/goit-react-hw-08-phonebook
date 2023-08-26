import { Header } from 'components/Header/Header';
import { Loader } from 'components/Loader/Loader';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';


export const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
