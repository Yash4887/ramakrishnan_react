import React, { useContext } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/authContext';

const MainLayout = () => {
  const { token } = useContext(AuthContext);
  const location = useLocation();

  if (!token) {
    return <Navigate to="/" state={{ from: location }} />;
  }

  return (
    <>
      <header>
        <nav>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>footer component</footer>
    </>
  );
};

export default MainLayout;
