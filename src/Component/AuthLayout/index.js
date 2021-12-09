import { Paper } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';
import './authLayout.css';

const AuthLayout = () => (
  <main className="auth">
    <Paper>
      <Outlet />
    </Paper>
  </main>
);

export default AuthLayout;
