import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useCallback } from 'react';
import { useConfirm } from 'material-ui-confirm';
import { useSnackbar } from 'notistack';

import { QUERY_KEY_GET_CANDIDATES } from '../../candidates/getCandidates';

import { deleteCandidate } from './deleteCandidate';

export const useDeleteCandidates = (candidatesIds: string[]) => {
  const queryClient = useQueryClient();
  const mutation = useMutation(deleteCandidate);
  const confirm = useConfirm();
  const { enqueueSnackbar } = useSnackbar();

  const handleDeleteCandidates = useCallback(async () => {
    await confirm({
      description: `This will permanently delete items: ${candidatesIds.length}`,
    });

    const candidatesWithMutations = candidatesIds.map((candidateId) =>
      mutation.mutateAsync(candidateId),
    );

    await Promise.all(candidatesWithMutations);
    enqueueSnackbar(`Candidates have been deleted`, { variant: 'success' });
    queryClient.invalidateQueries([QUERY_KEY_GET_CANDIDATES]);
  }, [candidatesIds, mutation, queryClient, confirm, enqueueSnackbar]);

  return { handleDeleteCandidates };
};
