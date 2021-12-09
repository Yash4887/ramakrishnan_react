import { Button, TextField } from '@mui/material';
import React from 'react';
import './loginStyle.css';

const Login = () => (
  <form className="login-form">
    <TextField label="Username" variant="outlined" fullWidth />
    <TextField label="Password" variant="outlined" fullWidth />
    <Button type="submit" variant="contained" fullWidth>
      Login
    </Button>
  </form>
);

export default Login;
