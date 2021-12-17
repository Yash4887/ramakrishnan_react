import React, { useContext } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registrationAction } from '../../actions/authActions';
import FormikForm from '../../Component/FormikForm';
import { AuthContext } from '../../Context/authContext';
import axiosInstance from '../../utils/axiosInstance';
import { registerFormFields, registerInitialValues, registerValidate } from './fields';
import './registerStyle.css';

const Register = ({ register }) => {
  const navigate = useNavigate();
  const { addToken } = useContext(AuthContext);

  return (
    <FormikForm
      fields={registerFormFields}
      initialValues={registerInitialValues}
      onSubmit={(values, actions) => {
        const { confirmPassword, ...user } = values;
        register(user, actions, navigate, addToken);
      }}
      validate={registerValidate}
      buttonProps={{
        children: 'Register',
      }}
    />
  );
};

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
  register: (user, actions, navigate, addToken) =>
    registrationAction(user, actions, navigate, addToken)(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
