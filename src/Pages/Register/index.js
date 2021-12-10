import React from 'react';
import FormikForm from '../../Component/FormikForm';
import { registerFormFields, registerInitialValues } from './fields';
import './registerStyle.css';

const Register = () => {
  const handleRegister = (values) => {
    console.log(values);
  };

  return (
    <FormikForm
      fields={registerFormFields}
      initialValues={registerInitialValues}
      onSubmit={handleRegister}
      buttonProps={{
        children: 'Register',
      }}
    />
  );
};

export default Register;
