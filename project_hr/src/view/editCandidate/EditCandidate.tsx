import { useSnackbar } from 'notistack';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { Typography, CircularProgress, Button } from '@mui/material';

import { getSingleCandidateUrl, Routes } from 'routing/Routes';
import { Header } from 'components/Header/Header';
import { EditCandidateForm } from 'components/Forms/EditCandidateForm/EditCandidateForm';
import { useCandidate } from 'api/candidate/getCandidate/useCandidate';
import type { CandidatePayload, CandidateResponse } from 'types/types';
import { parseError } from 'errors/parseError';
import { editCandidate } from 'api/candidate/editCandidate/editCandidate';

export const EditCandidate = () => {
  const { id } = useParams();

  if (!id) throw Error('No id in params');

  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const result = useCandidate(id);

  const { mutate, isLoading } = useMutation(
    (payload: CandidatePayload) => editCandidate({ ...payload, id }),
    {
      onSuccess: ({ data }: CandidateResponse) => {
        enqueueSnackbar(`${data.name} has been added`, {
          variant: 'success',
          autoHideDuration: 1000,
          onExited: () => navigate(Routes.candidates),
        });
      },
      onError: (error) => {
        enqueueSnackbar(`${parseError(error)}`, { variant: 'error' });
      },
    },
  );

  const onSubmit = (payload: CandidatePayload) => mutate(payload);

  if (isLoading) {
    return <CircularProgress />;
  }

  return (
    <>
      <Header title="Edit Candidate" />
      <Typography>Edit Candidate</Typography>
      <EditCandidateForm
        type="edit"
        defaultValues={result.data}
        handleEditCandidateFormSubmission={onSubmit}
      />
      <Button
        component={Link}
        to={getSingleCandidateUrl(id)}
        variant="contained"
      >
        GO BACK
      </Button>
    </>
  );
};
