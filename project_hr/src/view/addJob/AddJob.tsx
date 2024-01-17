import { useSnackbar } from 'notistack';
import { useNavigate, Link } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { Typography, CircularProgress, Button } from '@mui/material';

import { addJob } from 'api/job/addJob/addJob';
import { parseError } from 'errors/parseError';
import { Header } from 'components/Header/Header';
import { useJobs } from 'api/jobs/useJobs';
import { Routes } from 'routing/Routes';
import { JobForm } from 'components/JobForm/JobForm';

import type { JobPayload, JobResponse } from '../../@types/types';

export const AddJob = () => {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const result = useJobs();

  const { mutate, isLoading } = useMutation(addJob, {
    onSuccess: ({ data }: JobResponse) => {
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

  const onSubmit = (payload: JobPayload) => mutate(payload);

  if (isLoading) {
    return <CircularProgress />;
  }

  return (
    <>
      <Header title="HR Add Job" />
      <Typography variant="h3" component="h3">
        Add Job
      </Typography>
      {result.data && (
        <Typography sx={{ fontSize: 18 }} color="text.secondary">
          # {result.data.length + 1}
        </Typography>
      )}

      <JobForm type="add" handleJobFormSubmission={onSubmit} />
      <Button component={Link} to={Routes.jobs} variant="contained">
        Back To List
      </Button>
    </>
  );
};
