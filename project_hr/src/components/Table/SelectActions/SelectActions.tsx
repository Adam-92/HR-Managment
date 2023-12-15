import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
} from '@mui/material';

import { useTable } from 'providers/table/useTable';

export const SelectActions = () => {
  const { selectActions, checkboxRow } = useTable();

  return (
    <FormControl
      sx={{ m: 1, minWidth: 120 }}
      disabled={!checkboxRow.someRowsAreMarked}
    >
      <InputLabel id="demo-simple-select-disabled-label">Age</InputLabel>
      <Select
        labelId="demo-simple-select-disabled-label"
        id="demo-simple-select-disabled"
        value={selectActions.value}
        label="Actions"
        onChange={selectActions.handleChange}
      >
        <MenuItem value="Actions">Actions</MenuItem>
        <MenuItem value="Delete">Delete</MenuItem>
      </Select>
      <FormHelperText>Available if marked rows</FormHelperText>
    </FormControl>
  );
};
