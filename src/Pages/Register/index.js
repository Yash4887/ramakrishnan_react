import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import FormikForm from '../../Component/FormikForm';
import { AuthContext } from '../../Context/authContext';
import { registerFormFields, registerInitialValues, registerValidate } from './fields';
import './registerStyle.css';

const Register = () => {
  const navigate = useNavigate();
  const { addToken } = useContext(AuthContext);

  const handleRegister = async (values, actions) => {
    try {
      const { confirmPassword, ...user } = values;
      const res = await fetch('http://localhost:3000/signup', {
        method: 'POST',
        body: JSON.stringify(user),
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
