import { useSnackbar } from 'notistack';
import { useNavigate, Link } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { Typography, CircularProgress, Button, Box } from '@mui/material';

import { addJob } from 'api/job/addJob/addJob';
import { parseError } from 'errors/parseError';
import { Header } from 'components/Header/Header';
import { useJobs } from 'api/jobs/useJobs';
import { Routes } from 'routing/Routes';
import { EditJobForm } from 'components/Forms/EditJobForm/EditJobForm';

import type { JobPayload, JobResponse } from '../../../types/types';

export const AddJob = () => {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const result = useJobs();

  const { mutate, isLoading } = useMutation(addJob, {
    onSuccess: ({ data }: JobResponse) => {
      enqueueSnackbar(`${data.title} has been added`, {
        variant: 'success',
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
      <Box className="mb2 flexBetween">
        <Typography variant="h4" component="h4" className="header">
          Add Job
        </Typography>
        {result.data && (
          <Typography
            className="headerNextNumber"
            sx={{ mr: 'auto', ml: '1rem' }}
            color="text.secondary"
          >
            # {result.data.length + 1}
          </Typography>
        )}
        <Button
          component={Link}
          to={Routes.jobs}
          variant="contained"
          className="mr3"
        >
          Back To List
        </Button>
      </Box>
      <EditJobForm type="add" handleEditJobFormSubmission={onSubmit} />
    </>
  );
};
