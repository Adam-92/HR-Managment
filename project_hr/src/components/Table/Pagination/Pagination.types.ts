import type { ChangeEvent } from 'react';
import type { SelectChangeEvent } from '@mui/material';

import type { RowsPerPageType } from './rowsPerPage';

export type UsePaginationProps = {
  currentPage: number;
  handleChange: (event: ChangeEvent<unknown>, value: number) => void;
  numberOfPages: () => number;
  handleChangeRowsPerPage: (event: SelectChangeEvent) => void;
  getPaginatedData: (data: unknown[]) => unknown[];
  rowsPerPage: RowsPerPageType;
};
