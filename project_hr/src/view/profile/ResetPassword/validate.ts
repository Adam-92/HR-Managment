import * as yup from 'yup';

import { validateString, repeatString } from 'validation/patterns';

export const schema = yup.object({
  oldPassword: validateString,
  newPassword: validateString,
  repeatNewPassword: repeatString('repeatNewPassword'),
});
