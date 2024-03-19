import * as yup from 'yup';

export const schema = yup.object({
  oldPassword: yup
    .string()
    .trim()
    .matches(/^\S*$/, 'Whitespace is not allowed')
    .required('This field is required')
    .min(5, 'min 5 characters, max 15 characters')
    .max(15, 'min 5 characters, max 15 characters'),
  newPassword: yup
    .string()
    .trim()
    .matches(/^\S*$/, 'Whitespace is not allowed')
    .required('This field is required')
    .min(5, 'min 5 characters, max 15 characters')
    .max(15, 'min 5 characters, max 15 characters'),
  repeatNewPassword: yup
    .string()
    .trim()
    .required('This field is required')
    .oneOf([yup.ref('newPassword')], 'Passwords are not the same'),
});
