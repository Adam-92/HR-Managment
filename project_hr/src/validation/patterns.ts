import * as yup from 'yup';

import { formError } from 'errors/formError';

export const validateString = yup
  .string()
  .trim()
  .matches(/^\S*$/, formError.whiteSpace)
  .required(formError.required)
  .min(5, formError.minMaxLength)
  .max(15, formError.minMaxLength);

export const repeatString = (ref: string) =>
  yup
    .string()
    .trim()
    .required(formError.required)
    .oneOf([yup.ref(ref)], formError.repeatPassword);

export const validateEmail = yup
  .string()
  .trim()
  .matches(/^\S*$/, formError.whiteSpace)
  .required(formError.required)
  .email(formError.email);
