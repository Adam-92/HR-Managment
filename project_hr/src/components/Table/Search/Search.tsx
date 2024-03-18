import { TextField } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { useTable } from 'providers/table/useTable';

export const Search = () => {
  const { search } = useTable();
  const { t } = useTranslation();
  return (
    <TextField
      label={t('tableToolbar.searchLabel')}
      variant="outlined"
      type="search"
      value={search.value}
      onChange={search.handleChange}
    />
  );
};
