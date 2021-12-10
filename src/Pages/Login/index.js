import { Button, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import React from 'react';
import './loginStyle.css';

const loginValidate = (values) => {
  const error = {};
  if (!values.username) {
    error.username = 'Required...';
  }
  if (!values.password) {
    error.password = 'Required...';
  }
  return error;
};

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (values) => {
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
      <Formik
        initialValues={{
          username: '',
          password: '',
        }}
        validate={loginValidate}
        onSubmit={handleLogin}
      >
        {({ values, handleChange, handleBlur, handleSubmit, errors, touched }) => (
          <form className="login-form" onSubmit={handleSubmit}>
            <TextField
              label="Username"
              variant="outlined"
              fullWidth
              name="username"
              value={values.username}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.username && !!errors.username}
              helperText={touched.username && errors.username}
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              name="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.password && !!errors.password}
              helperText={touched.password && errors.password}
            />
            <Button type="submit" variant="contained" fullWidth>
              Login
            </Button>
          </form>
        )}
      </Formik>
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
