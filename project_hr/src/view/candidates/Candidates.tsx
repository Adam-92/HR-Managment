/* eslint-disable @typescript-eslint/no-shadow */
import { Link } from 'react-router-dom';
import { Alert, Button, CircularProgress } from '@mui/material';

import { Routes } from 'routing/Routes';
import { parseError } from 'errors/parseError';
import { Table } from 'components/Table/Table';
import { TableProvider } from 'providers/table/TableProvider';
import { Header } from 'components/Header/Header';
import { useCandidates } from 'api/candidates/useCandidates';

import { columns } from './columns';
import { CandidatesRows } from './CandidatesRows';
import { CandidateColumns } from './CandidateColumns';

export const Candidates = () => {
  const { isLoading, isError, error, data } = useCandidates();
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
      <Header title="Candidates" />
      <TableProvider data={data} columns={columns}>
        {(data) => (
          <>
            <Button
              component={Link}
              to={Routes.addCandidate}
              variant="contained"
              color="success"
            >
              + Add
            </Button>
            <Table
              data={data}
              dataCategory="candidates"
              columns={columns}
              columnsRenderer={CandidateColumns}
              rowsRenderer={CandidatesRows}
            />
          </>
        )}
      </TableProvider>
    </>
  );
};
