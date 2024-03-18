import { Link } from 'react-router-dom';
import { TableCell, TableSortLabel } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { useTable } from 'providers/table/useTable';

import type { JobColumnsType } from './columns';

type JobColumnProps = {
  column: JobColumnsType[number];
};

export const JobColumn = ({ column }: JobColumnProps) => {
  const { sort } = useTable();
  const { t } = useTranslation();

  const sortQuery = sort.getSortQueryParam(column);
  const searchParams = new URLSearchParams(sortQuery);

  return (
    <TableCell key={column}>
      <Link to={`./?${searchParams}`}>
        <TableSortLabel sx={{ whiteSpace: 'nowrap' }}>
          {t(`tableJobs.${column}`)}
        </TableSortLabel>
      </Link>
    </TableCell>
  );
};
