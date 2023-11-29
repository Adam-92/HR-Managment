import { useSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { Typography, CircularProgress } from '@mui/material';

import { parseError } from 'errors/parseError';
import type { AddJobPayload, AddJobResponse } from 'api/addJob/addJob';
import { Header } from 'components/Header/Header';
import { addJob } from 'api/addJob/addJob';
import { Routes } from 'routing/Routes';
import { JobForm } from 'components/JobForm/JobForm';

export const AddJob = () => {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const { mutate, isLoading } = useMutation(addJob, {
    onSuccess: ({ data }: AddJobResponse) => {
      enqueueSnackbar(`${data.title} has been added`, {
        variant: 'success',
        autoHideDuration: 2000,
        onExited: () => navigate(Routes.jobs),
      });
    },
    onError: (error) => {
      enqueueSnackbar(`${parseError(error)}`, { variant: 'error' });
    },
  });

  const onSubmit = (payload: AddJobPayload) => mutate(payload);

  if (isLoading) {
    return <CircularProgress />;
  }

  return (
    <>
      <Header title="HR Add Job" />
      <Typography variant="h3" component="h3">
        Add Job
      </Typography>
      <Typography sx={{ fontSize: 18 }} color="text.secondary">
        # 44
      </Typography>
      <JobForm type="add" handleJobFormSubmission={onSubmit} />
    </>
  );
};
