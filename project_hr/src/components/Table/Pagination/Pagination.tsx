import { Pagination as MuiPagination } from '@mui/material';

import { useTable } from 'providers/table/useTable';

export const Pagination = () => {
  const { pagination } = useTable();

  return (
    <MuiPagination
      count={pagination.numberOfPages()}
      page={pagination.currentPage}
      onChange={pagination.handleChange}
    />
  );
};
