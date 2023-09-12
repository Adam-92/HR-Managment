import { Table as MuiTable } from '@mui/material';

import { TableProvider } from '../../context/Table/TableProvider';

import { SelectRowsPerPage } from './SelectRowsPerPage ';
import { Pagination } from './Pagination';

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
      <SelectRowsPerPage />
      <MuiTable>
        <ColumnsRenderer />
        <RowsRenderer data={data} />
      </MuiTable>
      <Pagination totalRows={data.length} />
    </TableProvider>
  );
};
