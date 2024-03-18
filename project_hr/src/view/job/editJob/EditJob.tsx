import { useSnackbar } from 'notistack';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Typography, CircularProgress, Button, Box } from '@mui/material';

import { EditJobForm } from 'components/Forms/EditJobForm/EditJobForm';
import { getSingleJobUrl, Routes } from 'routing/Routes';
import { Header } from 'components/Header/Header';
import { useJob } from 'api/job/getJob/useJob';
import type { JobPayload, JobResponse } from 'types/types';
import { parseError } from 'errors/parseError';
import { editJob } from 'api/job/editJob/editJob';
import { QUERY_KEY_GET_JOB } from 'api/job/getJob/getJob';

export const EditJob = () => {
  const { id } = useParams();

  if (!id) throw Error('No id in params');

  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const result = useJob(id);
  const queryClient = useQueryClient();
  const { mutate, isLoading } = useMutation(
    (payload: JobPayload) => editJob({ ...payload, id }),
    {
      onSuccess: ({ data }: JobResponse) => {
        queryClient.invalidateQueries([QUERY_KEY_GET_JOB]);
        enqueueSnackbar(`${data.title} has been added`, {
          variant: 'success',
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
      <Box className="mb2 flexBetween">
        <Typography variant="h4" component="h4" className="header">
          {result.data?.companyName}
        </Typography>
        <Button component={Link} to={getSingleJobUrl(id)} variant="contained">
          GO BACK
        </Button>
      </Box>
      <EditJobForm
        type="edit"
        defaultValues={result.data}
        handleEditJobFormSubmission={onSubmit}
      />
    </>
  );
};
