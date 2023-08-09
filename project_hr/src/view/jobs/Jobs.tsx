import { Helmet } from 'react-helmet-async';
import { useQuery } from '@tanstack/react-query';
import { CircularProgress, Alert } from '@mui/material';

import { parseError } from 'errors/parseError';
import { QUERY_KEY_GET_JOBS, getJobs } from 'api/getJobs/getJobs';
import { Table } from 'components/Table/Table';

import { jobRowRender } from './utils/jobRowRendet';

export const Jobs = () => {
  const { data, isLoading, isError, error } = useQuery(
    [QUERY_KEY_GET_JOBS],
    getJobs,
  );

  if (isLoading) {
    return <CircularProgress />;
  }

  if (isError) {
    return <Alert severity="warning">{parseError(error)}</Alert>;
  }

  if (data.length < 1) {
    return <Alert severity="info">There in no any data</Alert>;
  }

  return (
    <>
      <Helmet>
        <title>HR Jobs</title>
      </Helmet>
      <Table data={data} rowRender={jobRowRender} />
    </>
  );
};
