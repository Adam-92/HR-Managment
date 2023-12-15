import { useCallback } from 'react';
import { Checkbox as MuiCheckbox, TableCell } from '@mui/material';

import { useTable } from 'providers/table/useTable';

type CheckboxRowProps = {
  id: string;
};

export const CheckboxRow = ({ id }: CheckboxRowProps) => {
  const { checkboxRow } = useTable();

  const isInside = checkboxRow.rowIsInsideMarkedRows(id);

  const handleChange = useCallback(() => {
    if (!isInside) {
      checkboxRow.markSingleRow(id);
    } else {
      checkboxRow.unmarkSingleRow(id);
    }
    checkboxRow.unmarkMasterCheckbox();
  }, [isInside, checkboxRow, id]);

  return (
    <TableCell padding="checkbox">
      <MuiCheckbox checked={!!isInside} onChange={handleChange} />
    </TableCell>
  );
};
