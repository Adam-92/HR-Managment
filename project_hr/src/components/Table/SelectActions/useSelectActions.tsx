import { useCallback, useState } from 'react';
import type { SelectChangeEvent } from '@mui/material';

import { useDeleteCandidates } from 'api/candidate/deleteCandidate/useDeleteCandidates';
import { useDeleteJobs } from 'api/job/deleteJob/useDeleteJobs';

import type { UseCheckboxRowProps } from '../CheckboxRow/CheckboxRow.types';
import type { DataCategory } from '../Table';

import type { SelectActionsValue } from './actions';

export const useSelectActions = (
  dataCategory: DataCategory,
  checkboxRow: UseCheckboxRowProps,
) => {
  const [value, setValue] = useState<SelectActionsValue>('Actions');

  const { handleDeleteCandidates } = useDeleteCandidates(
    checkboxRow.markedRows,
  );
  const { handleDeleteJobs } = useDeleteJobs(checkboxRow.markedRows);

  const handleChange = useCallback(
    (event: SelectChangeEvent) => {
      const item = event.target.value as SelectActionsValue;

      if (item === 'Delete' && dataCategory === 'candidates') {
        handleDeleteCandidates();
        checkboxRow.unmarkAllRows();
      }

      if (item === 'Delete' && dataCategory === 'jobs') {
        handleDeleteJobs();
        checkboxRow.unmarkAllRows();
      }
    },
    [handleDeleteCandidates, handleDeleteJobs, dataCategory, checkboxRow],
  );

  return { value, handleChange };
};
