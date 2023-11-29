/* eslint-disable @typescript-eslint/no-shadow */
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { Alert, Button } from '@mui/material';

import { Routes } from 'routing/Routes';
import { QUERY_KEY_GET_JOBS, getJobs } from 'api/getJobs/getJobs';
import { Table } from 'components/Table/Table';
import { TableProvider } from 'providers/table/TableProvider';
import { Header } from 'components/Header/Header';
import { DataStatusHandler } from 'components/DataStatusHandler/DataStatusHandler';

import { columns } from './columns';
import { JobRows } from './JobRows';
import { JobColumns } from './JobColumns';

export const Jobs = () => {
  const results = useQuery([QUERY_KEY_GET_JOBS], getJobs);

  return (
    <>
      <Header title="HR Jobs" />
      <DataStatusHandler {...results}>
        {(data) =>
          data.length > 1 ? (
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
          ) : (
            <Alert severity="info">There is no any data</Alert>
          )
        }
      </DataStatusHandler>
    </>
  );
};
