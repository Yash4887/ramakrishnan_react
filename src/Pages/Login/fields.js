import FormikInput from '../../Component/FormikInput';

export const formFields = [
  {
    component: FormikInput,
    name: 'email',
    label: 'Email',
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
    type: 'password',
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
