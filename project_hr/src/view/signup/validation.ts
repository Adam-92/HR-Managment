import * as yup from 'yup';

import {
  validateString,
  validateEmail,
  repeatString,
} from '../../validation/auth';

export const schema = yup.object({
  firstName: validateString,
  lastName: validateString,
  email: validateEmail,
  password: validateString,
  repeatPassword: repeatString('repeatPassword'),
});
