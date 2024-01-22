import * as yup from 'yup'

export const schema = yup.object().shape({
  firstName: yup
    .string()
    .required('First name is required')
    .matches(/^[A-Za-z]+$/, 'First name must contain only latin letters'),
  lastName: yup
    .string()
    .required('Last name is required')
    .matches(/^[A-Za-z]+$/, 'Last name must contain only latin letters'),
  email: yup
    .string()
    .required('Email is required')
    .matches(/^[A-Za-z0-9@.]+$/, 'Email must contain only latin letters'),
  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters')
    // .matches(
    //   /^[A-Za-z0-9!@#$%^&*()]+$/,
    //   'Password must contain only latin letters',
    // )
    .matches(
      /^(?=.*[A-Z])/,
      'Password must contain at least one uppercase letter',
    )
    // .matches(
    //   /^(?=.*[!@#$%^&*()])/,
    //   'Password must contain at least one special character',
    // )
    .matches(/^(?=.*[0-9])/, 'Password must contain at least one digit'),
})
