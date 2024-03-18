import * as yup from 'yup';

export const schema = yup.object({
  name: yup
    .string()
    .trim()
    .required('This field is required')
    .min(3, 'min 3 characters, max 15 characters')
    .max(15, 'min 3 characters, max 15 characters'),
  position: yup
    .string()
    .trim()
    .required('This field is required')
    .min(3, 'min 3 characters, max 50 characters')
    .max(50, 'min 3 characters, max 50 characters'),
  companyName: yup
    .string()
    .trim()
    .required('This field is required')
    .min(5, 'min 5 characters, max 15 characters')
    .max(15, 'min 5 characters, max 15 characters'),
  shortDescription: yup
    .string()
    .trim()
    .required('This field is required')
    .min(5, 'min 5 characters, max 15 characters')
    .max(15, 'min 5 characters, max 15 characters'),
  longDescription: yup
    .string()
    .trim()
    .required('This field is required')
    .min(5, 'min 5 characters, max 250 characters')
    .max(250, 'min 5 characters, max 250 characters'),
});
