import {
  TableRow,
  TableCell,
  TableHead,
  Checkbox,
  TableSortLabel,
} from '@mui/material';

import { useTable } from 'providers/table/useTable';

import type { CandidateColumnsType } from './columns';
import { CandidateColumn } from './CandidateColumn';

export type CandidateColumnsProps = {
  columns: CandidateColumnsType;
};

export const CandidateColumns = ({ columns }: CandidateColumnsProps) => {
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
          return <CandidateColumn column={column} key={column} />;
        })}
        <TableCell>
          <TableSortLabel>Actions</TableSortLabel>
        </TableCell>
      </TableRow>
    </TableHead>
  );
};
