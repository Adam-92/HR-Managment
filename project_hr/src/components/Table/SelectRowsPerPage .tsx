import { FormControl, Select, MenuItem, FormHelperText } from '@mui/material';

import { useTable } from 'context/Table/useTable';

export const SelectRowsPerPage = () => {
  const { rowsPerPage, handleChangeRowsPerPage } = useTable();

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }}>
      <FormHelperText>Show Rows:</FormHelperText>
      <Select
        value={rowsPerPage}
        onChange={handleChangeRowsPerPage}
        inputProps={{ 'aria-label': 'Without label' }}
      >
        <MenuItem value="10">10</MenuItem>
        <MenuItem value="25">25</MenuItem>
        <MenuItem value="50">50</MenuItem>
      </Select>
    </FormControl>
  );
};
