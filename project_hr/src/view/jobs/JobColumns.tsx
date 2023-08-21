import { TableRow, TableCell, TableHead } from '@mui/material';

import type { JobColumnsType } from './columns';

type JobColumnsProps = {
  columns: JobColumnsType;
};

export const JobColumns = ({ columns }: JobColumnsProps) => {
  return (
    <TableHead>
      <TableRow>
        {columns.map((column) => {
          return <TableCell>{column}</TableCell>;
        })}
      </TableRow>
    </TableHead>
  );
};
