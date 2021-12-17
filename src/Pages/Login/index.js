import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import React, { useContext } from 'react';
import { connect } from 'react-redux';
import './loginStyle.css';
import FormikForm from '../../Component/FormikForm';

import { formFields, loginInitialValues } from './fields';
import { AuthContext } from '../../Context/authContext';
import axiosInstance from '../../utils/axiosInstance';
import { loginAction } from '../../actions/authActions';

const Login = ({ locale, theme, changeTheme, login }) => {
  const navigate = useNavigate();
  const { addToken } = useContext(AuthContext);

  return (
    <>
      <h1>{theme}</h1>
      <h1>{locale}</h1>
      <button type="button" onClick={() => changeTheme('Dark')}>
        Change Theme
      </button>
      <FormikForm
        fields={formFields}
        initialValues={loginInitialValues}
        onSubmit={(values, actions) => login(values, actions, navigate, addToken)}
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

const mapStateToProps = (state) => ({
  locale: state.locale,
  theme: state.theme,
});

const mapDispatchToProps = (dispatch) => ({
  changeTheme: (payload) => {
    dispatch({ type: 'CHANGE_THEME', payload });
  },
  login: (values, actions, navigate, addToken) =>
    loginAction(values, actions, navigate, addToken)(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
