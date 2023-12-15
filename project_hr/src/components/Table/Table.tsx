import { Table as MuiTable } from '@mui/material';

import type { ColumnsType } from 'view/jobs/columns';

import { Pagination } from './Pagination/Pagination';
import { SelectRowsPerPage } from './Pagination/SelectRowsPerPage';
import { Search } from './Search/Search';
import { SelectActions } from './SelectActions/SelectActions';

export type TableProps<T> = {
  data: T;
  columns: ColumnsType;
  columnsRenderer: (props: { columns: ColumnsType }) => JSX.Element;
  rowsRenderer: (props: { data: T }) => JSX.Element;
};

export const Table = <T extends any[]>({
  data,
  columns,
  columnsRenderer: ColumnsRenderer,
  rowsRenderer: RowsRenderer,
}: TableProps<T>) => {
  return (
    <>
      <SelectActions />
      <SelectRowsPerPage />
      <Search />
      <MuiTable>
        <ColumnsRenderer columns={columns} />
        <RowsRenderer data={data} />
      </MuiTable>
      <Pagination />
    </>
  );
};
