import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
  Box,
} from '@mui/material';

import { useTable } from 'providers/table/useTable';
import type { DataCategory } from 'components/Table/Table';

import { boxSx } from '../style';

import { useSelectActions } from './useSelectActions';
import { actions } from './actions';

type SelectActionsProps = {
  dataCategory: DataCategory;
};

export const SelectActions = ({ dataCategory }: SelectActionsProps) => {
  const { checkboxRow } = useTable();
  const { value, handleChange } = useSelectActions(dataCategory, checkboxRow);

  return (
    <Box sx={boxSx}>
      <FormControl
        sx={{ minWidth: 120 }}
        disabled={!checkboxRow.someRowsAreMarked}
      >
        <InputLabel id="select-disabled-label">Select</InputLabel>
        <Select
          labelId="select-disabled-label"
          id="select-disabled-label"
          value={value}
          label="Actions"
          onChange={handleChange}
        >
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
    </Box>
  );
};
