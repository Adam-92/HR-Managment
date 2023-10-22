import type { ChangeEvent } from 'react';
import type { SelectChangeEvent } from '@mui/material';

export type RowsPerPageType = '10' | '25' | '50';

export type UsePaginationProps = {
  currentPage: number;
  handleChange: (event: ChangeEvent<unknown>, value: number) => void;
  numberOfPages: () => number;
  handleChangeRowsPerPage: (event: SelectChangeEvent) => void;
  cutSelectedRangeOfData: () => {
    startIndex: number;
    endIndex: number;
  };
  rowsPerPage: RowsPerPageType;
};
