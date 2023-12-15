import {
  TableRow,
  TableCell,
  TableHead,
  Checkbox,
  TableSortLabel,
} from '@mui/material';

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
            checked={checkboxRow.isMarkMasterCheckbox}
            indeterminate={
              checkboxRow.someRowsAreMarked && !checkboxRow.isMarkMasterCheckbox
            }
            onChange={checkboxRow.onChangeAllRows}
          />
        </TableCell>
        {columns.map((column) => {
          return <JobColumn column={column} key={column} />;
        })}
        <TableCell>
          <TableSortLabel>Actions</TableSortLabel>
        </TableCell>
      </TableRow>
    </TableHead>
  );
};
