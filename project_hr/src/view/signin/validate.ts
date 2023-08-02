import * as yup from 'yup';

import { validateString, validateEmail } from 'validation/patterns';

export const schema = yup.object({
  email: validateEmail,
  password: validateString,
  rememberMe: yup.boolean(),
});
