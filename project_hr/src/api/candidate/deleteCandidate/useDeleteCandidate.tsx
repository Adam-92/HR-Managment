import { useCallback } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useConfirm } from 'material-ui-confirm';
import { useSnackbar } from 'notistack';

import type { Candidate } from '@types/types';
import { QUERY_KEY_GET_CANDIDATES } from 'api/candidates/getCandidates';
import { parseError } from 'errors/parseError';

import { deleteCandidate } from './deleteCandidate';

export const useDeleteCandidate = () => {
  const confirm = useConfirm();
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();

  const { mutate } = useMutation(
    (payload: Candidate) => deleteCandidate(payload.id),
    {
      onSuccess: () => {
        enqueueSnackbar(`Candidate has been removed`, {
          variant: 'success',
        });
        queryClient.invalidateQueries([QUERY_KEY_GET_CANDIDATES]);
      },
      onError: (error) => {
        enqueueSnackbar(
          `The candidate hasnt been removed: ${parseError(error)}`,
          {
            variant: 'success',
          },
        );
      },
    },
  );

  const handleDeleteCandidate = useCallback(
    async (data: Candidate) => {
      await confirm({
        description: `This will permanently delete: ${data.name}`,
      });
      mutate(data);
    },
    [confirm, mutate],
  );

  return { handleDeleteCandidate };
};
