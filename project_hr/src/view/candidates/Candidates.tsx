/* eslint-disable @typescript-eslint/no-shadow */
import { Alert, CircularProgress } from '@mui/material';

import { parseError } from 'errors/parseError';
import { Table } from 'components/Table/Table';
import { TableProvider } from 'providers/table/TableProvider';
import { Header } from 'components/Header/Header';
import { useCandidates } from 'api/candidates/useCandidates';
import { TableToolbar } from 'components/Table/TableToolbar';

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
            <TableToolbar dataCategory="candidates" link="addCandidate" />
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
