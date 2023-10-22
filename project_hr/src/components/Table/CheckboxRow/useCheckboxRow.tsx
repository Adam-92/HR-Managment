import { useState, useCallback } from 'react';

export const useCheckboxRow = <T extends any[]>(data: T) => {
  const [isMarkAllRows, setIsMarkAllRows] = useState(false);

  const [markedRows, setMarkedRows] = useState<string[]>([]);

  const someRowsAreMarked = markedRows.length > 0;

  const rowsIds = data.map((row) => row.id);

  const markSingleRow = useCallback((id: string) => {
    setMarkedRows((prev) => [...prev, id]);
  }, []);

  const unmarkSingleRow = useCallback((id: string) => {
    setMarkedRows((prev) => prev.filter((idElement) => id !== idElement));
  }, []);

  const unmarkAllRows = useCallback(() => setIsMarkAllRows(false), []);

  const onChangeAllRows = useCallback(() => {
    /* Indeterminate */
    if (someRowsAreMarked && !isMarkAllRows) {
      setMarkedRows([]);
    }
    /* Unmark all checkboxes  */
    if (isMarkAllRows && someRowsAreMarked) {
      setMarkedRows([]);
      setIsMarkAllRows(false);
    }
    /* Mark all checkboxes */
    if (!isMarkAllRows && !someRowsAreMarked) {
      setMarkedRows([...rowsIds]);
      setIsMarkAllRows(true);
    }
  }, [isMarkAllRows, rowsIds, someRowsAreMarked]);

  const rowIsInsideMarkedRows = useCallback(
    (id: string) => {
      const row = markedRows.find((idElement) => id === idElement);
      return row;
    },
    [markedRows],
  );

  return {
    unmarkAllRows,
    onChangeAllRows,
    markSingleRow,
    unmarkSingleRow,
    rowIsInsideMarkedRows,
    isMarkAllRows,
    someRowsAreMarked,
  };
};
