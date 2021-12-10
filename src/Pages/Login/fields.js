import FormikInput from '../../Component/FormikInput';

export const formFields = [
  {
    component: FormikInput,
    name: 'username',
    label: 'Username',
    validate: (val) => {
      if (!val) {
        return 'Require...';
      }
      return '';
    },
  },
  {
    component: FormikInput,
    name: 'password',
    label: 'Password',
    validate: (val) => {
      if (!val) {
        return 'Require...';
      }
      return '';
    },
  },
];

export const loginInitialValues = {
  username: '',
  password: '',
};
