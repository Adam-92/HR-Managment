import { FormControl, Select, MenuItem, FormHelperText } from '@mui/material';

import { useTable } from 'providers/table/useTable';

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
        <MenuItem value="10">10</MenuItem>
        <MenuItem value="25">25</MenuItem>
        <MenuItem value="50">50</MenuItem>
      </Select>
    </FormControl>
  );
};
