import { Button, TextField } from '@mui/material';
import React from 'react';
import './registerStyle.css';

const Register = () => (
  <form className="register-form">
    <TextField label="Name" variant="outlined" fullWidth />
    <TextField label="Username" variant="outlined" fullWidth />
    <TextField label="Password" variant="outlined" fullWidth />
    <TextField label="Confirm Password" variant="outlined" fullWidth />
    <Button type="submit" variant="contained" fullWidth>
      Register
    </Button>
  </form>
);

export default Register;
