import { useCallback } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useConfirm } from 'material-ui-confirm';
import { useSnackbar } from 'notistack';

import type { Job } from 'types/types';
import { QUERY_KEY_GET_JOBS } from 'api/jobs/getJobs/getJobs';
import { parseError } from 'errors/parseError';

import { deleteJob } from './deleteJob';

export const useDeleteJob = () => {
  const confirm = useConfirm();
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();

  const { mutate } = useMutation((payload: Job) => deleteJob(payload.id), {
    onSuccess: () => {
      enqueueSnackbar(`The job has been removed`, {
        variant: 'success',
      });
      queryClient.invalidateQueries([QUERY_KEY_GET_JOBS]);
    },
    onError: (error) => {
      enqueueSnackbar(`The job hasnt been removed: ${parseError(error)}`, {
        variant: 'success',
      });
    },
  });

  const handleDeleteJob = useCallback(
    async (data: Job) => {
      await confirm({
        description: `This will permanently delete:
        ${data.companyName}, 
        ${data.title}
      .`,
      });
      mutate(data);
    },
    [confirm, mutate],
  );

  return {
    handleDeleteJob,
  };
};
