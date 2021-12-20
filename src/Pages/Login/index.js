import { Button } from '@mui/material';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import React, { useContext } from 'react';
import { connect } from 'react-redux';
import './loginStyle.css';
import FormikForm from '../../Component/FormikForm';

import { formFields, loginInitialValues } from './fields';
import { AuthContext } from '../../Context/authContext';
import { loginAction } from '../../actions/authActions';

const Login = ({ login }) => {
  const navigate = useNavigate();
  const { addToken } = useContext(AuthContext);

  return (
    <>
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

Login.propTypes = {
  login: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  login: (values, actions, navigate, addToken) =>
    loginAction(values, actions, navigate, addToken)(dispatch),
});

export default connect(null, mapDispatchToProps)(Login);
