import { createContext, type ChangeEvent } from 'react';
import { type SelectChangeEvent } from '@mui/material';

import { type RowsPerPageType } from './TableProvider';

export type TableValue = {
  currentPage: number;
  handleChangePage: (event: ChangeEvent<unknown>, value: number) => void;
  cutSelectedRangeOfData: () => {
    startIndex: number;
    endIndex: number;
  };
  markedRows: string[];
  isMarkAllRows: boolean;
  markAllRows: () => void;
  markSingleRow: (id: string) => void;
  unmarkSingleRow: (id: string) => void;
  rowIsInsideMarkedRows: (id: string) => string | undefined;
  rowsPerPage: RowsPerPageType;
  handleChangeRowsPerPage: (event: SelectChangeEvent) => void;
};

export const TableContext = createContext<TableValue | undefined>(undefined);
