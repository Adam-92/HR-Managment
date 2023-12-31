import * as yup from 'yup';

import { validateLongText, validateText } from 'validation/text';

export const schema = yup.object({
  name: validateText,
  position: validateText,
  companyName: validateText,
  logo: validateText,
  shortDescription: validateText,
  longDescription: validateLongText,
  appliedToJobId: validateText.nullable(),
});
