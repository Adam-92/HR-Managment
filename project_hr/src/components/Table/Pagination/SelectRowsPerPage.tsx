import {
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  FormHelperText,
} from '@mui/material';
import { useTranslation } from 'react-i18next';

import { useTable } from 'providers/table/useTable';

import { rowsPerPage } from './rowsPerPage';

export const SelectRowsPerPage = () => {
  const { pagination } = useTable();
  const { t } = useTranslation();
  return (
    <FormControl className="actionsSelf" sx={{ mx: '1rem' }}>
      <InputLabel>{t(`tableToolbar.select`)}</InputLabel>
      <Select
        value={pagination.rowsPerPage}
        onChange={pagination.handleChangeRowsPerPage}
        inputProps={{ 'aria-label': 'Without label' }}
      >
        {rowsPerPage.map((row) => (
          <MenuItem value={row} key={row}>
            {row}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText>{t(`tableToolbar.showRows`)}</FormHelperText>
    </FormControl>
  );
};
