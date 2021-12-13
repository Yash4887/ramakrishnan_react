import FormikInput from '../../Component/FormikInput';
import FormikRadio from '../../Component/FormikRadio';

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
    component: FormikRadio,
    name: 'gender',
    label: 'Gender',
    options: [
      {
        value: 'male',
        label: 'Male',
      },
      {
        value: 'female',
        label: 'Female',
      },
      {
        value: 'other',
        label: 'Other',
      },
    ],
    validate: (val) => {
      if (!val) {
        return 'Require...';
      }
      return '';
    },
  },
  // {
  //   component: FormikSelect,
  //   name: 'hobbies',
  //   label: 'Hobbies',
  //   options: [
  //     {
  //       value: 'cricket',
  //       label: 'Cricket',
  //     },
  //     {
  //       value: 'football',
  //       label: 'Football',
  //     },
  //     {
  //       value: 'baseball',
  //       label: 'Baseball',
  //     },
  //   ],
  //   validate: (val) => {
  //     if (!val) {
  //       return 'Require...';
  //     }
  //     return '';
  //   },
  // },
  {
    component: FormikInput,
    name: 'email',
    label: 'Email',
    validate: (val) => {
      if (!val) {
        return 'Require...';
      }
      if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val)) {
        return 'Invalid Email';
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
  {
    component: FormikInput,
    name: 'confirmPassword',
    label: 'Confirm Password',
    type: 'password',
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

export const registerValidate = (values) => {
  const error = {};
  if (values.password !== values.confirmPassword) {
    error.confirmPassword = 'Confirm password should match password.';
  }
  return error;
};
