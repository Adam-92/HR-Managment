import { useState, useCallback } from 'react';

export const useCheckboxRow = (rowIds: string[]) => {
  const [isMarkMasterCheckbox, setIsMarkMasterCheckbox] = useState(false);

  const [markedRows, setMarkedRows] = useState<string[]>([]);

  const someRowsAreMarked = markedRows.length > 0;

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
      setMarkedRows([...rowIds]);
      setIsMarkMasterCheckbox(true);
    }
  }, [isMarkMasterCheckbox, rowIds, someRowsAreMarked]);

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
