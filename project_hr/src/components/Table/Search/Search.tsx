import { Box, TextField } from '@mui/material';

import { useTable } from 'providers/table/useTable';

import { boxSx } from '../style';

export const Search = () => {
  const { search } = useTable();

  return (
    <Box sx={boxSx}>
      <TextField
        id="search"
        label="search"
        variant="outlined"
        type="search"
        value={search.value}
        onChange={search.handleChange}
      />
    </Box>
  );
};
