import { useState, useCallback, type ChangeEvent } from 'react';
import type { SelectChangeEvent } from '@mui/material';

import type { RowsPerPageType } from './rowsPerPage';

export const usePagination = (totalRows: number) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState<RowsPerPageType>('10');

  const handleChangeRowsPerPage = useCallback((event: SelectChangeEvent) => {
    const page = event.target.value as RowsPerPageType;
    setRowsPerPage(page);
  }, []);

  const numberOfPages = useCallback(() => {
    const maybeFloatNumber = totalRows / parseInt(rowsPerPage, 10);
    return Math.ceil(maybeFloatNumber);
  }, [rowsPerPage, totalRows]);

  const handleChange = useCallback(
    (event: ChangeEvent<unknown>, value: number) => {
      setCurrentPage(value);
    },
    [],
  );

  const getPaginatedData = useCallback(
    (data: unknown[]) => {
      const startIndex = (currentPage - 1) * parseInt(rowsPerPage, 10);
      const endIndex = startIndex + parseInt(rowsPerPage, 10);
      return data.slice(startIndex, endIndex);
    },
    [currentPage, rowsPerPage],
  );

  return {
    currentPage,
    handleChange,
    numberOfPages,
    handleChangeRowsPerPage,
    getPaginatedData,
    rowsPerPage,
  };
};
