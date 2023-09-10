import { Table as MuiTable } from '@mui/material';

import { TableProvider } from '../../context/Table/TableProvider';

export type ControlCheckboxes = {
  isAllCheckboxesSet: boolean;
  handleChangeAllCheckboxes: () => void;
};

type TableProps<T> = {
  data: T;
  columnsRenderer: () => JSX.Element;
  rowsRenderer: (props: { data: T }) => JSX.Element;
};

export const Table = <T extends any[]>({
  data,
  columnsRenderer: ColumnsRenderer,
  rowsRenderer: RowsRenderer,
}: TableProps<T>) => {
  return (
    <TableProvider>
      <MuiTable>
        <ColumnsRenderer />
        <RowsRenderer data={data} />
      </MuiTable>
    </TableProvider>
  );
};
