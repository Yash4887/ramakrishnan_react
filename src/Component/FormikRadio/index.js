import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
} from '@mui/material';
import React from 'react';

const FormikRadio = ({ field, form: { touched, errors }, options, label }) => (
  <FormControl component="fieldset" error={touched[field.name] && !!errors[field.name]}>
    <FormLabel component="legend">{label}</FormLabel>
    <RadioGroup row aria-label={label} {...field}>
      {options.map((x) => (
        <FormControlLabel key={x.value} control={<Radio />} {...x} />
      ))}
    </RadioGroup>
    {touched[field.name] && !!errors[field.name] && (
      <FormHelperText>{errors[field.name]}</FormHelperText>
    )}
  </FormControl>
);

export default FormikRadio;
