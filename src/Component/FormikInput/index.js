import { TextField } from '@mui/material';
import PropTypes from 'prop-types';
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

FormikInput.propTypes = {
  field: PropTypes.exact({
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onBlur: PropTypes.func.isRequired,
  }).isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  form: PropTypes.object.isRequired,
};

export default FormikInput;
