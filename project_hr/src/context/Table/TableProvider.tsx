import { useState, useMemo, useCallback } from 'react';

import { TableContext } from './context';

type TableProviderProps = {
  children: React.ReactNode;
};

export const TableProvider = ({ children }: TableProviderProps) => {
  const [isMarkAllRows, setIsMarkAllRows] = useState(false);
  const [markedRows, setMarkedRows] = useState<string[]>([]);
  console.log('🚀  markedRows:', markedRows);

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

  const value = useMemo(
    () => ({
      markedRows,
      isMarkAllRows,
      markSingleRow,
      unmarkSingleRow,
      markAllRows,
      rowIsInsideMarkedRows,
    }),
    [
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
