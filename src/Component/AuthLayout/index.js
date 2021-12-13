import { Paper } from '@mui/material';
import React, { useContext } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/authContext';
import './authLayout.css';

const AuthLayout = () => {
  const { token } = useContext(AuthContext);
  const location = useLocation();

  if (token) {
    return <Navigate to="/main" state={{ from: location }} />;
  }

  return (
    <main className="auth">
      <Paper>
        <Outlet />
      </Paper>
    </main>
  );
};

export default AuthLayout;
