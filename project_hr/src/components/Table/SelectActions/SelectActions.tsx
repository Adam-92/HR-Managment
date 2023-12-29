import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
} from '@mui/material';

import { useTable } from 'providers/table/useTable';
import type { DataCategory } from 'components/Table/Table';

import { useSelectActions } from './useSelectActions';
import { actions } from './actions';

type SelectActionsProps = {
  dataCategory: DataCategory;
};

export const SelectActions = ({ dataCategory }: SelectActionsProps) => {
  const { checkboxRow } = useTable();
  const { value, handleChange } = useSelectActions(dataCategory, checkboxRow);

  return (
    <FormControl
      sx={{ m: 1, minWidth: 120 }}
      disabled={!checkboxRow.someRowsAreMarked}
    >
      <InputLabel id="demo-simple-select-disabled-label">Select</InputLabel>
      <Select
        labelId="demo-simple-select-disabled-label"
        id="demo-simple-select-disabled"
        value={value}
        label="Actions"
        onChange={handleChange}
      >
        F
        {actions.map((action) => {
          return (
            <MenuItem value={action} key={action}>
              {action}
            </MenuItem>
          );
        })}
      </Select>
      <FormHelperText>Available if marked rows</FormHelperText>
    </FormControl>
  );
};
