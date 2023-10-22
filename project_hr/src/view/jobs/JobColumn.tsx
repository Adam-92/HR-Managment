import { Link } from 'react-router-dom';
import { TableCell, TableSortLabel } from '@mui/material';

import { useTable } from 'providers/table/useTable';
import { seperateCamelCase } from 'utils/seperateCamelCase';

import type { ColumnsType } from './columns';

type JobColumnProps = {
  column: ColumnsType[number];
};

export const JobColumn = ({ column }: JobColumnProps) => {
  const { sort } = useTable();

  const sortQuery = sort.getSortQueryParam(column);
  const searchParams = new URLSearchParams(sortQuery);

  return (
    <TableCell key={column}>
      <Link to={`./?${searchParams}`}>
        <TableSortLabel>{seperateCamelCase(column)}</TableSortLabel>
      </Link>
    </TableCell>
  );
};
