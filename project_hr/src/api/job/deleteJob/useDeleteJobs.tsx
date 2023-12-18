import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useCallback } from 'react';
import { useConfirm } from 'material-ui-confirm';
import { useSnackbar } from 'notistack';

import { QUERY_KEY_GET_JOBS } from '../../jobs/getJobs/getJobs';

import { deleteJob } from './deleteJob';

export const useDeleteJobs = (JobIds: string[]) => {
  const queryClient = useQueryClient();
  const mutation = useMutation(deleteJob);
  const confirm = useConfirm();
  const { enqueueSnackbar } = useSnackbar();

  const handleDeleteJobs = useCallback(async () => {
    await confirm({
      description: `This will permanently delete items: ${JobIds.length}`,
    });

    const jobsWithMutations = JobIds.map((jobId) =>
      mutation.mutateAsync(jobId),
    );

    await Promise.all(jobsWithMutations);
    enqueueSnackbar(`Jobs have been deleted`, { variant: 'success' });
    queryClient.invalidateQueries([QUERY_KEY_GET_JOBS]);
  }, [JobIds, mutation, queryClient, confirm, enqueueSnackbar]);

  return { handleDeleteJobs };
};
