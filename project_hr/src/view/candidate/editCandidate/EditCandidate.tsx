import { useSnackbar } from 'notistack';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Typography, CircularProgress, Button, Box } from '@mui/material';

import { getSingleCandidateUrl, Routes } from 'routing/Routes';
import { Header } from 'components/Header/Header';
import { EditCandidateForm } from 'components/Forms/EditCandidateForm/EditCandidateForm';
import { useCandidate } from 'api/candidate/getCandidate/useCandidate';
import type { CandidatePayload, CandidateResponse } from 'types/types';
import { parseError } from 'errors/parseError';
import { editCandidate } from 'api/candidate/editCandidate/editCandidate';
import { QUERY_KEY_GET_CANDIDATE } from 'api/candidate/getCandidate/getCandidate';

export const EditCandidate = () => {
  const { id } = useParams();

  if (!id) throw Error('No id in params');

  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const result = useCandidate(id);
  const queryClient = useQueryClient();
  const { mutate, isLoading } = useMutation(
    (payload: CandidatePayload) => editCandidate({ ...payload, id }),
    {
      onSuccess: ({ data }: CandidateResponse) => {
        queryClient.invalidateQueries([QUERY_KEY_GET_CANDIDATE]);
        enqueueSnackbar(`${data.name} has been added`, {
          variant: 'success',
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
      <Header title="HR Edit Candidate" />
      <Box className="mb2 flexBetween">
        <Typography variant="h4" component="h4" className="header">
          {result.data?.companyName}
        </Typography>
        <Button
          component={Link}
          to={getSingleCandidateUrl(id)}
          variant="contained"
        >
          GO BACK
        </Button>
      </Box>
      <EditCandidateForm
        type="edit"
        defaultValues={result.data}
        handleEditCandidateFormSubmission={onSubmit}
      />
    </>
  );
};
