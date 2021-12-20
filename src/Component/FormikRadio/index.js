import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
} from '@mui/material';
import PropTypes from 'prop-types';
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

FormikRadio.propTypes = {
  field: PropTypes.exact({
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onBlur: PropTypes.func.isRequired,
  }).isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  form: PropTypes.object.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.exact({
      value: PropTypes.string,
      label: PropTypes.string,
    }),
  ).isRequired,
  label: PropTypes.string.isRequired,
};

export default FormikRadio;
