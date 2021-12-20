import { FormControl, FormHelperText, InputLabel, MenuItem, Select } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';

const FormikSelect = ({ field, form: { touched, errors }, options, label, ...props }) => (
  <FormControl fullWidth error={touched[field.name] && !!errors[field.name]}>
    <InputLabel>{label}</InputLabel>
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

FormikSelect.propTypes = {
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

export default FormikSelect;
