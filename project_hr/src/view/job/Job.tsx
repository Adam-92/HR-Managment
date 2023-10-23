import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import {
  CircularProgress,
  Alert,
  Card,
  CardContent,
  Typography,
  Button,
} from '@mui/material';
import { Helmet } from 'react-helmet-async';

import { Routes } from 'routing/Routes';
import { parseError } from 'errors/parseError';
import { getJob, QUERY_KEY_GET_JOB } from 'api/getJob/getJob';
import { formatDate } from 'utils/formatDate';

export const Job = () => {
  const { id } = useParams();

  if (!id) throw Error('No id in params');

  const { data, isLoading, isError, error } = useQuery(
    [QUERY_KEY_GET_JOB],
    () => getJob(id),
    { retry: 1 },
  );

  if (isLoading) {
    return <CircularProgress />;
  }

  if (isError) {
    return <Alert severity="warning">{parseError(error)}</Alert>;
  }

  return (
    <>
      <Helmet>
        <title>{data.title}</title>
      </Helmet>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 25 }} color="text.primary" gutterBottom>
            {data.title}
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Company: {data.companyName}
          </Typography>
          <Typography variant="h5" component="div">
            Created At: {formatDate(data.createdAt)}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            description: {data.longDescription}
          </Typography>
        </CardContent>
        <Button component={Link} to="" variant="contained" color="warning">
          Edit
        </Button>
        <Button component={Link} to={Routes.jobs} variant="contained">
          Back To List
        </Button>
      </Card>
    </>
  );
};
