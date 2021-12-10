import { Button, TextField } from '@mui/material';
import React from 'react';
import { LocaleContext } from '../../Context/localeContext';
import './registerStyle.css';

const Register = () => (
  <div>
    <LocaleContext.Consumer>
      {(value) => <h1>{`Current Language is ${value.locale}`}</h1>}
    </LocaleContext.Consumer>
    <form className="register-form">
      <TextField label="Name" variant="outlined" fullWidth />
      <TextField label="Username" variant="outlined" fullWidth />
      <TextField label="Password" variant="outlined" fullWidth />
      <TextField label="Confirm Password" variant="outlined" fullWidth />
      <Button type="submit" variant="contained" fullWidth>
        Register
      </Button>
    </form>
  </div>
);

export default Register;
