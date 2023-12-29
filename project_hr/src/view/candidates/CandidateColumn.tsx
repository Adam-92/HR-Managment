import { Link } from 'react-router-dom';
import { TableCell, TableSortLabel } from '@mui/material';

import { useTable } from 'providers/table/useTable';
import { seperateCamelCase } from 'utils/seperateCamelCase';

import type { CandidateColumnsType } from './columns';

type CandidateColumnProps = {
  column: CandidateColumnsType[number];
};

export const CandidateColumn = ({ column }: CandidateColumnProps) => {
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
