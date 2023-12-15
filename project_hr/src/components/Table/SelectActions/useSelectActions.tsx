import { useCallback, useState } from 'react';
import type { SelectChangeEvent } from '@mui/material';

import { useDeleteJobs } from 'api/job/deleteJob/useDeleteJobs';

import type { UseCheckboxRowProps } from '../CheckboxRow/CheckboxRow.types';

import type { SelectActionsValue } from './SelectActions.types';

export const useSelectActions = (checkboxRow: UseCheckboxRowProps) => {
  const [value, setValue] = useState<SelectActionsValue>('Actions');
  const { handleDeleteJobs } = useDeleteJobs(checkboxRow);

  const handleChange = useCallback(
    (event: SelectChangeEvent) => {
      const item = event.target.value as SelectActionsValue;

      if (item === 'Delete') {
        handleDeleteJobs();
      }
    },
    [handleDeleteJobs],
  );

  return { value, handleChange };
};
