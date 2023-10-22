import { TableRow, TableCell, TableHead, Checkbox } from '@mui/material';

import { useTable } from 'providers/table/useTable';

import { JobColumn } from './JobColumn';
import type { ColumnsType } from './columns';

type JobColumnsProps = {
  columns: ColumnsType;
};

export const JobColumns = ({ columns }: JobColumnsProps) => {
  const { checkboxRow } = useTable();

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            checked={checkboxRow.isMarkAllRows}
            indeterminate={
              checkboxRow.someRowsAreMarked && !checkboxRow.isMarkAllRows
            }
            onChange={checkboxRow.onChangeAllRows}
          />
        </TableCell>
        {columns.map((column) => {
          return <JobColumn column={column} key={column} />;
        })}
      </TableRow>
    </TableHead>
  );
};
