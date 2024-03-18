import { Link } from 'react-router-dom';
import { TableCell, TableSortLabel } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { useTable } from 'providers/table/useTable';

import type { CandidateColumnsType } from './columns';

type CandidateColumnProps = {
  column: CandidateColumnsType[number];
};

export const CandidateColumn = ({ column }: CandidateColumnProps) => {
  const { sort } = useTable();

  const sortQuery = sort.getSortQueryParam(column);
  const searchParams = new URLSearchParams(sortQuery);
  const { t } = useTranslation();

  return (
    <TableCell key={column}>
      <Link to={`./?${searchParams}`}>
        <TableSortLabel sx={{ whiteSpace: 'nowrap' }}>
          {t(`tableCandidates.${column}`)}
        </TableSortLabel>
      </Link>
    </TableCell>
  );
};
