import { TextField } from '@mui/material';
import React from 'react';

const FormikInput = ({ field, form: { touched, errors }, ...props }) => (
  <TextField
    variant="outlined"
    fullWidth
    error={touched[field.name] && !!errors[field.name]}
    helperText={touched[field.name] && errors[field.name]}
    {...field}
    {...props}
  />
);

export default FormikInput;
