import { useQuery } from '@tanstack/react-query';
import { CircularProgress, Alert, TablePagination } from '@mui/material';

import { parseError } from 'errors/parseError';
import {
  getBlacklist,
  QUERY_KEY_GET_BLACKLIST,
} from 'api/blacklist/getBlacklist';

import { useBlacklistParams } from './useBlacklistParams';
import { BlacklistTable } from './BlacklistTable';

export const Blacklist = () => {
  const {
    params,
    currentPage,
    handleChangePage,
    handleChangeRowsPerPage,
    columnsName,
  } = useBlacklistParams();

  const { isLoading, data, isError, error } = useQuery(
    [QUERY_KEY_GET_BLACKLIST, params],
    () => getBlacklist(params),
  );

  if (isLoading) {
    return <CircularProgress />;
  }

  if (isError) {
    return <Alert severity="warning">{parseError(error)}</Alert>;
  }
  return (
    <>
      <BlacklistTable columnsName={columnsName} rows={data} />
      <TablePagination
        component="div"
        count={data.count}
        page={currentPage}
        onPageChange={handleChangePage}
        rowsPerPage={parseInt(params.take, 10)}
        rowsPerPageOptions={[5, 10, 15, 20]}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
};
