import * as yup from 'yup';

import { validateLongText, validateText } from 'validation/text';

export const schema = yup.object({
  companyName: validateText,
  title: validateText,
  logo: validateText,
  shortDescription: validateText,
  longDescription: validateLongText,
});
