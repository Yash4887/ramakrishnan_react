import { Alert, Button, Snackbar, Typography } from '@mui/material';
import { FastField, Form, Formik } from 'formik';
import React, { useState } from 'react';

const FormikForm = ({ fields, buttonProps, ...rest }) => (
  <Formik {...rest}>
    {({ isSubmitting, errors, setFieldError }) => (
      <Form className="login-form">
        <Snackbar
          open={!!errors.serverError}
          autoHideDuration={6000}
          onClose={() => setFieldError('serverError', '')}
        >
          <Alert
            onClose={() => setFieldError('serverError', '')}
            severity="error"
            sx={{ width: '100%' }}
          >
            {errors.serverError}
          </Alert>
        </Snackbar>
        {fields.map((x) => (
          <FastField key={x.name} {...x} />
        ))}
        <Button
          disabled={isSubmitting}
          type="submit"
          variant="contained"
          fullWidth
          {...buttonProps}
        />
      </Form>
    )}
  </Formik>
);

export default FormikForm;
