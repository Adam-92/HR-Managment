import { GridPagination } from '@mui/x-data-grid';

import { Pagination } from './Pagination';

export const CustomPagination = () => {
  return <GridPagination ActionsComponent={Pagination} />;
};
