import { useSnackbar } from 'notistack';
import { useNavigate, Link } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { Typography, CircularProgress, Button } from '@mui/material';

import { addCandidate } from 'api/candidate/addCandidate/addCandidate';
import { parseError } from 'errors/parseError';
import { Header } from 'components/Header/Header';
import { useCandidates } from 'api/candidates/useCandidates';
import { Routes } from 'routing/Routes';
import { EditCandidateForm } from 'components/Forms/EditCandidateForm/EditCandidateForm';
import type { CandidatePayload, CandidateResponse } from 'types/types';

export const AddCandidate = () => {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const result = useCandidates();

  const { mutate, isLoading } = useMutation(addCandidate, {
    onSuccess: ({ data }: CandidateResponse) => {
      enqueueSnackbar(`${data.name} has been added`, {
        variant: 'success',
        autoHideDuration: 2000,
        onExited: () => navigate(Routes.candidates),
      });
    },
    onError: (error) => {
      enqueueSnackbar(`${parseError(error)}`, { variant: 'error' });
    },
  });

  const onSubmit = (payload: CandidatePayload) => mutate(payload);

  if (isLoading) {
    return <CircularProgress />;
  }

  return (
    <>
      <Header title="Add Candidate" />
      <Typography variant="h3" component="h3">
        Add Candidate
      </Typography>
      {result.data && (
        <Typography sx={{ fontSize: 18 }} color="text.secondary">
          # {result.data.length + 1}
        </Typography>
      )}
      <EditCandidateForm
        type="edit"
        handleEditCandidateFormSubmission={onSubmit}
      />
      <Button component={Link} to={Routes.candidates} variant="contained">
        Back To List
      </Button>
    </>
  );
};
