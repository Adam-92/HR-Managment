import { useCallback, useEffect } from 'react';
import { Checkbox as MuiCheckbox, TableCell } from '@mui/material';

import { useTable } from 'context/Table/useTable';

type CheckboxProps = {
  id: string;
};

export const Checkbox = ({ id }: CheckboxProps) => {
  const {
    markSingleRow,
    unmarkSingleRow,
    isMarkAllRows,
    rowIsInsideMarkedRows,
  } = useTable();

  const isInside = rowIsInsideMarkedRows(id);

  const handleChange = useCallback(() => {
    if (!isInside) {
      markSingleRow(id);
    } else {
      unmarkSingleRow(id);
    }
  }, [isInside, markSingleRow, unmarkSingleRow, id]);

  useEffect(() => {
    if (isMarkAllRows) {
      markSingleRow(id);
    }
  }, [markSingleRow, isMarkAllRows, id]);

  return (
    <TableCell padding="checkbox">
      <MuiCheckbox checked={!!isInside} onChange={handleChange} />
    </TableCell>
  );
};
