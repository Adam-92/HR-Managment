import { useQuery } from '@tanstack/react-query';
import { CircularProgress, Alert, TablePagination } from '@mui/material';

import { parseError } from 'errors/parseError';
import {
  getBlacklist,
  QUERY_KEY_GET_BLACKLIST,
} from 'api/blacklist/getBlacklist';
import { Header } from 'components/Header/Header';

import { useBlacklist } from './useBlacklist';
import { BlacklistTable } from './BlacklistTable';
import { validateParams } from './validateParams';

export const Blacklist = () => {
  const { params, currentPage, handleChangePage, handleChangeRowsPerPage } =
    useBlacklist();
  const paramErrors = validateParams(params);

  const { isLoading, data, isError, error } = useQuery(
    [QUERY_KEY_GET_BLACKLIST, params],
    () => getBlacklist(params),
    {
      enabled: paramErrors.length === 0,
    },
  );

  if (paramErrors.length > 0) {
    return (
      <>
        {paramErrors.map((err) => (
          <Alert key={err} severity="warning">
            {err}
          </Alert>
        ))}
      </>
    );
  }

  if (isLoading) {
    return <CircularProgress />;
  }

  if (isError) {
    return <Alert severity="warning">{parseError(error)}</Alert>;
  }
  return (
    <>
      <Header title="Blacklist" />
      <BlacklistTable rows={data} />
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
