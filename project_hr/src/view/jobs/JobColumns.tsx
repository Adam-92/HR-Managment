import { TableRow, TableCell, TableHead, Checkbox } from '@mui/material';

import { type ControlCheckboxes } from 'components/Table/Table';

import { columns } from './columns';

type JobColumnsProps = {
  controlCheckboxes: ControlCheckboxes;
};

export const JobColumns = ({ controlCheckboxes }: JobColumnsProps) => {
  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            checked={controlCheckboxes.isAllCheckboxesSet}
            onChange={controlCheckboxes.handleChangeAllCheckboxes}
          />
        </TableCell>
        {columns.map((column) => {
          return <TableCell key={column}>{column}</TableCell>;
        })}
      </TableRow>
    </TableHead>
  );
};
