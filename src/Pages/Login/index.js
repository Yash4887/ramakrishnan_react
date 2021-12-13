import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import React, { useContext } from 'react';
import './loginStyle.css';
import FormikForm from '../../Component/FormikForm';
import { formFields, loginInitialValues } from './fields';
import { AuthContext } from '../../Context/authContext';

const Login = () => {
  const navigate = useNavigate();
  const { addToken } = useContext(AuthContext);

  const handleLogin = async (values, actions) => {
    try {
      const res = await fetch('http://localhost:3000/signin', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });
      const json = await res.json();
      if (res.ok) {
        addToken(json.accessToken);
        navigate('/main', { replace: true });
      }
      throw new Error(json);
    } catch (error) {
      actions.setFieldError('serverError', error.message);
    }
  };

  console.log('render');

  return (
    <>
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
    </>
  );
};

export default Login;
