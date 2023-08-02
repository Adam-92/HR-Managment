import {
  Pagination as MuiPagination,
  type TablePaginationProps,
} from '@mui/material';
import {
  useGridApiContext,
  useGridSelector,
  gridPageCountSelector,
} from '@mui/x-data-grid';

export const Pagination = ({
  page,
  onPageChange,
  className,
}: Pick<TablePaginationProps, 'page' | 'onPageChange' | 'className'>) => {
  const apiRef = useGridApiContext();
  const pageCount = useGridSelector(apiRef, gridPageCountSelector);
  console.log('🚀  page:', page);

  return (
    <MuiPagination
      color="primary"
      className={className}
      count={pageCount}
      page={page + 1}
      onChange={(event, newPage) => {
        onPageChange(event as any, newPage - 1);
      }}
    />
  );
};
