import React from 'react';
import FormikForm from '../../Component/FormikForm';
import { registerFormFields, registerInitialValues, registerValidate } from './fields';
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
      validate={registerValidate}
      buttonProps={{
        children: 'Register',
      }}
    />
  );
};

export default Register;
