import { useParams, Link } from 'react-router-dom';
import {
  Button,
  CircularProgress,
  Alert,
  Box,
  Typography,
} from '@mui/material';

import { useJob } from 'api/job/getJob/useJob';
import { editSingleJobUrl, Routes } from 'routing/Routes';
import { parseError } from 'errors/parseError';
import { Header } from 'components/Header/Header';

import { JobReadOnlyForm } from './JobReadOnlyForm/JobReadOnlyForm';

export const Job = () => {
  const { id } = useParams();

  if (!id) throw Error('No id in params');

  const { isLoading, isError, error, data } = useJob(id);

  if (isLoading) {
    return <CircularProgress />;
  }

  if (isError) {
    return <Alert severity="warning">{parseError(error)}</Alert>;
  }

  return (
    <>
      <Header title={data.title} />
      <Box className="mb2 flexBetween">
        <Typography variant="h4" component="h4" className="header">
          {data.companyName}
        </Typography>
        <Button component={Link} to={Routes.jobs} variant="contained">
          Back To List
        </Button>
      </Box>
      <JobReadOnlyForm defaultValues={data} />
      <Box textAlign="center">
        <Button
          component={Link}
          to={editSingleJobUrl(id)}
          variant="contained"
          color="warning"
        >
          Edit
        </Button>
      </Box>
    </>
  );
};
