import { TextField } from '@mui/material';

import { useTable } from 'providers/table/useTable';

export const Search = () => {
  const { search } = useTable();

  return (
    <TextField
      id="outlined-basic"
      label="Outlined"
      variant="outlined"
      value={search.value}
      onChange={search.handleChange}
    />
  );
};
