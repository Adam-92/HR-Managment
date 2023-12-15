import type { SelectChangeEvent } from '@mui/material';

export type SelectActionsValue = 'Actions' | 'Delete';

export type UseSelectActions = {
  handleChange: (event: SelectChangeEvent) => void;
  value: SelectActionsValue;
};
