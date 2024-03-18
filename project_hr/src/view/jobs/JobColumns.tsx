import {
  TableRow,
  TableCell,
  TableHead,
  Checkbox,
  TableSortLabel,
} from '@mui/material';
import { useTranslation } from 'react-i18next';

import { useTable } from 'providers/table/useTable';

import { JobColumn } from './JobColumn';
import type { JobColumnsType } from './columns';

type JobColumnsProps = {
  columns: JobColumnsType;
};

export const JobColumns = ({ columns }: JobColumnsProps) => {
  const { checkboxRow } = useTable();
  const { t } = useTranslation();
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
          <TableSortLabel>{t('tableToolbar.actions')}</TableSortLabel>
        </TableCell>
      </TableRow>
    </TableHead>
  );
};
