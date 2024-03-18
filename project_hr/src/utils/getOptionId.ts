import type { AutocompleteData } from 'types/types';

export const getAutocompleteOptionId = (
  data: AutocompleteData,
  option: string,
) => {
  const selectedValue = data.find((item) => option === item.label);
  if (selectedValue) return selectedValue.id;
  return '';
};
