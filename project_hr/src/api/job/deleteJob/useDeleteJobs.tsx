import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useCallback } from 'react';
import { useConfirm } from 'material-ui-confirm';
import { useSnackbar } from 'notistack';

import { QUERY_KEY_GET_JOBS } from '../../jobs/getJobs/getJobs';
import type { UseCheckboxRowProps } from '../../../components/Table/CheckboxRow/CheckboxRow.types';

import { deleteJob } from './deleteJob';

export const useDeleteJobs = (checkboxRow: UseCheckboxRowProps) => {
  const queryClient = useQueryClient();
  const mutation = useMutation(deleteJob);
  const confirm = useConfirm();
  const { enqueueSnackbar } = useSnackbar();
  const { markedRows, unmarkAllRows } = checkboxRow;

  const handleDeleteJobs = useCallback(async () => {
    await confirm({
      description: `This will permanently delete items: ${markedRows.length}`,
    });

    const jobsWithMutations = markedRows.map((jobId) =>
      mutation.mutateAsync(jobId),
    );

    await Promise.all(jobsWithMutations);
    enqueueSnackbar(`Jobs have been deleted`, { variant: 'success' });
    unmarkAllRows();
    queryClient.invalidateQueries([QUERY_KEY_GET_JOBS]);
  }, [
    markedRows,
    mutation,
    queryClient,
    confirm,
    unmarkAllRows,
    enqueueSnackbar,
  ]);

  return { handleDeleteJobs };
};
