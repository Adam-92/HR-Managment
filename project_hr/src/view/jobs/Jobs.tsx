/* eslint-disable @typescript-eslint/no-shadow */
import { Alert, CircularProgress } from '@mui/material';

import { parseError } from 'errors/parseError';
import { Table } from 'components/Table/Table';
import { TableProvider } from 'providers/table/TableProvider';
import { Header } from 'components/Header/Header';
import { useJobs } from 'api/jobs/useJobs';
import { TableToolbar } from 'components/Table/TableToolbar';

import { columns } from './columns';
import { JobRows } from './JobRows';
import { JobColumns } from './JobColumns';

export const Jobs = () => {
  const { isLoading, isError, error, data } = useJobs();

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
      <Header title="HR Jobs" />
      <TableProvider data={data} columns={columns}>
        {(data) => (
          <>
            <TableToolbar dataCategory="jobs" link="addJob" />
            <Table
              data={data}
              dataCategory="jobs"
              columns={columns}
              columnsRenderer={JobColumns}
              rowsRenderer={JobRows}
            />
          </>
        )}
      </TableProvider>
    </>
  );
};
