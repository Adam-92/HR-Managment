import { TableRow, TableCell, TableHead, Checkbox } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { useTable } from 'providers/table/useTable';

import type { CandidateColumnsType } from './columns';
import { CandidateColumn } from './CandidateColumn';

export type CandidateColumnsProps = {
  columns: CandidateColumnsType;
};

export const CandidateColumns = ({ columns }: CandidateColumnsProps) => {
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
          return <CandidateColumn column={column} key={column} />;
        })}
        <TableCell>{t('tableToolbar.actions')}</TableCell>
      </TableRow>
    </TableHead>
  );
};
