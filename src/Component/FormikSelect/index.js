import { FormControl, FormHelperText, InputLabel, MenuItem, Select } from '@mui/material';
import React from 'react';

const FormikSelect = ({ field, form: { touched, errors }, options, ...props }) => (
  <FormControl fullWidth error={touched[field.name] && !!errors[field.name]}>
    <InputLabel>{props.label}</InputLabel>
    <Select {...field} {...props}>
      {options.map((x) => (
        <MenuItem key={x.value} value={x.value}>
          {x.label}
        </MenuItem>
      ))}
    </Select>
    {touched[field.name] && !!errors[field.name] && (
      <FormHelperText>{errors[field.name]}</FormHelperText>
    )}
  </FormControl>
);

export default FormikSelect;
