import * as yup from 'yup';

export const schema = yup.object({
  firstName: yup
    .string()
    .trim()
    .matches(/^\S*$/, 'Whitespace is not allowed')
    .required('This field is required')
    .min(3, 'min 3 characters, max 15 characters')
    .max(15, 'min 5 characters, max 15 characters'),
  lastName: yup
    .string()
    .trim()
    .matches(/^\S*$/, 'Whitespace is not allowed')
    .required('This field is required')
    .min(3, 'min 3 characters, max 15 characters')
    .max(15, 'min 5 characters, max 15 characters'),
});
