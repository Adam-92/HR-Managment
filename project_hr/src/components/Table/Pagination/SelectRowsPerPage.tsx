import { FormControl, Select, MenuItem, FormHelperText } from '@mui/material';

import { useTable } from 'providers/table/useTable';

import { rowsPerPage } from './rowsPerPage';

export const SelectRowsPerPage = () => {
  const { pagination } = useTable();

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }}>
      <FormHelperText>Show Rows:</FormHelperText>
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
    </FormControl>
  );
};
