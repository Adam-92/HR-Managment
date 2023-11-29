import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { Button, Box, TextField } from '@mui/material';

import { getEditJobUrl, Routes } from 'routing/Routes';
import { getJob, QUERY_KEY_GET_JOB } from 'api/getJob/getJob';
import { formatDate } from 'utils/formatDate';
import { Header } from 'components/Header/Header';
import { DataStatusHandler } from 'components/DataStatusHandler/DataStatusHandler';

export const Job = () => {
  const { id } = useParams();

  if (!id) throw Error('No id in params');

  const results = useQuery([QUERY_KEY_GET_JOB], () => getJob(id));

  return (
    <DataStatusHandler {...results}>
      {(data) => (
        <>
          <Header title={data.title} />
          <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              disabled
              id={data.id}
              label="id"
              variant="standard"
              value={data.id}
            />
            <TextField
              id={data.title}
              label="title"
              variant="standard"
              value={data.title}
            />
            <TextField
              id={data.companyName}
              label="companyName"
              variant="standard"
              value={data.companyName}
            />
            <TextField
              id={formatDate(data.createdAt)}
              label="createdAt"
              variant="standard"
              value={formatDate(data.createdAt)}
            />
            <TextField
              id="standard-basic"
              label="longDescription"
              variant="standard"
              value={data.longDescription}
            />
          </Box>
          <Button
            component={Link}
            to={getEditJobUrl(id)}
            variant="contained"
            color="warning"
          >
            Edit
          </Button>
          <Button component={Link} to={Routes.jobs} variant="contained">
            Back To List
          </Button>
        </>
      )}
    </DataStatusHandler>
  );
};
