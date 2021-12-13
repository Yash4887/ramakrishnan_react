import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import FormikForm from '../../Component/FormikForm';
import { AuthContext } from '../../Context/authContext';
import axiosInstance from '../../utils/axiosInstance';
import { registerFormFields, registerInitialValues, registerValidate } from './fields';
import './registerStyle.css';

const Register = () => {
  const navigate = useNavigate();
  const { addToken } = useContext(AuthContext);

  const handleRegister = async (values, actions) => {
    try {
      const { confirmPassword, ...user } = values;
      const res = await axiosInstance.post('signup', user);
      addToken(res.data.accessToken);
      navigate('/main', { replace: true });
    } catch (error) {
      actions.setFieldError('serverError', error.message);
    }
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
