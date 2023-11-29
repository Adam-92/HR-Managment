import * as yup from 'yup';

import { formError } from 'errors/formError';

export const validateText = yup
  .string()
  .trim()
  .required(formError.required)
  .min(5, formError.minMaxLength)
  .max(18, formError.minMaxLength);

export const validateLongText = yup
  .string()
  .trim()
  .required(formError.required)
  .min(10, formError.minMaxLengthLongText)
  .max(100, formError.minMaxLengthLongText);
