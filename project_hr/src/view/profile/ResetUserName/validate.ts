import * as yup from 'yup';

import { validateString } from 'validation/patterns';

export const schema = yup.object({
  firstName: validateString,
  lastName: validateString,
});
