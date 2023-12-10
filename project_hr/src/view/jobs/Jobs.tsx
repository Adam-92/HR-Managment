/* eslint-disable @typescript-eslint/no-shadow */
import { Link } from 'react-router-dom';
import { Alert, Button, CircularProgress } from '@mui/material';

import { Routes } from 'routing/Routes';
import { parseError } from 'errors/parseError';
import { Table } from 'components/Table/Table';
import { TableProvider } from 'providers/table/TableProvider';
import { Header } from 'components/Header/Header';
import { useJobs } from 'api/jobs/getJobs/useJobs';

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
      <TableProvider data={data}>
        {(data) => (
          <>
            <Button
              component={Link}
              to={Routes.addJob}
              variant="contained"
              color="success"
            >
              + Add
            </Button>
            <Table
              data={data}
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
