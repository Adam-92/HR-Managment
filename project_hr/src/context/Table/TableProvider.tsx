import { useState, useMemo, useCallback, type ChangeEvent } from 'react';
import { type SelectChangeEvent } from '@mui/material';

import { TableContext } from './context';

type TableProviderProps = {
  children: React.ReactNode;
};

export type RowsPerPageType = '10' | '25' | '50';

export const TableProvider = ({ children }: TableProviderProps) => {
  const [isMarkAllRows, setIsMarkAllRows] = useState(false);
  const [markedRows, setMarkedRows] = useState<string[]>([]);

  const someRowsAreMarked = markedRows.length > 0;

  const markAllRows = useCallback(() => {
    setIsMarkAllRows((prev) => {
      if (someRowsAreMarked) {
        setMarkedRows([]);
        return false;
      }
      return !prev;
    });
  }, [someRowsAreMarked]);

  const markSingleRow = useCallback((id: string) => {
    setMarkedRows((prev) => [...prev, id]);
  }, []);

  const unmarkSingleRow = useCallback((id: string) => {
    setMarkedRows((prev) => prev.filter((idElement) => id !== idElement));
  }, []);

  const rowIsInsideMarkedRows = useCallback(
    (id: string) => {
      const row = markedRows.find((idElement) => id === idElement);
      return row;
    },
    [markedRows],
  );

  /* ----------------PAGINATION------------------- */

  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState<RowsPerPageType>('10');

  const handleChangeRowsPerPage = useCallback((event: SelectChangeEvent) => {
    setRowsPerPage(event.target.value as RowsPerPageType);
  }, []);

  const handleChangePage = useCallback(
    (event: ChangeEvent<unknown>, value: number) => {
      setCurrentPage(value);
    },
    [],
  );

  const cutSelectedRangeOfData = () => {
    const startIndex = (currentPage - 1) * parseInt(rowsPerPage, 10);
    const endIndex = startIndex + parseInt(rowsPerPage, 10);
    return { startIndex, endIndex };
  };

  const value = useMemo(
    () => ({
      currentPage,
      handleChangePage,
      rowsPerPage,
      handleChangeRowsPerPage,
      cutSelectedRangeOfData,
      markedRows,
      isMarkAllRows,
      markSingleRow,
      unmarkSingleRow,
      markAllRows,
      rowIsInsideMarkedRows,
    }),
    [
      cutSelectedRangeOfData,
      currentPage,
      handleChangePage,
      rowsPerPage,
      handleChangeRowsPerPage,
      markedRows,
      isMarkAllRows,
      rowIsInsideMarkedRows,
      markSingleRow,
      unmarkSingleRow,
      markAllRows,
    ],
  );

  return (
    <TableContext.Provider value={value}> {children}</TableContext.Provider>
  );
};
