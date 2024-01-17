import { useSnackbar } from 'notistack';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { Typography, CircularProgress, Button } from '@mui/material';

import { getSingleJobUrl, Routes } from 'routing/Routes';
import { Header } from 'components/Header/Header';
import { JobForm } from 'components/JobForm/JobForm';
import { useJob } from 'api/job/getJob/useJob';
import type { JobPayload, JobResponse } from '@types/types';
import { parseError } from 'errors/parseError';
import { editJob } from 'api/job/editJob/editJob';

export const EditJob = () => {
  const { id } = useParams();

  if (!id) throw Error('No id in params');

  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const result = useJob(id);

  const { mutate, isLoading } = useMutation(
    (payload: JobPayload) => editJob({ ...payload, id }),
    {
      onSuccess: ({ data }: JobResponse) => {
        enqueueSnackbar(`${data.title} has been added`, {
          variant: 'success',
          autoHideDuration: 1000,
          onExited: () => navigate(Routes.jobs),
        });
      },
      onError: (error) => {
        enqueueSnackbar(`${parseError(error)}`, { variant: 'error' });
      },
    },
  );

  const onSubmit = (payload: JobPayload) => mutate(payload);

  if (isLoading) {
    return <CircularProgress />;
  }
  return (
    <>
      <Header title="HR Edit Job" />
      <Typography>EditJob</Typography>
      <JobForm
        type="edit"
        defaultValues={result.data}
        handleJobFormSubmission={onSubmit}
      />
      <Button component={Link} to={getSingleJobUrl(id)} variant="contained">
        GO BACK
      </Button>
    </>
  );
};
