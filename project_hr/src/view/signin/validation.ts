import * as yup from 'yup';

export const schema = yup.object({
  email: yup
    .string()
    .trim()
    .matches(/^\S*$/, 'Whitespace is not allowed')
    .required('This field is required')
    .email('Email address in not appropriate'),
  password: yup
    .string()
    .trim()
    .matches(/^\S*$/, 'Whitespace is not allowed')
    .required('This field is required')
    .min(5, 'min 5 characters, max 15 characters')
    .max(15, 'min 5 characters, max 15 characters'),
  rememberMe: yup.boolean(),
});
