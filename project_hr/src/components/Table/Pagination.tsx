import { Pagination as MuiPagination } from '@mui/material';

import { useTable } from 'context/Table/useTable';

import { numberOfPages } from '../../utils/numberOfPages';

type PaginationProps = {
  totalRows: number;
};

export const Pagination = ({ totalRows }: PaginationProps) => {
  const { currentPage, handleChangePage, rowsPerPage } = useTable();

  const pages = numberOfPages(totalRows, rowsPerPage);

  return (
    <MuiPagination
      count={pages}
      page={currentPage}
      onChange={handleChangePage}
    />
  );
};
