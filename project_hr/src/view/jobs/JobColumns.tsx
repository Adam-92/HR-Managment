import { TableRow, TableCell, TableHead, Checkbox } from '@mui/material';

import { useTable } from 'context/Table/useTable';

import { columns } from './columns';

export const JobColumns = () => {
  const { markAllRows, markedRows, isMarkAllRows } = useTable();

  const someRowsAreMarked = markedRows.length > 0;

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            checked={isMarkAllRows}
            indeterminate={someRowsAreMarked && !isMarkAllRows}
            onChange={markAllRows}
          />
        </TableCell>
        {columns.map((column) => {
          return <TableCell key={column}>{column}</TableCell>;
        })}
      </TableRow>
    </TableHead>
  );
};
