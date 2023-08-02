import { useQuery } from '@tanstack/react-query';
import { Alert, CircularProgress, Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

import { parseError } from 'errors/parseError';
import { QUERY_KEY_GET_JOBS, getJobs } from 'api/getJobs/getJobs';

import { columns } from './table';
import { CustomPagination } from './CustomPagination';

export const JobsTable = () => {
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
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={data}
        columns={columns}
        pagination
        slots={{
          pagination: CustomPagination,
        }}
        initialState={{
          filter: {
            filterModel: {
              items: [{ field: 'status', operator: 'contains', value: 'OPEN' }],
            },
          },
          columns: {
            columnVisibilityModel: {
              id: false,
              shortDescription: false,
              longDescription: false,
              logo: false,
              companyName: false,
            },
          },
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
};
