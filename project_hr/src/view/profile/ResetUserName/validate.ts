import * as yup from 'yup';

import { validateString } from 'validation/auth';

export const schema = yup.object({
  firstName: validateString,
  lastName: validateString,
});
