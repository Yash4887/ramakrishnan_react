import FormikInput from '../../Component/FormikInput';

export const registerFormFields = [
  {
    component: FormikInput,
    name: 'name',
    label: 'Name',
    validate: (val) => {
      if (!val) {
        return 'Require...';
      }
      return '';
    },
  },
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
  {
    component: FormikInput,
    name: 'confirmPassword',
    label: 'Confirm Password',
    validate: (val) => {
      if (!val) {
        return 'Require...';
      }
      return '';
    },
  },
];

export const registerInitialValues = registerFormFields.reduce(
  (p, c) => ({ ...p, [c.name]: '' }),
  {},
);
