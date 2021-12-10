import { Button } from '@mui/material';
import { FastField, Form, Formik } from 'formik';
import React from 'react';

const FormikForm = ({ fields, buttonProps, ...rest }) => (
  <Formik {...rest}>
    {({ isSubmitting }) => (
      <Form className="login-form">
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
