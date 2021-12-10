import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import './loginStyle.css';
import FormikForm from '../../Component/FormikForm';
import { formFields, loginInitialValues } from './fields';

const wait = (time) => new Promise((resolve) => setTimeout(resolve, time));

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = async (values) => {
    await wait(3000);
    console.log(values);
  };

  console.log('render');

  return (
    <div>
      {/* <LocaleContext.Consumer>
        {(value) => (
          <div>
            <h1>{`Current Language is ${value.locale}`}</h1>
            <Button
              variant="text"
              onClick={() => {
                value.setLocale('Franch');
              }}
            >
              Change Locale
            </Button>
          </div>
        )}
      </LocaleContext.Consumer> */}
      <FormikForm
        fields={formFields}
        initialValues={loginInitialValues}
        onSubmit={handleLogin}
        buttonProps={{
          children: 'Login',
        }}
      />
      <Button
        onClick={() => {
          navigate('register');
        }}
        variant="text"
      >
        Don&apos;t have an account? Please Signup
      </Button>
    </div>
  );
};

export default Login;
