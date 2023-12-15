import { useState, useCallback } from 'react';

export const useCheckboxRow = <T extends any[]>(data: T) => {
  const [isMarkMasterCheckbox, setIsMarkMasterCheckbox] = useState(false);

  const [markedRows, setMarkedRows] = useState<string[]>([]);

  const someRowsAreMarked = markedRows.length > 0;

  const rowsIds = data.map((row) => row.id);

  const markSingleRow = useCallback((id: string) => {
    setMarkedRows((prev) => [...prev, id]);
  }, []);

  const unmarkSingleRow = useCallback((id: string) => {
    setMarkedRows((prev) => prev.filter((idElement) => id !== idElement));
  }, []);

  const unmarkMasterCheckbox = useCallback(
    () => setIsMarkMasterCheckbox(false),
    [],
  );
  const unmarkAllRows = useCallback(() => setMarkedRows([]), []);

  const onChangeAllRows = useCallback(() => {
    /* Indeterminate */
    if (someRowsAreMarked && !isMarkMasterCheckbox) {
      setMarkedRows([]);
    }
    /* Unmark all checkboxes  */
    if (isMarkMasterCheckbox && someRowsAreMarked) {
      setMarkedRows([]);
      setIsMarkMasterCheckbox(false);
    }
    /* Mark all checkboxes */
    if (!isMarkMasterCheckbox && !someRowsAreMarked) {
      setMarkedRows([...rowsIds]);
      setIsMarkMasterCheckbox(true);
    }
  }, [isMarkMasterCheckbox, rowsIds, someRowsAreMarked]);

  const rowIsInsideMarkedRows = useCallback(
    (id: string) => {
      const row = markedRows.find((idElement) => id === idElement);
      return row;
    },
    [markedRows],
  );

  return {
    onChangeAllRows,
    markSingleRow,
    unmarkSingleRow,
    unmarkMasterCheckbox,
    rowIsInsideMarkedRows,
    unmarkAllRows,
    markedRows,
    isMarkMasterCheckbox,
    someRowsAreMarked,
  };
};
