import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import React, { useContext } from 'react';
import './loginStyle.css';
import FormikForm from '../../Component/FormikForm';

import { formFields, loginInitialValues } from './fields';
import { AuthContext } from '../../Context/authContext';
import axiosInstance from '../../utils/axiosInstance';

const Login = () => {
  const navigate = useNavigate();
  const { addToken } = useContext(AuthContext);

  const handleLogin = async (values, actions) => {
    try {
      const res = await axiosInstance.post('signin', values);
      addToken(res.data.accessToken);
      navigate('/main', { replace: true });
    } catch (error) {
      actions.setFieldError('serverError', error.message);
    }
  };

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
