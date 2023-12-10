import * as yup from 'yup';

import { validateEmail, validateString } from '../../validation/auth';

export const schema = yup.object({
  email: validateEmail,
  password: validateString,
  rememberMe: yup.boolean(),
});
