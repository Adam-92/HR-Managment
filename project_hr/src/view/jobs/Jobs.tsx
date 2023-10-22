/* eslint-disable @typescript-eslint/no-shadow */
import { Helmet } from 'react-helmet-async';
import { useQuery } from '@tanstack/react-query';
import { CircularProgress, Alert } from '@mui/material';

import { parseError } from 'errors/parseError';
import { QUERY_KEY_GET_JOBS, getJobs } from 'api/getJobs/getJobs';
import { Table } from 'components/Table/Table';
import { TableProvider } from 'providers/table/TableProvider';

import { columns } from './columns';
import { JobRows } from './JobRows';
import { JobColumns } from './JobColumns';

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
    return <Alert severity="info">There is no any data</Alert>;
  }

  return (
    <>
      <Helmet>
        <title>HR Jobs</title>
      </Helmet>
      <TableProvider data={data}>
        {(data) => (
          <Table
            data={data}
            columns={columns}
            columnsRenderer={JobColumns}
            rowsRenderer={JobRows}
          />
        )}
      </TableProvider>
    </>
  );
};
